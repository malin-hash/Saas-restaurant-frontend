import React, { useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import FacebookCard from "../Card/FacebookCard";
import GoogleCard from "../Card/GoogleCard";
import InputComponent from "../Input/InputComponent";
import { Link } from "react-router-dom";
import { LoginUser } from "../../../Apis/axios";
import { useNavigate } from "react-router-dom";

export default function FromConnexion() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await LoginUser(formData);
      setMessage(res.data.message);
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/admin");
    } catch (err) {
      return setMessage(
        err.response?.data?.message || "Une erreur est survenue",
      );
    }
  };
  return (
    <div className="md:w-[80vh] w-auto">
      <div className="mb-8">
        <h1 className="font-bold text-2xl">Bienvenu sur Resto-Smart !</h1>
        <p className="text-sm text-gray-600">
          S'il vous plait connectez-vous pour continuer
        </p>
        <p>{message}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-2 font-bold mb-3"
      >
        <InputComponent
          formData={formData}
          setFormData={setFormData}
          text={"Adresse E-mail"}
          type={"email"}
          title={"email"}
        />
        <InputComponent
          formData={formData}
          setFormData={setFormData}
          text={"Mot de passe"}
          type={"password"}
          title={"password"}
        />
        <ButtonPrimary text={"Se connecter"} />
      </form>
      <p className="font-bold text-center mb-2 text-gray-600">Ou</p>
      <div className="grid grid-cols-2 gap-2 md:text-sm text-xs">
        <FacebookCard
          logo={<FaFacebook />}
          text={"Se connecter avec Facebook"}
        />
        <GoogleCard text={"Se connecter avec Google"} />
      </div>
      <p className="text-center font-bold text-blue-500 underline mt-3 mb-3 cursor-pointer hover:text-blue-600 duration-300 transition-colors">
        Mot de passe oublier ?
      </p>
      <div className="flex space-x-3 justify-center text-sm mb-10">
        <p>Vous avez un compte ?</p>
        <Link
          to="/registration"
          className="text-yellow-600 hover:text-yellow-500 duration-300 transition-colors cursor-pointer"
        >
          Créer un compte
        </Link>
      </div>
      <p className="font-bold text-center text-gray-600">
        @ 2026 Resto-Smart Setup
      </p>
    </div>
  );
}
