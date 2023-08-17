import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import ImagePicker from 'react-native-image-picker'; // Import the library
import Image from 'react-native';

const AddCardModal = ({visible, onClose, onAddCard}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageSource, setImageSource] = useState(null);

  const selectImage = () => {
    ImagePicker.showImagePicker({}, response => {
      if (!response.didCancel && !response.error) {
        setImageSource(response.uri);
      }
    });
  };

  const handleAddCard = () => {
    if (name && description && imageSource) {
      onAddCard({name, description, imageSource});
      setName('');
      setDescription('');
      setImageSource(null);
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Create New Card</Text>
        <TouchableOpacity onPress={selectImage} style={styles.imagePicker}>
          <Text>Select Image</Text>
        </TouchableOpacity>
        {imageSource && (
          <Image source={{uri: imageSource}} style={styles.selectedImage} />
        )}
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddCard} style={styles.addButton}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  imagePicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  selectedImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
});

export default AddCardModal;
