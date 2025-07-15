"use client";
import React from "react";
import { Input } from "../ui/input";

type Props = {
  type: string;
  name: string;
  register: any;
};

export default function InputField({ type, name, register }: Props) {
  return (
    <div>
      <Input type={type} name={name} {...register(name)} />
    </div>
  );
}
