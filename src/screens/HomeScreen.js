import React, { useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
// import { Permissions, ImagePicker } from 'expo';

const HomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        requestCameraPermission();
    }, []);

    const requestCameraPermission = async () => {
        try {
            const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
            if (status !== 'granted') {
                Alert.alert('Permission denied', 'You need to grant permission to access photos');
            }
        } catch (error) {
            console.error('Error requesting permissions:', error);
        }
    };

    const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            navigation.navigate('ImageScreen', { imageUri: result.uri });
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <Button title="Pick Image" onPress={handlePickImage} />
        </View>
    );
};

export default HomeScreen;
