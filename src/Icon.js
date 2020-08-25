import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export const HamburgerIcon = () => (
  <View style={styles.hamburgerContainer}>
    <View style={styles.hamburgerRow} />
    <View style={styles.hamburgerRow} />
    <View style={styles.hamburgerRow} />
  </View>
);

export const GridIcon = () => (
  <View style={styles.gridIconContainer}>
    <View style={styles.gridIconElement} />
    <View style={styles.gridIconElement} />
    <View style={styles.gridIconElement} />
    <View style={styles.gridIconElement} />
    <View style={styles.gridIconElement} />
    <View style={styles.gridIconElement} />
  </View>
);
