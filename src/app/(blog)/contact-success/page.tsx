import Title from "@/components/Title";
import PictureParagraph from "@/components/PictureParagraph";
import { getContact } from "@/api";
import { getSeo } from "@/utils/seo";

const contact = await getContact({});
const metadata = getSeo(contact);
export { metadata };

export default async function Courses({
  searchParams,
}: {
  searchParams: Promise<{ draft: string }>;
}) {
  const { draft } = await searchParams;

  const contact = await getContact({ draft });
  return (
    <PictureParagraph src={contact.picture.url ?? ""} alt={contact.picture.alt}>
      <div className="flex flex-col">
        <div>
          <Title>Contactez moi !</Title>
        </div>
        <h2 className="my-44 py-16 text-3xl">
          Merci pour votre message, je vous recontact rapidement
        </h2>
      </div>
    </PictureParagraph>
  );
}
