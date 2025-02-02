import Time "mo:base/Time";
import Result "mo:base/Result";

module {
  public type User = {
    email : Text;
    username : Text;
    passwordHash : Text;
    createdAt : Time.Time;
  };

  public type AuthResult = Result.Result<User, Text>;

  public type Certificate = {
    courseId : Text;
    tokenId : Text;
    issuedAt : Int;
    transactionHash : Text;
  };

  public type NotificationSettings = {
    email : Bool;
    browser : Bool;
    courseUpdates : Bool;
    communityMessages : Bool;
  };

  public type Profile = {
    walletAddress : Text;
    nonce : ?Text;
    chainId : ?Int;
    networkVersion : ?Text;
    username : Text;
    email : Text;
    fullName : Text;
    avatarUrl : ?Text;
    enrolledCourses : [Text];
    completedCourses : [Text];
    certificates : ?Certificate;
    headline : ?Text;
    bio : ?Text;
    skills : [Text];
    expertise : [Text];
    reputation : Int;
    badges : [Text];
    forumPosts : Int;
    notificationSettings : NotificationSettings;
    createdAt : Int;
    updatedAt : Int;
    lastUpdated : Int;
  };

  public type ProfileResult = Result.Result<Profile, Text>;
  public type ImageUploadResult = Result.Result<Text, Text>;
};