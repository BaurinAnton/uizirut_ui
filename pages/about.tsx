import { getAbout } from "@api";
import { AboutTemplate } from "@templates";
import { TAbout } from "@types";

type TProps = {
  about: {
    data: {
      attributes: TAbout;
    };
  };
};

export default function NextAboutPage({ about }: TProps) {
  return <AboutTemplate about={about.data.attributes} />;
}

export async function getServerSideProps() {
  const about = await getAbout();

  return { props: { about } };
}
