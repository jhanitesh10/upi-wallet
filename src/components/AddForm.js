import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddForm = ({onClose}) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const openImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.uri) {
        setImage(response.uri);
      }
    });
  };

  const submitForm = async () => {
    // Save image to AsyncStorage
    try {
      await AsyncStorage.setItem(
        'imageData',
        JSON.stringify({image, title, selectedOption}),
      );
    } catch (error) {
      console.error('Error saving image data:', error);
    }

    // Close the form
    onClose();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImagePicker} style={styles.imageButton}>
        <Text>Select Image</Text>
      </TouchableOpacity>
      {image && <Text>{image}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <DropDownPicker
        items={[
          {label: 'Option 1', value: 'Option 1'},
          {label: 'Option 2', value: 'Option 2'},
          {label: 'Option 3', value: 'Option 3'},
        ]}
        placeholder="Select an option"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownList}
        onChangeItem={item => setSelectedOption(item.value)}
      />
      <TouchableOpacity onPress={submitForm} style={styles.submitButton}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  imageButton: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#3498db',
    alignItems: 'center',
    borderRadius: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  dropdownContainer: {
    width: '100%',
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownList: {
    maxHeight: 150,
  },
  submitButton: {
    padding: 10,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default AddForm;
