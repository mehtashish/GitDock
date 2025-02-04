import AuthForm from "../components/AuthForm";

const SignUpPage = () => {
  const handleSignUp = (e, formData) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return <AuthForm type="signup" onSubmit={handleSignUp} />;
};

export default SignUpPage;
