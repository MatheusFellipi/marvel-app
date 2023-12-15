import { ReactNode } from "react";

export type ModalHeaderComponentsProps = {
  title?: string;
  onClosed: Function;
};

export type ModalComponentsProps = {
  open: boolean;
  children: ReactNode;
  onClosed: Function;
  title?: string;
};
