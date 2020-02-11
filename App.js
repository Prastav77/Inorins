import React, {useState} from 'react';
import {View, StyleSheet, TextInput, FlatList, Text} from 'react-native';
import {data} from './array';

const App = () => {
  const sortedData = data.sort((a, b) => (a.title > b.title ? 1 : -1));
  const [renderItem, setRenderItem] = useState(sortedData);
  const handleChange = text => {
    if (!text) {
      setRenderItem(sortedData);
    }
    const filteredArray = sortedData.filter(item =>
      item.title.toLowerCase().includes(text),
    );
    setRenderItem(filteredArray);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={handleChange}
      />
      {renderItem.length > 0 ? (
        <FlatList
          data={renderItem}
          keyExtractor={(item, index) => `${item.year}-${index}`}
          renderItem={item => {
            return (
              <View style={styles.textView}>
                <Text>{item.item.title}</Text>
              </View>
            );
          }}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No Match Found</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    margin: 5,
  },
  textView: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderWidth: 0.5,
    borderColor: '#c5c5c5',
    margin: 2,
  },
});

export default App;
