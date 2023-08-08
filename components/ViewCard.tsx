import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ViewCard() {
  const data = [
    {
      id: "1",
      user: "Geroge",
      uri: "https://picsum.photos/id/1/200",
    },
    {
      id: "2",
      user: "Alex",
      uri: "https://picsum.photos/id/10/200",
    },
    {
      id: "3",
      user: "Virat",
      uri: "https://picsum.photos/id/1002/200",
    },
    {
      id: "4",
      user: "Rohit",
      uri: "https://picsum.photos/id/1006/200",
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ViewCard</Text>
      <View style={styles.container}>
        {data.map((user, id) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardView}>
                <Image source={{ uri: user.uri }} style={styles.userImage} />
                <Text style={styles.userName}>{user.user}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userImage: {
    height: 100,
    width: 150,
    borderRadius: 8,
  },
  userName: {},
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 8,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    rowGap: 8,
  },
  cardView: {
    flex: 1,
    justifyContent: "center",
  }
});
