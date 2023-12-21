import { FlatList } from "react-native";
import { FilterBtn } from "./styles";
import { useTheme } from "styled-components/native";
import { useState } from "react";
import { TypeFilter } from "@/types/components/search";
import { TextDescription } from "@/shared/style/font";

const Filter = [
  {
    name: "Heróis",
    type: "characters",
    selected: true,
  },
  {
    name: "Quadrinhos",
    type: "comics",
    selected: false,
  },
  {
    name: "Séries",
    type: "series",
    selected: false,
  },
  {
    name: "Eventos",
    type: "events",
    selected: false,
  },
];

type Props = {
  onCallBack: (item: TypeFilter) => void;
};

export const FilterComponent = ({ onCallBack }: Props) => {
  const theme = useTheme();
  const [options, setOptions] = useState(Filter);

  const handleChangeFilter = (filter: TypeFilter) => {
    setOptions(
      options.map((item) => ({
        ...item,
        selected: item.type === filter.type,
      }))
    );
    onCallBack(filter);
  };

  return (
    <FlatList
      horizontal
      keyExtractor={(item) => item.type}
      data={options}
      renderItem={({ item }) => (
        <FilterBtn
          select={item.selected}
          accessibilityRole="button"
          accessibilityLabel={item.name}
          accessibilityState={{ selected: item.selected }}
          onPress={() => handleChangeFilter(item)}
        >
          <TextDescription
            size={12}
            color={item.selected ? "white" : "dark"}
            accessibilityRole="text"
          >
            {item.name}
          </TextDescription>
        </FilterBtn>
      )}
    />
  );
};
