import { FormEvent, useEffect, useState } from "react";
import { TDataForms } from "@types";

export const useSubmitForm = (nameConference: string) => {
  const [inputs, setInputs] = useState<TDataForms | null>(null);
  const [isOk, setIsOk] = useState<boolean | null>(null);

  useEffect(() => {
    handlerSetInputs({ [`nameConference`]: nameConference } as TDataForms);
  }, []);

  const handlerSetInputs = (props: TDataForms) => {
    setInputs((inputs) => ({ ...inputs, ...props }));
  };

  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const url = `http://localhost:3000/api/form/`;
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (!response.ok) throw new Error("Error");
      const res = await response.ok;
      setIsOk(res);
    } catch (err) {
      console.error(err);
      setIsOk(false);
    }
  };

  return { inputs, handlerSetInputs, handlerSubmit, isOk, setIsOk };
};
