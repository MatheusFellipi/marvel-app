import { Container } from "./styled";
import { HeaderWhite } from "./white";
import { ModalComponentsProps } from "@/types/components/modal";
import Modal from "react-native-modal";

export function High({ children, ...props }: Readonly<ModalComponentsProps>) {
  return (
    <Modal style={{ margin: 0 }} isVisible={props.open}>
      <Container>
        <HeaderWhite onClosed={props.onClosed} title={props.title} />
        {children}
      </Container>
    </Modal>
  );
}
