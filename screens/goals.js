import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GoalForm from "./goalForm";

export default function Goal({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [goals, setGoals] = useState([
    {
      title: "Run every day",
      description: "Run 5km every day.",
      startDate: "01/01/2024",
      endDate: "01/01/2025",
      key: 1,
    },
    {
      title: "Eat healthier",
      description: "Cook dinner and don't eat junk food",
      startDate: "01/01/2024",
      endDate: "01/01/2025",
      key: 2,
    },
  ]);

  const addGoal = (goal) => {
    goal.key = Math.random().toString();
    setGoals((currentGoals) => {
      return [goal, ...currentGoals];
    });
    setModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal visible={modalOpen} animationType="slide">
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <GoalForm addGoal={addGoal} />
          </View>
        </Modal>
      </TouchableWithoutFeedback>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Goal Details", item);
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  modalClose: { marginTop: 40, marginBottom: 0 },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  modalContent: {
    flex: 1,
  },
});
