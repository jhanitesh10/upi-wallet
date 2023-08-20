// AddImageForm.js
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const AddImageForm = ({onAddImage}) => {
  const [imageName, setImageName] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [imageSource, setImageSource] = useState(null);

  const handleSelectImage = () => {
    ImagePicker.showImagePicker({}, response => {
      if (response.uri) {
        setImageSource(response.uri);
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
  };

  return (
    <View>
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
      <Button title="Select Image" onPress={handleSelectImage} />
      <Button title="Add Image" onPress={handleAddImage} />
    </View>
  );
};

export default AddImageForm;
