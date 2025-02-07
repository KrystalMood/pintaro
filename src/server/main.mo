import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Types "./types/Types";
import Time "mo:base/Time";

actor {
  private let profiles = HashMap.HashMap<Text, Types.Profile>(10, Text.equal, Text.hash);

  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  public shared query func getProfile(walletAddress : Text) : async Types.ProfileResult {
    switch (profiles.get(walletAddress)) {
      case (null) { #err("Profile not found") };
      case (?profile) { #ok(profile) };
    };
  };

  public shared func createProfile(walletAddress : Text, profile : Types.Profile) : async Types.ProfileResult {
    if (profiles.get(walletAddress) != null) {
      return #err("Profile already exists");
    };

    profiles.put(walletAddress, profile);
    
    switch (profiles.get(walletAddress)) {
      case (null) { #err("Failed to create profile") };
      case (?createdProfile) { #ok(createdProfile) };
    }
  };

  public shared func updateProfile(walletAddress : Text, profile : Types.Profile) : async Types.ProfileResult {
    if (profile.walletAddress != walletAddress) {
      return #err("Wallet address mismatch");
    };

    switch (profiles.get(walletAddress)) {
      case (null) {
        profiles.put(walletAddress, profile);
        switch (profiles.get(walletAddress)) {
          case (null) { #err("Failed to create profile") };
          case (?createdProfile) { #ok(createdProfile) };
        }
      };
      case (?existingProfile) {
        profiles.put(walletAddress, profile);
        switch (profiles.get(walletAddress)) {
          case (null) { #err("Failed to update profile") };
          case (?updatedProfile) { #ok(updatedProfile) };
        }
      };
    }
  };

  public shared func deleteProfile(walletAddress : Text) : async Types.ProfileResult {
    switch (profiles.get(walletAddress)) {
      case (null) { #err("Profile not found") };
      case (?profile) {
        profiles.delete(walletAddress);
        #ok(profile)
      };
    };
  };

  public shared func uploadProfileImage(walletAddress : Text, base64Image : Text) : async Types.ImageUploadResult {
    switch (profiles.get(walletAddress)) {
      case (null) { #err("Profile not found") };
      case (?profile) {
        let updatedProfile = {
          profile with
          avatarUrl = ?base64Image;
          updatedAt = Time.now();
          lastUpdated = Time.now();
        };
        profiles.put(walletAddress, updatedProfile);
        #ok(base64Image)
      };
    };
  };
};