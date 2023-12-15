import { useEffect, useState } from "react";
import { SearchIcon } from "./styles";
import { Icons } from "@assets/index";
import { ModalComponent } from "@/shared/components/modal";
import { InputComponent } from "@/shared/components/input";
import { FilterComponent } from "./filters";
import { ResultType, TypeFilter } from "@/types/components/search";
import { query } from "./query";
import { FlatList, Keyboard, View } from "react-native";
import { useTheme } from "styled-components";
import { controllerSearch } from "@/services/search";
import { CardSearchComponent } from "./cards";

export const SearchComponent = () => {
  const [data, setData] = useState<ResultType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const [filterCurrent, setFilterCurrent] = useState("characters");

  const [keyboardDidShow, setKeyboardDidShow] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardDidShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardDidShow(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleChangeFilter = (filter: TypeFilter) => {
    setFilterCurrent(filter.type);
  };

  const handleSearch = (value: string) => {
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
            marginTop: keyboardDidShow ? 150 : 0,
            paddingHorizontal: 10,
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
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CardSearchComponent item={item} />}
          />
        </View>
      </ModalComponent.High>
    </>
  );
};
