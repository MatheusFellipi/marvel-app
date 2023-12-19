import { CardsCarrossel, styles, TextTitleCard } from './styles';
import { Image } from 'expo-image';
import { PropsCardsComponents } from '@/types/shared/components/carrossel';

export const CardsComponent = ({
  data,
  handleRoute,
}: Readonly<PropsCardsComponents>) => {
  const url = `${data?.thumbnail?.path}.${data?.thumbnail?.extension}`;

  const title = () => {
    let title = data?.name ?? data?.title ?? data?.fullName ?? "";
    if (title.length > 30) {
      title = title.slice(0, 15) + "...";
    }
    return title;
  };

  return (
    <CardsCarrossel
      onPress={() => handleRoute?.(data.id)}
      accessibilityLabel={`Card para ${title()}. Toque para ver detalhes.`}
    >
      <Image style={styles.image} source={url} transition={1000} accessible />
      <TextTitleCard
        accessibilityLabel={`Título do card: ${title()}`}
      >
        {title()}
      </TextTitleCard>
    </CardsCarrossel>
  );
};
