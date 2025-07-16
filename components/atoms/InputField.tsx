"use client";
import React from "react";
import { Input } from "../ui/input";
import { UseFormRegister } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
};

type Props = {
  type: string;
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
};

export default function InputField({ type, name, register }: Props) {
  return (
    <div>
      <Input type={type} {...register(name)} />
    </div>
  );
}
