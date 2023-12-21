import { IsShowPass } from "./styled";
import { Icons } from "@assets/index";
import { Dispatch, SetStateAction } from "react";

type Props = {
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
};

export const IsIconShowPassComponents = ({
  showPassword,
  setShowPassword,
}: Props) => (
  <IsShowPass
    onPress={() => setShowPassword(!showPassword)}
    style={{
      paddingRight: 10,
    }}
  >
    {showPassword ? (
      <Icons.EyeOn fill={"#A0AEC0"} height={25} width={25} />
    ) : (
      <Icons.EyeOff fill={"#A0AEC0"} height={25} width={25} />
    )}
  </IsShowPass>
);

