import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [retypeEmail, setRetypeEmail] = useState("");
  const [emailError, setEmailError] = useState({ error: false, message: "" });
  const [retypeEmailError, setRetypeEmailError] = useState({
    error: false,
    message: "",
  });
  // skipped for now because validation formate is not given
  // const [password, setPassword] = useState("");
  // const [passwordError, setPasswordError] = useState({
  //   error: false,
  //   message: "",
  // });
  const [policyError, setPolicyError] = useState({
    error: false,
    message: "",
  });
  const [policy, setPolicy] = useState(false);

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
    if (email === retypeEmail) {
      setRetypeEmailError({
        error: false,
        message: "",
      });
    }
    if (policy) {
      setPolicyError({
        error: false,
        message: "",
      });
    }
  }, [email, retypeEmail, policy]);

  const submitHandler = () => {
    if (!policy) {
      setPolicyError({
        error: true,
        message: "Esse campo é obrigatório",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            src={require("./../../../asset/logo.png")}
            alt="Kiwify"
            className="mx-auto h-12 w-auto"
          />{" "}
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Criar nova conta
          </h2>{" "}
          <p className="mt-2 text-center text-base leading-5 text-gray-600">
            Ou{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              entrar na sua conta existente
            </Link>
          </p>
        </div>{" "}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                E-mail
              </label>{" "}
              <div>
                {" "}
                <input
                  type="text"
                  autocomplete="off"
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
              </div>{" "}
              {emailError.error && (
                <div>
                  <div class="text-xs text-red-500 mt-1">
                    {emailError?.message}
                  </div>
                </div>
              )}
            </div>{" "}
            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                Repetir e-mail
              </label>{" "}
              <div>
                {" "}
                <input
                  type="email"
                  autocomplete="off"
                  name="null"
                  value={retypeEmail}
                  onChange={(e) => setRetypeEmail(e.target.value)}
                  onBlur={() => {
                    if (!retypeEmail) {
                      setRetypeEmailError({
                        error: true,
                        message: "Esse campo é obrigatório",
                      });
                    } else if (email && email !== retypeEmail) {
                      setRetypeEmailError({
                        error: true,
                        message: "e-mail não corresponde",
                      });
                    } else {
                      setRetypeEmailError({
                        error: false,
                        message: "",
                      });
                    }
                  }}
                  className={`form-input block py-2 px-3 border ${
                    retypeEmailError.error
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
                />{" "}
              </div>{" "}
              {retypeEmailError.error && (
                <div>
                  <div class="text-xs text-red-500 mt-1">
                    {retypeEmailError?.message}
                  </div>
                </div>
              )}
            </div>{" "}
            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Senha
              </label>{" "}
              <div>
                {" "}
                <input
                  type="password"
                  autocomplete="off"
                  name="password"
                  className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                />{" "}
              </div>
            </div>{" "}
            <div className="mt-6">
              <label className="relative flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    value={policy}
                    onChange={(e) => setPolicy(e.target.value)}
                    className={` ${
                      policyError.error && "border-red-500"
                    } form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer`}
                  />
                </div>{" "}
                <div className="ml-2 text-sm leading-5">
                  <span className="font-medium text-gray-700">
                    Eu li e aceito os{" "}
                    <a
                      href="https://kiwify.com.br/termos-de-uso"
                      target="_blank"
                      className="underline"
                    >
                      {" "}
                      termos de uso
                    </a>
                    <a
                      href="https://kiwify.com.br/licenca-de-uso-software"
                      target="_blank"
                      className="underline"
                    >
                      termos de licença de uso de software
                    </a>
                    <a
                      href="https://kiwify.com.br/politica-de-conteudo"
                      target="_blank"
                      className="underline"
                    >
                      política de conteúdo
                    </a>
                    da Kiwify
                  </span>
                </div>
              </label>
              {policyError.error && (
                <div>
                  <div class="text-xs text-red-500 mt-1">
                    {policyError?.message}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  onClick={submitHandler}
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Criar conta
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
