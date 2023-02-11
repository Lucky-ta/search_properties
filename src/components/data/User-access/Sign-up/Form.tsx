import { useRef } from "react";

import { Input } from "components/data/Input";

import { Form } from "@unform/web";

import * as S from "../style";

export function SignUpForm() {
  const formRef = useRef(null);
  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  const renderInputField = (
    fieldName: string,
    type: "text" | "email" | "password",
    labelText: string
  ) => (
    <label>
      {labelText}:
      <Input name={fieldName} type={type} />
    </label>
  );

  return (
    <S.Form>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <h1>Criar conta</h1>
        {renderInputField("userName", "text", "Nome")}
        {renderInputField("userEmail", "email", "E-mail")}
        {renderInputField("userPassword", "password", "Senha")}
        <button type="submit">Criar conta</button>
      </Form>
    </S.Form>
  );
}
