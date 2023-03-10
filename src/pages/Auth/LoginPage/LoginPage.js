import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState({ error: false, message: "" });
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: "",
  });

  const validateEmail = (email) => {
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      setEmailError({ error: false, message: "" });
    } else {
      setEmailError({ error: true, message: "O e-mail deve ser válido" });
    }
  };

  useEffect(() => {
    if (email) {
      validateEmail(email);
    }
  }, [email]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            src={require("./../../../asset/logo.png")}
            alt="Workflow"
            className="mx-auto h-12 w-auto"
          />{" "}
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Entrar na sua conta
          </h2>{" "}
          <p className="mt-2 text-center text-base leading-5 text-gray-600">
            Ou{" "}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              fazer cadastro
            </Link>
          </p>
        </div>{" "}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
              >
                E-mail
              </label>{" "}
              <div>
                {" "}
                <input
                  type="text"
                  autocomplete="username"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => {
                    if (!email) {
                      setEmailError({
                        error: true,
                        message: "Esse campo é obrigatório",
                      });
                    }
                  }}
                  className={`form-input block py-2 px-3 border ${
                    emailError.error ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
                />{" "}
              </div>
              {emailError.error && (
                <div>
                  <div class="text-xs text-red-500 mt-1">
                    {emailError?.message}
                  </div>
                </div>
              )}
            </div>{" "}
            <div className="mt-6">
              <label
                for="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Senha
              </label>{" "}
              <div>
                {" "}
                <input
                  type="password"
                  autocomplete="current-password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => {
                    if (!password) {
                      setPasswordError({
                        error: true,
                        message: "Esse campo é obrigatório",
                      });
                    } else {
                      setPasswordError({
                        error: false,
                        message: "",
                      });
                    }
                  }}
                  className={`form-input block py-2 px-3 border ${
                    passwordError.error ? "border-red-500" : "border-gray-300"
                  } border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
                />{" "}
              </div>
              {passwordError.error && (
                <div>
                  <div class="text-xs text-red-500 mt-1">
                    {passwordError?.message}
                  </div>
                </div>
              )}
            </div>{" "}
            <div className="mt-2 flex items-center justify-end">
              <div className="text-sm leading-5">
                <Link
                  to="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>{" "}
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  {" "}
                  Entrar
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
