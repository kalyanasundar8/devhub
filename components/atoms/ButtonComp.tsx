import React from "react";
import { Button } from "../ui/button";

type Props = {
  label: string;
};

export default function ButtonComp({ label }: Props) {
  return (
    <div>
      <Button>{label}</Button>
    </div>
  );
}
