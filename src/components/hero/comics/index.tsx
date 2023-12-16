import { TextComponent } from "@/shared/components/text";
import { SkeletonCarrosselComponent } from "@/components/search/skeleton";
import { CardCarrosselComponent } from "@/shared/components/cardCarrossel";
import { TypeComicsDetails } from "@/types/components/comics";

type Props = {
  loader?: boolean;
  comics?: TypeComicsDetails[];
};

export const ComicsHeroComponent = ({ loader, comics }: Props) => (
  <>
    {!loader && comics?.length !== 0 && (
      <TextComponent
        fontFamily="Poppins_700Bold"
        fontSize={18}
        margin={{
          left: 24,
        }}
        TextColor="white"
      >
        Quadrinhos
      </TextComponent>
    )}
    {loader && <SkeletonCarrosselComponent colorMode="dark" />}
    {!loader && comics?.length === 0 && (
      <TextComponent
        TextColor="white"
        fontFamily="Poppins_500Medium"
        fontSize={12}
      >
        Atualmente, o nosso herói não está estrelando em nenhuma história em
        quadrinhos. Fique ligado para descobrir quando ele retornará às páginas
        empolgantes das aventuras em quadrinhos!
      </TextComponent>
    )}
    {!loader && (
      <CardCarrosselComponent data={comics ?? []} handleRoute={() => {}} />
    )}
  </>
);
