import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Types "../types/Types";
import Result "mo:base/Result";

actor Profile {
  private let profiles = HashMap.HashMap<Text, Types.Profile>(10, Text.equal, Text.hash);
  private let images = HashMap.HashMap<Text, Text>(10, Text.equal, Text.hash);

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
    #ok(profile)
  };

  public shared func updateProfile(walletAddress : Text, profile : Types.Profile) : async Types.ProfileResult {
    if (profiles.get(walletAddress) == null) {
      return #err("Profile not found");
    };

    profiles.put(walletAddress, profile);
    #ok(profile)
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

  public shared func uploadProfileImage(walletAddress : Text, imageData : Text) : async Result.Result<Text, Text> {
    if (profiles.get(walletAddress) == null) {
      return #err("Profile not found");
    };

    images.put(walletAddress, imageData);
    
    switch (profiles.get(walletAddress)) {
      case (null) { #err("Profile not found") };
      case (?profile) {
        let updatedProfile = {
          profile with
          avatarUrl = ?imageData;
        };
        profiles.put(walletAddress, updatedProfile);
        #ok(imageData)
      };
    };
  };
}; 