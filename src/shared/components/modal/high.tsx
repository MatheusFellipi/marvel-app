import { Container, ModalWrapContent } from "./styled";
import { HeaderWhite } from "./white";
import { ModalComponentsProps } from "@/types/components/modal";
import Modal from "react-native-modal";

export const High = ({
  children,
  ...props
}: Readonly<ModalComponentsProps>) => (
  <Modal statusBarTranslucent style={{ margin: 0 }} isVisible={props.open}>
    <Container>
      <HeaderWhite onClosed={props.onClosed} title={props.title} />
      <ModalWrapContent>{children}</ModalWrapContent>
    </Container>
  </Modal>
);
