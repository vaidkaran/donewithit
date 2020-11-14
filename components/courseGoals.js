import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function CourseGoals() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const submitHandler = () => {
    console.log(enteredGoal);
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), name: enteredGoal },
    ]);
  };
  const deleteItem = (id) => {
    setCourseGoals(courseGoals.filter(goal => goal.id !== id));
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Course Goal"
          style={{ borderColor: 'black', borderWidth: 1, padding: 5 }}
          onChangeText={(text) => setEnteredGoal(text)}
        />
        <Button title="Add" onPress={submitHandler} />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log(`${item.name} pressed`);
              deleteItem(item.id);
            }}
          >
            <View style={styles.text}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={ item => item.id }
      />
    </View>
  );

  // return (
  //   <View>
  //     <View>
  //       <TextInput
  //         placeholder="Course Goal"
  //         style={{ borderColor: 'black', borderWidth: 1, padding: 5 }}
  //         onChangeText={(text) => setEnteredGoal(text)}
  //       />
  //       <Button title="Add" onPress={submitHandler} />
  //     </View>

  //     <ScrollView contentContainerStyle={styles.scrollView}>
  //       {courseGoals.map((goal) => (
  //         <Text key={goal} style={styles.text}>
  //           {goal}
  //          </Text>
  //       ))}
  //     </ScrollView>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  text: {
    borderColor: 'black',
    backgroundColor: '#32CD32',
    marginTop: 10,
    borderWidth: 1,
    paddingVertical: 2,
  },
  scrollView: { justifyContent: 'space-between' },
  flatListView: {
    backgroundColor: 'yellow',
  },
});
