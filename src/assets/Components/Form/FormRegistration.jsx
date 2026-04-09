import React, { useState } from "react";
import InputComponent from "../Input/InputComponent";
import TextArea from "../TextArea/TextArea";
import ButtonPrimary from "../Button/ButtonPrimary";
import { Link } from "react-router-dom";
import { RegisterRestaurant } from "../../../Apis/axios";
import { useNavigate } from "react-router-dom";

export default function FormRegistration() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone_number: "",
    description: "",
    email_restaurant: "",
    name_restaurant: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await RegisterRestaurant(formData);
      setMessage(res.data.message);
      setFormData({
        name: "",
        email: "",
        password: "",
        address: "",
        phone_number: "",
        description: "",
        email_restaurant: "",
        name_restaurant: "",
      });
      const token = res.data.access_token;
      localStorage.setItem("token", token);
      console.log(localStorage.getItem("token"));
      navigate("/admin");
    } catch (err) {
      return setMessage(
        err.response?.data?.message || "Une erreur est survenue",
      );
    }
  };
  return (
    <div className="">
      <h1 className="mb-3 font-bold text-xl mt-6 text-center">
        Créer votre restaurant sur Resto-Smart
      </h1>
      <div>
        <p>{message}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <h1 className="mb-3 font-medium text-xs">Information Personnelle</h1>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <InputComponent
              setFormData={setFormData}
              formData={formData}
              type={"text"}
              text={"Votre nom"}
              title={"username"}
            />
            <InputComponent
              setFormData={setFormData}
              formData={formData}
              type={"email"}
              text={"Votre adresse E-mail"}
              title={"email"}
            />
            <InputComponent
              setFormData={setFormData}
              formData={formData}
              type={"date"}
              text={""}
              title={"date_naiss"}
            />
            <InputComponent
              setFormData={setFormData}
              formData={formData}
              type={"number"}
              text={"Votre numéro de téléphone"}
              title={"number"}
            />
          </div>
          <InputComponent
            formData={formData}
            setFormData={setFormData}
            type={"password"}
            text={"Votre mot de passe"}
            title={"password"}
          />
        </div>
        <div>
          <h1 className="mb-2 font-medium text-xs">
            Information du Restaurant
          </h1>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <InputComponent
              formData={formData}
              setFormData={setFormData}
              type={"text"}
              text={"Adresse du restaurant"}
              title={"address"}
            />
            <InputComponent
              formData={formData}
              setFormData={setFormData}
              type={"text"}
              text={"Nom du restaurant"}
              title={"name_restaurant"}
            />
            <InputComponent
              formData={formData}
              setFormData={setFormData}
              type={"number"}
              text={"Numéro du restaurant"}
              title={"phone_number"}
            />
            <InputComponent
              formData={formData}
              setFormData={setFormData}
              type={"email"}
              text={"E-mail du restaurant"}
              title={"email_restaurant"}
            />
          </div>
          <TextArea
            formData={formData}
            setFormData={setFormData}
            text={"Description du restaurant"}
            title={"description"}
          />
        </div>
        <ButtonPrimary text={"Créer"} />
        <div className="flex space-x-3 justify-center text-sm mb-10">
          <p>Vous avez déja un compte ?</p>
          <Link
            to="/"
            className="text-yellow-600 hover:text-yellow-500 duration-300 transition-colors cursor-pointer"
          >
            Se connecter
          </Link>
        </div>
      </form>
    </div>
  );
}
