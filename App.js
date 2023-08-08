import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, useColorScheme, ScrollView  } from 'react-native';
import ElevatedCard from './components/ElevatedCard';
import ViewCard from './components/ViewCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

export default function App() {
  
  return (
    <SafeAreaView>
      <ScrollView>
        <ElevatedCard />
        <ViewCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
