import { CardNameEvents, Divider } from './styles';
import { format } from 'date-fns';
import { ProfileSubtitle500, ProfileSubtitle600 } from '@/shared/style/font';
import { TypeEventsDetails } from '@/types/components/events';

const compararPorDataDeInicio = (a, b) => {
  const dataInicioA = new Date(a.start);
  const dataInicioB = new Date(b.start);
  return dataInicioA - dataInicioB;
};

const render = (title: string, handle: Function, id: number) => (
  <CardNameEvents key={id * 0.7} onPress={() => handle(id)}>
    <ProfileSubtitle600>{title}</ProfileSubtitle600>
  </CardNameEvents>
);

export const formatTable = (data: TypeEventsDetails[], handle: Function) => {
  const values = [];
  data.slice(0,10)
  data.sort(compararPorDataDeInicio);
  data?.forEach((item) => {
    values.push([
      <ProfileSubtitle500 key={item.id * 0.3}>
        {format(item.start, "yyyy")}
      </ProfileSubtitle500>,
      <Divider key={item.id * 0.4} />,
      render(item.title, handle, item.id),
    ]);
  });
  return values;
};
