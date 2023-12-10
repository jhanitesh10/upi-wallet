import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddImageForm = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const openImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.uri) {
        setImage(response.uri);
      }
    });
  };

  const submitForm = () => {
    // Handle form submission
    console.log('Image:', image);
    console.log('Description:', description);
    console.log('Payment Method:', selectedPaymentMethod);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageButton} onPress={openImagePicker}>
        <Icon name="image" size={24} color="white" />
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>
      {image && <Image source={{uri: image}} style={styles.previewImage} />}
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <DropDownPicker
        items={[
          {label: 'Google Pay', value: 'Google Pay'},
          {label: 'Paytm', value: 'Paytm'},
          {label: 'Kotak', value: 'Kotak'},
        ]}
        placeholder="Select Payment Method"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownList}
        onChangeItem={item => setSelectedPaymentMethod(item.value)}
      />
      <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
        <Text style={styles.buttonText}>Submit</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
  previewImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
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

export default AddImageForm;
