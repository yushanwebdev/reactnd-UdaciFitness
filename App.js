import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageEditor from '@react-native-community/image-editor';


export default class App extends React.Component {
  state = {
    image: null,
  }

  pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      allowEditing: true,
      aspect: [2, 1],
    }).then((result) => {
      if (result.cancelled) {
        return
      }
      

      ImageEditor.cropImage(result.uri, {
        offset: { x: 0, y: 0 },
        size: { width: result.width, height: result.height },
      })
        .then(uri => {
          alert(uri)
          this.setState({ image: uri })
        })
    })
  }

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pickImage}>
          <Text>Open Camera Roll</Text>
        </TouchableOpacity>

        {image && (
          <Image style={styles.img} source={{ uri: image }} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    backgroundColor: 'black',
  }
})