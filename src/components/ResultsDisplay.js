import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Component to display detection results
const ResultsDisplay = ({ detection }) => {
  return (
    <View style={styles.container}>
      <View style={styles.results}>
        <Text>Aluminum Cans: {detection.aluminumCans}</Text>
        <Text>HDPE2 Bottles: {detection.hdpe2Bottles}</Text>
        <Text>PET1 Bottles: {detection.pet1Bottles}</Text>
        <Text>Glass Bottles: {detection.glassBottles}</Text>
        <Text>Milk Cartons: {detection.milkCartons}</Text>
        <Text>Total Items: {detection.totalItems}</Text>
      </View>
      <View style={styles.detailedResults}>
        <Text>Session Total: {detection.sessionTotal} items</Text>
        <Text>All-Time Total: {detection.allTimeTotal} items</Text>
        <Text>Most Common: {detection.mostCommon}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  results: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailedResults: {
    marginTop: 10,
  },
});

export default ResultsDisplay;