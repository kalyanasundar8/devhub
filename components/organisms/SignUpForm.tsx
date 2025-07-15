"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Components
import FormField from "../molecules/FormField";
// Schema
import { signupSchema } from "@/lib/validations/userSignUpValidation";
import ButtonComp from "../atoms/ButtonComp";

type Props = {};

export default function SignUpForm({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  return (
    <div>
      <div>
        <form>
          <div>
            <FormField
              type="text"
              label="Username"
              htmlFor="username"
              name="username"
              register={register}
              error={errors.username?.message}
            />
          </div>
          <div>
            <FormField
              type="email"
              label="Email"
              htmlFor="email"
              name="email"
              register={register}
              error={errors.email?.message}
            />
          </div>
          <div>
            <FormField
              type="password"
              label="Password"
              htmlFor="password"
              name="password"
              register={register}
              error={errors.password?.message}
            />
          </div>
          <div>
            <FormField
              type="password"
              label="Confirm Password"
              htmlFor="confirmpassword"
              name="confirmpassword"
              register={register}
              error={errors.confirmpassword?.message}
            />
          </div>
          <ButtonComp label="Continue" />
        </form>
      </div>
    </div>
  );
}
