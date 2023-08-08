import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

const ContactList = () => {
  const SECTIONS = [
    {
      uid: "1",
      name: "George",
      status: "Making your Gpay Smooth",
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
      uid: "2",
      name: "Alex",
      status: "I love Coding",
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },

    {
      uid: "3",
      name: "Vasien",
      status: "Building secure Digital banks",
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
      uid: "4",
      name: "Robert",
      status: "Building secure Digital banks",
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
      uid: "5",
      name: "Alfredo",
      status: "Making your Gpay Smooth",
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {SECTIONS.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: imageUrl }} style={styles.userImage} />
            <View style={styles.cardText}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
   margin: 15
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 4,
    backgroundColor: '#50DBB4',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
    borderRadius: 6
  },
  userStatus: {},
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userName: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#000'
  },
  cardText: {
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
