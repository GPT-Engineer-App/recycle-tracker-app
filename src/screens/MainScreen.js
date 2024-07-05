import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementItem, resetSession } from '../store/slices/detectionSlice';
import CameraView from '../components/CameraView';
import ResultsDisplay from '../components/ResultsDisplay';

const MainScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const detection = useSelector((state) => state.detection);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
      </View>
      <CameraView />
      <View style={styles.controls}>
        <Button title="Toggle Options" onPress={() => {}} />
        <Button title="Capture" onPress={() => dispatch(incrementItem('aluminumCans'))} />
      </View>
      <ResultsDisplay detection={detection} />
      <View style={styles.footer}>
        <Button title="Download/Share" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  footer: {
    marginTop: 10,
  },
});

export default MainScreen;