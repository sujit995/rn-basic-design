import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const array = [
      {
        id: '1',
        user: 'Geroge',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        id: '2',
        user: 'Alex',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        id: '3',
        user: 'Virat',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        id: '4',
        user: 'Rohit',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        id: '5',
        user: 'Rahane',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ]

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>FreeCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        {array.map((element, id) => {
        return (
              <View style={styles.card} key={id}>
                <View style={styles.imgCard}>
                <Image style={styles.userImage} source={{uri: element.uri}} />
                </View>
                <Text style={styles.userName}>{element.user}</Text>
              </View>
        );
      })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  userName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  imgCard: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    borderWidth: 2,
    borderColor: '#50DBB4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    paddingHorizontal: 8
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    width: 100,
    minHeight: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
