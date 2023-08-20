// AddImageForm.js
import React, {useState} from 'react';
import {View, TextInput, Button, Modal, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const AddImageForm = ({onAddImage}) => {
  const [imageName, setImageName] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [imageSource, setImageSource] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectImage = () => {
    ImagePicker.showImagePicker({}, response => {
      if (response.uri) {
        setImageSource(response.uri);
        setModalVisible(true); // Open the modal
      }
    });
  };

  const handleAddImage = () => {
    onAddImage({
      name: imageName,
      description: imageDescription,
      image: imageSource,
    });

    setImageName('');
    setImageDescription('');
    setImageSource(null);
    setModalVisible(false); // Close the modal
  };

  return (
    <View>
      <Button title="Select Image" onPress={handleSelectImage} />

      <Modal visible={modalVisible} animationType="slide">
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{uri: imageSource}}
            style={{width: 100, height: 100}}
          />
          <TextInput
            placeholder="Image Name"
            value={imageName}
            onChangeText={text => setImageName(text)}
          />
          <TextInput
            placeholder="Image Description"
            value={imageDescription}
            onChangeText={text => setImageDescription(text)}
          />
          <Button title="Add Image" onPress={handleAddImage} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default AddImageForm;
