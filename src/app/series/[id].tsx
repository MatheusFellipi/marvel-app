import { BackgroundComponent } from '@/shared/components/background';
import { CarrosselComponent } from '@/shared/components/carrossel';
import { controllerSeries } from '@/services/series';
import { Scroll } from '@/shared/components/scroll';
import { TextDescription } from '@/shared/style/font';
import { TypeComicsDetails } from '@/types/components/comics';
import { TypeSeriesDetails } from '@/types/components/series';
import { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from 'styled-components';

export default function HeroScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { id } = useLocalSearchParams();

  const [loader, setLoader] = useState(true);

  const [series, setSeries] = useState<TypeSeriesDetails>();
  const [comics, setComics] = useState<TypeComicsDetails[]>([]);

  const details = async (id: number) => {
    setLoader(true);
    try {
      const series = await controllerSeries.ById(id);
      setSeries(series[0]);
      const comics = await controllerSeries.Comics(id);
      setComics(comics);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    details(id as any);
  }, [id]);

  return (
    <Scroll bgColor={theme.colors.black}>
      <BackgroundComponent.Container
        img={series?.thumbnail}
        back={router.back}
        loader={loader}
      >
        <BackgroundComponent.Profile labels={series?.title} />
        <BackgroundComponent.Characteristics show={["stories", "events", "series", "comics"]} data={series} />
        <TextDescription>
          {series?.description || "Infelizmente, não temos informações adicionais sobre o personagens neste momento."}
        </TextDescription>
        <BackgroundComponent.Publication end={series?.endYear} start={series?.startYear}/>
      </BackgroundComponent.Container>
      <CarrosselComponent
        data={comics}
        title="Quadrinhos"
        loader={loader}
        handleRoute={(id) => {
          router.push({
            pathname: "comics/[id]",
            params: { id: id },
          });
        }}
      />
    </Scroll>
  );
}
