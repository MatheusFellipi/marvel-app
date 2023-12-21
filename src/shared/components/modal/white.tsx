import { Icons } from "@assets/index";
import { ClosedWhite, White } from "./styled";
import { ProfileSubtitle500 } from "@/shared/style/font";

export function HeaderWhite({ onClosed, title }: Readonly<any>) {
  return (
    <White>
      <ProfileSubtitle500
        size={18}
        style={{
          flex: 1,
          textAlign: "center",
        }}
      >
        {title}
      </ProfileSubtitle500>
      <ClosedWhite onPress={onClosed}>
        <Icons.Closed />
      </ClosedWhite>
    </White>
  );
}
