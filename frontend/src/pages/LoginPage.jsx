import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  const handleLogin = (e, formData) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default LoginPage;
