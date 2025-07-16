"use client";
import React from "react";
import InputField from "../atoms/InputField";
import { Label } from "../ui/label";
import { UseFormRegister } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
};

type Props = {
  type: string;
  label: string;
  htmlFor: string;
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
  error?: string;
};

export default function FormField({
  type,
  label,
  htmlFor,
  name,
  register,
  error,
}: Props) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      <InputField type={type} name={name} register={register} />
      {error && <p>{error}</p>}
    </div>
  );
}
