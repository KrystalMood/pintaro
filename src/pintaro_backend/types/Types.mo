import Time "mo:base/Time";
import Result "mo:base/Result";

module {
    public type User = {
        email: Text;
        username: Text;
        passwordHash: Text;
        createdAt: Time.Time;
    };

    public type AuthResult = Result.Result<User, Text>;
}