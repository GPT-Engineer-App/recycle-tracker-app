import { NativeModules } from 'react-native';

const { TensorFlowLite } = NativeModules;

export default {
  loadModel: (modelPath) => {
    return new Promise((resolve, reject) => {
      TensorFlowLite.loadModel(modelPath, (error, success) => {
        if (error) {
          reject(error);
        } else {
          resolve(success);
        }
      });
    });
  },
  runModel: (input) => {
    return new Promise((resolve, reject) => {
      TensorFlowLite.runModel(input, (error, output) => {
        if (error) {
          reject(error);
        } else {
          resolve(output);
        }
      });
    });
  },
};