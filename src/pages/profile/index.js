import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import ProfileNavBar from "../../components/navBarProfile";
import ProfileHeader from "../../components/headerProfile";
import TabNavigation from "../../components/TabNavigasi";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileNavBar />
      <ScrollView>
        <ProfileHeader />
        <TabNavigation />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});
