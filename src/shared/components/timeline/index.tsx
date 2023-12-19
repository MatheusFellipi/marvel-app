import { TypeEventsDetails } from "@/types/components/events";
import { Icons } from "@assets/index";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Row, Rows, Table } from "react-native-reanimated-table";
import { formatTable } from "./format";
import { TextDescription } from "@/shared/style/font";
import { SkeletonComponent } from "./skeleton";

type Props = {
  data?: TypeEventsDetails[];
  loader?: boolean;
};

const Text = (title: string) => (
  <TextDescription color={"#BCC1CD"}>{title}</TextDescription>
);

export const TimelineComponent = ({ data, loader }: Props) => {
  const router = useRouter();
  const [events, setEvents] = useState<any>([]);

  const handleRoute = (id: number) => {
    router.push({
      pathname: "events/[id]",
      params: { id: id },
    });
  };

  useEffect(() => {
    const res = formatTable(data?.slice(0, 10) ?? [], handleRoute);
    setEvents(res);
  }, [data]);

  return (
    <>
      {loader && <SkeletonComponent />}
      {!loader && data?.length !== 0 && (
        <Table style={{ paddingHorizontal: 24, marginBottom: 40 }}>
          <Row
            data={[
              Text("data"),
              "",
              Text("timeline"),
              <Icons.Sort key={3123} />,
            ]}
            widthArr={[50, 17, 290, 20]}
          />
          <Rows data={events} widthArr={[50, 16, 290, 20]} />
        </Table>
      )}
    </>
  );
};
