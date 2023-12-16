import { TextComponent } from "@/shared/components/text";
import { SkeletonCarrosselComponent } from "@/components/search/skeleton";
import { TypeComicsDetails } from "@/types/components/comics";
import { useRouter } from "expo-router";
import { CarrosselComponent } from "@/shared/components/carrossel";

type Props = {
  loader?: boolean;
  comics?: TypeComicsDetails[];
};

export const HeroComicsComponent = ({ loader, comics }: Props) => {
  const router = useRouter();
  return (
    <>
      {loader && <SkeletonCarrosselComponent colorMode="dark" />}
      {!loader && comics?.length !== 0 && (
        <CarrosselComponent
          data={comics ?? []}
          title="Quadrinhos"
          handleRoute={(id) => {
            router.push({
              pathname: "comics/[id]",
              params: { id: id },
            });
          }}
        />
      )}
      {!loader && comics?.length === 0 && (
        <TextComponent
          TextColor="white"
          fontFamily="Poppins_500Medium"
          margin={{
            left: 24,
          }}
          style={{
            textAlign: "justify",
          }}
          fontSize={12}
        >
          Atualmente, o nosso herói não está estrelando em nenhuma história em
          quadrinhos. Fique ligado para descobrir quando ele retornará às
          páginas empolgantes das aventuras em quadrinhos!
        </TextComponent>
      )}
    </>
  );
};
