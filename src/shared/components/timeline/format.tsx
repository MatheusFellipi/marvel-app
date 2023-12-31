import React from "react";
import { CardNameEvents, Divider } from "./styles";
import { format } from "date-fns";
import { ProfileSubtitle500, ProfileSubtitle600 } from "@/shared/style/font";
import { TypeEventsDetails } from "@/types/components/events";

type TypeSort = { start: Date };

const sortDates = (a: TypeSort, b: TypeSort): number => {
  const startA = new Date(a.start);
  const startB = new Date(b.start);
  return startA.getTime() - startB.getTime();
};

const render = (title: string, handle: Function, id: number) => (
  <CardNameEvents
    key={id * 0.7}
    onPress={() => handle(id)}
    accessibilityRole="button"
    accessibilityLabel={`Evento: ${title}. Toque para mais detalhes.`}
  >
    <ProfileSubtitle600>{title}</ProfileSubtitle600>
  </CardNameEvents>
);

export const formatTable = (data: TypeEventsDetails[], handle: Function) => {
  const values: JSX.Element[][] = [];
  data.sort((a, b) => sortDates({ start: a.start }, { start: b.start }));
  data?.forEach((item) => {
    values.push([
      <ProfileSubtitle500
        key={item.id * 0.3}
        accessibilityLabel={`Ano do evento: ${format(item.start, "yyyy")}`}
      >
        {format(item.start, "yyyy")}
      </ProfileSubtitle500>,
      <Divider key={item.id * 0.4} />,
      render(item.title, handle, item.id),
    ]);
  });
  return values;
};
