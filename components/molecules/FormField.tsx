"use client";
import React from "react";
import InputField from "../atoms/InputField";
import { Label } from "../ui/label";

type Props = {
  type: string;
  label: string;
  htmlFor: string;
  name: string;
  register: any;
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
