import React from "react";
import Styles from "./login.styles.scss";
import Input from "@/presentation/components/input/input";
import Header from "@/presentation/components/loginHeader/loginHeader";
import Footer from "@/presentation/components/footer/footer";
import FormStatus from "@/presentation/components/formStatus/formStatus";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button className={Styles.submit} type="submit">
          Login
        </button>
        <span className={Styles.link}>Criar Conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  );
};

export default Login;
