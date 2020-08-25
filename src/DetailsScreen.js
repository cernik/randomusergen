import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DetailsCard } from './DetailsView';
import styles from './styles';

const DetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View testID="details-screen-view-container" style={styles.container}>
      <DetailsCard
        item={item}
        withAddress
        withPhone
        style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
      />
    </View>
  );
};

export default DetailsScreen;
