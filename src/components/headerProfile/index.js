import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/WhatsApp Image 2024-09-29 at 16.44.50_92f7246e.jpg")}
        style={styles.roundImage}
      />
      <Text style={styles.text}>@DandiPratama</Text>
      <View style={styles.buttonContainer}>
        {/* Edit Profile Button */}
        <TouchableOpacity
          style={[
            styles.simpleButton,
            { backgroundColor: "white", borderColor: "gray" },
          ]}
        >
          <Text style={[styles.buttonText, { color: "black" }]}>
            Edit Profile
          </Text>
        </TouchableOpacity>

        {/* Bagikan Profile Button */}
        <TouchableOpacity
          style={[
            styles.simpleButton,
            { backgroundColor: "white", borderColor: "gray" },
          ]}
        >
          <Text style={[styles.buttonText, { color: "black" }]}>
            Bagikan Profile
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.counterContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>4</Text>
          <Text style={styles.labelText}>mengikuti</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>1M</Text>
          <Text style={styles.labelText}>pengikut</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>978,890</Text>
          <Text style={styles.labelText}>suka</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
  },
  simpleButton: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    borderWidth: 1, // Adding border width
  },
  buttonText: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
  },
  counterContainer: {
    flexDirection: "row",
    padding: 6,
    alignItems: "center",
    marginTop: 17,
  },
  itemContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  labelText: {
    color: "gray",
    fontSize: 11,
    fontWeight: "bold",
  },
  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
  },
});
