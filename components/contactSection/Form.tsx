import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, InferType } from "yup";
import axios from "axios";
import styles from "../../styles/Home.module.css";

import Input from "./Input";
import ErrorInput from "./ErrorInput";

export default function Form() {
  const schema = object({
    name: string()
      .required("Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    phone: number()
      .min(1000000000000, "The minimum is 13")
      .typeError("Phone must be a number")
      .required("Phone is required"),
  });

  type Props = InferType<typeof schema>;

  function onSubmit(values: Props) {
    reset();
    return axios.post("http://localhost:3004/feedback", values);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Props>({
    resolver: yupResolver(schema),
  });
  return (
    <form className={styles.contactDivForm} onSubmit={handleSubmit(onSubmit)}>
      {errors?.name?.message ? (
        <ErrorInput
          placeholderText={"Name"}
          typeText={"text"}
          idText={"name"}
          errorMessage={errors?.name?.message}
          register={register("name")}
        />
      ) : (
        <Input
          placeholderText={"Name"}
          typeText={"text"}
          idText={"name"}
          register={register("name")}
        />
      )}

      {errors?.phone?.message ? (
        <ErrorInput
          placeholderText={"Phone"}
          typeText={"number"}
          idText={"phone"}
          errorMessage={errors?.phone?.message}
          register={register("phone")}
        />
      ) : (
        <Input
          placeholderText={"Phone"}
          typeText={"number"}
          idText={"phone"}
          register={register("phone")}
        />
      )}

      {errors?.email?.message ? (
        <ErrorInput
          placeholderText={"E-mail"}
          typeText={"email"}
          idText={"email"}
          errorMessage={errors?.email?.message}
          register={register("email")}
        />
      ) : (
        <Input
          placeholderText={"E-mail"}
          typeText={"email"}
          idText={"email"}
          register={register("email")}
        />
      )}

      <button type="submit" className={styles.contactDivButton}>
        Send
      </button>
    </form>
  );
}
