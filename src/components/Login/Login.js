import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm({ defaultValues: {} });
  const submit: SubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <h1>Login</h1>
        <input placeholder={"name"} type="text" {...register("name")} />
        <input placeholder={"password"} type="number" {...register("age")} />

        <input type="checkbox" />

        <button>Send</button>
      </form>
    </>
  );
}

export default Login;
