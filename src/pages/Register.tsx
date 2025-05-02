
import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <AuthLayout heading="Register to continue">
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
