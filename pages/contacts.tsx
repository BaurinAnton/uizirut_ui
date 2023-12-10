import { getContacts } from "@api";
import { ContactsTemplate } from "@templates";
import { TContact } from "@types";

type TProps = {
  contact: {
    data: {
      attributes: TContact;
    };
  };
};

export default function NextContactsPage({ contact }: TProps) {
  return <ContactsTemplate contact={contact.data.attributes} />;
}

export async function getServerSideProps() {
  const contact = await getContacts();

  return { props: { contact } };
}
