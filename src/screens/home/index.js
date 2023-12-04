import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Container, Header } from "../../components";
import SearchInput from "../../components/searchInput";
import { useDispatch, useSelector } from "react-redux";
import { getContentAction } from "../../redux/actions/content/contentAction";
import { ContentList, HistorySearchList } from "../../views";

export default function Home() {
  const [searchKey, setSearchKey] = React.useState(" ");
  const dispatch = useDispatch();
  const { contentData } = useSelector((state) => state.content);

  useEffect(() => {
    const params = {
      q: searchKey,
    };
    if (searchKey?.length > 0) {
      dispatch(getContentAction(params));
    }
  }, [searchKey]);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Container>
        <View style={styles.search_area}>
          <SearchInput setSearchKey={setSearchKey} searchKey={searchKey} />
        </View>
        <HistorySearchList />
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {contentData?.length > 0 ? (
            <ContentList data={contentData} />
          ) : (
            <Text>Please enter a search term to find a Pokemon.</Text>
          )}
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  search_area: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
