import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const CameraView = () => {
  const [hasPermission, setHasPermission] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back}>
        <View style={styles.cameraView}>
          <Text style={styles.cameraText}>Camera Preview</Text>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  cameraText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default CameraView;