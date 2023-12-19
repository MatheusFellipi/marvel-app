import { CardSearchComponent } from "./cards";
import { controllerSearch } from "@/services/search";
import { FilterComponent } from "./filters";
import { FlatList, View } from "react-native";
import { Icons } from "@assets/index";
import { InputComponent } from "@/shared/components/input";
import { ModalComponent } from "@/shared/components/modal";
import { query } from "./query";
import { ResultType, TypeFilter } from "@/types/components/search";
import { SearchIcon } from "./styles";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SkeletonComponent } from "./skeleton";

export const SearchComponent = () => {
  const router = useRouter();

  const [data, setData] = useState<ResultType[]>([]);
  const [value, setValue] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const [filterCurrent, setFilterCurrent] = useState("characters");

  const handleChangeFilter = (filter: TypeFilter) => {
    setFilterCurrent(filter.type);
    if (value.length > 0) handleSearch(value, filter.type);
  };

  const handleNavigation = (id: number) => {
    router.push({
      pathname:
        filterCurrent === "characters" ? "hero/[id]" : `${filterCurrent}/[id]`,
      params: { id: id },
    });
    clear();
  };

  const handleSearch = (search: string, filter: string) => {
    if (search.length < 3) return;
    setValue(search);
    setLoader(true);
    const url = query(filter, search);
    controllerSearch
      .Get(url)
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const clear = () => {
    setFilterCurrent("characters");
    setIsOpen(false);
    setData([]);
  };
  return (
    <>
      <SearchIcon onPress={() => setIsOpen(true)}>
        <Icons.Nav.Search />
      </SearchIcon>
      <ModalComponent.High onClosed={clear} title="Pesquisa" open={isOpen}>
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
            onChangeText={(text: string) => handleSearch(text, filterCurrent)}
            placeholder="Faça sua busca"
          />
          <FilterComponent onCallBack={handleChangeFilter} />
        </View>
        {loader && <SkeletonComponent />}
        {!loader && (
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
        )}
      </ModalComponent.High>
    </>
  );
};
