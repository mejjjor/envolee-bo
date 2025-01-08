import contact from "@/../public/contact.jpg";

import Title from "@/components/Title";
import PictureParagraph from "@/components/PictureParagraph";

export default function Courses() {
  return (
    <PictureParagraph src={contact} alt="zzz">
      <div className="flex flex-col">
        <div>
          <Title>Contactez moi !</Title>
        </div>
        <h2 className="text-3xl py-16 my-44">
          Merci pour votre message, je vous recontact rapidement
        </h2>
      </div>
    </PictureParagraph>
  );
}
