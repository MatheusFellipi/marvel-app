import { TypeCharactersDetails } from "@/types/components/heros";
import { CardVersionHeroComponent } from "./cardVersion";
import { Container } from "../styled";
import { ResultType } from "@/types/components/search";

type Props = {
  data?: ResultType[];
  current?: TypeCharactersDetails;
};

export const VersionHeroComponent = ({ data, current }: Props) => {
  return (
    <Container>
      <CardVersionHeroComponent
        secondary={true}
        key={current?.id ?? 0}
        data={current}
      />
      {data && data?.length > 0 &&
        data?.map((item) => (
          <>
            {item.id !== current?.id && (
              <CardVersionHeroComponent key={item.id} data={item} />
            )}
          </>
        ))}
    </Container>
  );
};
