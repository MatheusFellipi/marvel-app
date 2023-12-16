import { useEffect, useState } from "react";
import { SearchIcon } from "./styles";
import { Icons } from "@assets/index";
import { ModalComponent } from "@/shared/components/modal";
import { InputComponent } from "@/shared/components/input";
import { FilterComponent } from "./filters";
import { ResultType, TypeFilter } from "@/types/components/search";
import { query } from "./query";
import { FlatList, View } from "react-native";
import { controllerSearch } from "@/services/search";
import { CardSearchComponent } from "./cards";
import { useRouter } from "expo-router";

export const SearchComponent = () => {
  const router = useRouter();

  const [data, setData] = useState<ResultType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const [filterCurrent, setFilterCurrent] = useState("characters");

  const handleChangeFilter = (filter: TypeFilter) => {
    setFilterCurrent(filter.type);
  };

  const handleNavigation = (id: number) => {
    router.push({
      pathname:
        filterCurrent === "characters" ? "hero/[id]" : `${filterCurrent}/[id]`,
      params: { id: id },
    });
    setData([]);
    setIsOpen(false);
  };

  const handleSearch = (value: string) => {
    if (value.length < 3) return;

    const url = query(filterCurrent, value);
    controllerSearch
      .Get(url)
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <>
      <SearchIcon onPress={() => setIsOpen(true)}>
        <Icons.Nav.Search />
      </SearchIcon>
      <ModalComponent.High
        onClosed={() => setIsOpen(false)}
        title="Pesquisa"
        open={isOpen}
      >
        <View
          style={{
            paddingHorizontal: 24,
          }}
        >
          <InputComponent
            accessible={true}
            icon={<Icons.Nav.Search />}
            accessibilityLabel={"Faça sua busca"}
            secureTextEntry={false}
            focusable
            height="55px"
            margin={{
              bottom: 13,
            }}
            onChangeText={handleSearch}
            placeholder="Faça sua busca"
          />
          <FilterComponent onCallBack={handleChangeFilter} />
        </View>

        <FlatList
          data={data}
          nestedScrollEnabled
          style={{ paddingHorizontal: 6 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardSearchComponent
              handleNavigation={handleNavigation}
              item={item}
            />
          )}
        />
      </ModalComponent.High>
    </>
  );
};
