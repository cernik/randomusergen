import React from 'react';
import { View, FlatList, ScrollView, Pressable } from 'react-native';
import styles from './styles';
import { DetailsRow, DetailsCard } from './DetailsView';
import { HamburgerIcon, GridIcon } from './Icon';

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [layout, setLayout] = React.useState('row');

  const refresh = () => {
    setLoading(true);
    fetch('https://randomuser.me/api/?results=50')
      .then((r) => r.json())
      .then((r) => {
        if (Array.isArray(r?.results)) {
          setItems(r.results);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    refresh();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            setLayout(layout === 'card' ? 'row' : 'card');
          }}
          style={{ marginHorizontal: 18 }}>
          {layout === 'card' ? <HamburgerIcon /> : <GridIcon />}
        </Pressable>
      ),
    });
  }, [navigation, layout]);

  const renderItem = React.useCallback(
    ({ item, index, layout: l }) => {
      const handlePress = () => {
        navigation.navigate('Details', { item });
      };

      return (
        <View
          key={keyExtractor(item, index)}
          style={layout === 'card' ? { width: '50%' } : {}}>
          <Pressable onPress={handlePress}>
            {layout === 'card' ? (
              <DetailsCard withAddress={false} item={item} />
            ) : (
              <DetailsRow item={item} />
            )}
          </Pressable>
        </View>
      );
    },
    [layout, navigation],
  );

  const keyExtractor = (item, index) =>
    String(item?.id?.value || item?.login?.udid || index);

  return (
    <View testID="home-screen-view-container" style={styles.container}>
      {layout === 'row' ? (
        <FlatList
          testID="home-screen-list"
          refreshing={loading}
          onRefresh={refresh}
          data={items}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      ) : (
        <ScrollView
          testID="home-screen-grid"
          contentContainerStyle={styles.cardsContainer}>
          {items.map((item, index) =>
            renderItem({ item, index, layout: 'card' }),
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
