import React from "react";
import { Input } from "../ui/input";

type Props = {
  type: "password";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PasswordInput({ type, name, value, onChange }: Props) {
  return (
    <div>
      <Input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
}
