import logo from "@/../public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white p-12">
      <div className="mx-auto flex max-w-7xl flex-row justify-between">
        <div>
          <Image
            src={logo}
            width={100}
            style={{ height: "auto" }}
            alt="logo de l'envolée"
          />
          <div>Indi Oyarzun</div>
          <div>1 chemin de le brune, 09230 Mercenac</div>
        </div>
        <div className="self-end">
          <div>Développé par SAS Mintset</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
