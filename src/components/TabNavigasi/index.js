import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = React.useState("Videos");

  const renderTab = (tabName) => (
    <TouchableOpacity
      key={tabName}
      style={styles.tabButton}
      onPress={() => setActiveTab(tabName)}
    >
      <Text
        style={[styles.tabText, activeTab === tabName && styles.activeTabText]}
      >
        {tabName}
      </Text>
      {activeTab === tabName && <View style={styles.underline} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {["Videos", "Reposts", "Favorites", "Liked"].map((tab) => renderTab(tab))}
    </View>
  );
};

const EmptyState = () => {
  return (
    <View style={styles.emptyStateContainer}>
      <Text style={styles.mainText}>Upload your first video</Text>
      <Text style={styles.subText}>Your videos will appear here</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <TabNavigation />
      <EmptyState />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#white",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  tabText: {
    color: "gray",
    fontSize: 14,
    fontWeight: "500",
  },
  activeTabText: {
    color: "black",
    fontWeight: "bold",
  },
  underline: {
    marginTop: 5,
    width: "80%",
    height: 3,
    backgroundColor: "black",
    borderRadius: 2,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  iconContainer: {
    backgroundColor: "#333",
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  iconText: {
    fontSize: 30,
    color: "white",
  },
  mainText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 100,
  },
  subText: {
    color: "gray",
    fontSize: 14,
    marginTop: 10,
  },
});
