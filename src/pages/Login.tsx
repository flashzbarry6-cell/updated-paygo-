
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout heading="Login to continue">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
