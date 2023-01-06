import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";

import { RestuarantInfoCard } from "../components/restuarant-info-card.component";

export const RestuarantsScreen = () => (
<SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestuarantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    justifyContent: "center",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});