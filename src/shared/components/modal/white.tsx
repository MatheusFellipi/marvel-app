import { Icons } from "@assets/index";
import { ClosedWhite, White } from "./styled";
import { TextComponent } from "../text";

export function HeaderWhite({ onClosed, title }: Readonly<any>) {
  return (
    <White>
      <TextComponent
        fontSize={18}
        fontFamily="Poppins_500Medium"
        style={{
          flex: 1,
          textAlign: "center",
        }}
      >
        {title}
      </TextComponent>
      <ClosedWhite onPress={onClosed}>
        <Icons.Closed />
      </ClosedWhite>
    </White>
  );
}