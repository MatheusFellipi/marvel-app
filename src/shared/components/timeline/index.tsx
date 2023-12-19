import { TypeEventsDetails } from "@/types/components/events";
import { Icons } from "@assets/index";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Row, Rows, Table } from "react-native-reanimated-table";
import { formatTable } from "./format";
import { TextDescription } from "@/shared/style/font";

type Props = {
  data?: TypeEventsDetails[];
};

const Text = (title: string) => (
  <TextDescription color={"#BCC1CD"}>{title}</TextDescription>
);

export const TimelineComponent = ({ data }: Props) => {
  const router = useRouter();
  const [events, setEvents] = useState<any>([]);

  const handleRoute = (id: number) => {
    router.push({
      pathname: "events/[id]",
      params: { id: id },
    });
  };

  useEffect(() => {
    const res = formatTable(data ?? [], handleRoute);
    setEvents(res);
  }, [data]);

  return (
    <Table style={{ paddingHorizontal: 24, marginBottom: 37 }}>
      <Row
        data={[Text("data"), "", Text("timeline"), <Icons.Sort key={3123} />]}
        widthArr={[50, 16, 240, 40]}
      />
      <Rows data={events} widthArr={[50, 16, 240, 40]} />
    </Table>
  );
};
