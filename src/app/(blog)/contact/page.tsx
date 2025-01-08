import contact from "@/../public/contact.jpg";
import Form from "next/form";

import Title from "@/components/Title";
import PictureParagraph from "@/components/PictureParagraph";
import { FC } from "react";
import { HTMLInputTypeAttribute } from "react";
import { submitForm } from "./action";

export default function Courses() {
  return (
    <PictureParagraph src={contact} alt="zzz">
      <div className="flex flex-col">
        <div>
          <Title>Contactez moi !</Title>
        </div>
        <div className="py-2">
          Envoyer moi un email à&nbsp;
          <a
            className="border-b border-accent"
            href="mailto:lenvolee.api@gmail.com"
          >
            lenvolee.api(@)gmail.com
          </a>
          &nbsp; ou utilisez le formulaire suivant :
        </div>
        <Form action={submitForm} className="flex flex-col">
          <div className="flex flex-col">
            <div className="box-content flex gap-4">
              <Input label="Nom" id="name" placeholder="Votre nom" />
              <Input label="Prénom" id="surname" placeholder="Votre prénom" />
            </div>
            <Input label="Email" id="mail" placeholder="Votre email" />
            <Input
              label="Message"
              id="message"
              placeholder="Votre message"
              type="textarea"
            />
          </div>
          <button
            className="mt-4 flex items-center justify-center self-start rounded-lg bg-accent p-4"
            type="submit"
          >
            Envoyer !
          </button>
        </Form>
      </div>
    </PictureParagraph>
  );
}

const Input: FC<{
  label: string;
  id: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}> = ({ label, id, placeholder, type = "text" }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label} :</label>
      {type === "textarea" && (
        <textarea
          className="my-2 w-full bg-accent/30 p-2"
          id={id}
          placeholder={placeholder ?? label}
          rows={7}
        />
      )}
      {type === "text" && (
        <input
          className="my-2 w-full bg-accent/30 p-2"
          id={id}
          type={type}
          placeholder={placeholder ?? label}
        />
      )}
    </div>
  );
};
