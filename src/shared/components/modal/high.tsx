import { useEffect, useState } from "react";
import { Container, ModalWrapContent } from "./styled";
import { HeaderWhite } from "./white";
import { ModalComponentsProps } from "@/types/components/modal";
import Modal from "react-native-modal";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";

export function High({ children, ...props }: Readonly<ModalComponentsProps>) {
  const [keyboardDidShow, setKeyboardDidShow] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardDidShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardDidShow(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <Modal style={{ margin: 0 }} isVisible={props.open}>
      <Container isKeyboard={keyboardDidShow}>
        <HeaderWhite onClosed={props.onClosed} title={props.title} />
        <ModalWrapContent>{children}</ModalWrapContent>
      </Container>
    </Modal>
  );
}
