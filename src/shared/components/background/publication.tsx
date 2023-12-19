import { SubtitleText, TextDescription } from "@/shared/style/font";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type Props = {
  start?: Date | number;
  end?: Date | number;
};

export const PublicationComponent = ({ end, start }: Props) => (
  <>
    <SubtitleText color={"white"}>Publicação</SubtitleText>
    <TextDescription>
      O primeiro ano de publicação da série foi
      {format(start ?? "0000-01", "yyyy MMMM", { locale: ptBR })} e o último ano
      de publicação da série foi{" "}
      {format(end ?? "0000-01", "yyyy MMMM", { locale: ptBR })}.
    </TextDescription>
  </>
);
