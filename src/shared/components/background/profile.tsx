import { ProfileSubtitle500, ProfileTitle } from "@/shared/style/font";

type Props = {
  loader?: boolean;
  labels?: string;
};

export const ProfileComponent = ({ labels = "", loader }: Props) => {
  const subtitle = labels.split("(")[1]?.replaceAll(")", "");
  const title = labels.split("(")[0];

  return (
    <>
      <ProfileSubtitle500 accessibilityLabel={`Subtítulo: ${subtitle}`}>
        {subtitle}
      </ProfileSubtitle500>
      <ProfileTitle margin={[0,0,48,0]} accessibilityLabel={`Título: ${title}`}>
        {title}
      </ProfileTitle>
    </>
  );
};
