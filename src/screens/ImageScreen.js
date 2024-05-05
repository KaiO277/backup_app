import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageScreen = ({ route }) => {
  const { imageUri } = route.params; // Lấy đường dẫn của ảnh từ tham số được truyền từ màn hình trước

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Screen</Text>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
});

export default ImageScreen;
