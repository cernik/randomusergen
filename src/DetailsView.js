import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ActionSheetIOS,
  Linking,
} from 'react-native';
import styles from './styles';

export const DetailsRow = ({ item }) => {
  const firstName = item?.name?.first;
  const lastName = item?.name?.last;
  const fullName = `${firstName} ${lastName}`;

  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: item?.picture?.thumbnail }}
        style={styles.thumbnail}
      />
      <View style={[styles.description, { flex: 1 }]}>
        <Text style={[styles.text, { textAlign: 'left' }]}>{fullName}</Text>
      </View>
      <View style={styles.arrow} />
    </View>
  );
};

export const DetailsCard = ({
  item,
  style,
  withAddress = false,
  withPhone = false,
}) => {
  const firstName = item?.name?.first;
  const lastName = item?.name?.last;
  const fullName = `${firstName} ${lastName}`;

  const { location, email } = item;
  const locationText = `${location.street.number} ${location.street.name} ${location.city} ${location.state}`;
  const handlePhonePress = () => {
    const phoneNumbers = [item?.cell, item?.phone].filter(Boolean);
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...phoneNumbers],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else {
          Linking.openURL(`tel:${phoneNumbers[buttonIndex - 1]}`);
        }
      },
    );
  };
  return (
    <View style={{ alignItems: 'center' }}>
      <View
        style={[
          styles.cardView,
          style,
          { alignSelf: 'stretch', marginHorizontal: 16 },
        ]}>
        <Image
          source={{ uri: item?.picture?.medium }}
          style={styles.mediumImage}
        />
        <View style={[styles.description, styles.cardDescription]}>
          <Text style={styles.text}>{fullName}</Text>
          <Text style={styles.text}>{email}</Text>
          {withAddress && <Text style={styles.text}>{locationText}</Text>}
        </View>
      </View>
      {withPhone && (
        <Pressable style={styles.button} onPress={handlePhonePress}>
          <Text
            style={{ fontWeight: '600', textAlign: 'center', fontSize: 18 }}>
            Call
          </Text>
        </Pressable>
      )}
    </View>
  );
};
