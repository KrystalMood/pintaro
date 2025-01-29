import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Types "../types/Types";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Nat32 "mo:base/Nat32";

actor Auth {
  private let users = HashMap.HashMap<Text, Types.User>(10, Text.equal, Text.hash);
  private let sessions = HashMap.HashMap<Text, Principal>(10, Text.equal, Text.hash);

  private func hashPassword(password : Text) : Text {
    let hash = Text.hash(password);
    return Nat32.toText(hash);
  };

  public shared (_) func register(email : Text, username : Text, password : Text) : async Types.AuthResult {
    if (users.get(email) != null) {
      return #err("Email already exists");
    };

    let hashedPassword = hashPassword(password);
    let user = {
      email = email;
      username = username;
      passwordHash = hashedPassword;
      createdAt = Time.now();
    };

    users.put(email, user);
    return #ok(user);
  };

  public shared (msg) func login(email : Text, password : Text) : async Types.AuthResult {
    switch (users.get(email)) {
      case (null) { #err("User not found") };
      case (?user) {
        if (user.passwordHash == hashPassword(password)) {
          let sessionId = hashPassword(email # Int.toText(Time.now()));
          sessions.put(sessionId, msg.caller);
          return #ok(user);
        } else {
          #err("Invalid password");
        };
      };
    };
  };

  public shared (msg) func logout(sessionId : Text) : async Types.AuthResult {
    switch (sessions.get(sessionId)) {
      case (null) { #err("Session not found") };
      case (?session) {
        if (session == msg.caller) {
          sessions.delete(sessionId);
          #ok({
            email = "";
            username = "";
            passwordHash = "";
            createdAt = Time.now();
          });
        } else {
          #err("Invalid session");
        };
      };
    };
  };
};