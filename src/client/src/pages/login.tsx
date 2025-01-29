import { FC } from "react";
import Main from "@/layouts/main";

const Login: FC = () => {
  return (
    <Main auth={true} title="Login" description="Log in to your account to access courses, exclusive materials, and more. Start your learning journey with Pintaro today!">
      <div></div>
    </Main>
  );
};

export default Login;