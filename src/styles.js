import { StyleSheet } from 'react-native';

const DEFAULT_PADDING = 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DEFAULT_PADDING,
    backgroundColor: 'white',
  },
  listItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: DEFAULT_PADDING,
    flexDirection: 'row',
  },
  cardsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  cardView: {
    alignItems: 'center',
    padding: DEFAULT_PADDING,
  },
  thumbnail: {
    height: 64,
    width: 64,
  },
  mediumImage: {
    height: 100,
    width: 100,
  },
  description: {
    justifyContent: 'center',
    padding: DEFAULT_PADDING,
  },
  cardDescription: {
    marginTop: 8,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    margin: DEFAULT_PADDING,
  },
  arrow: {
    margin: DEFAULT_PADDING,
    borderTopWidth: 2,
    borderRightWidth: 2,
    width: 12,
    height: 12,
    alignSelf: 'center',
    transform: [{ rotate: '45deg' }],
  },
  hamburgerContainer: {
    justifyContent: 'space-around',
    height: 24,
    width: 24,
  },
  hamburgerRow: {
    height: 5,
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  gridIconContainer: {
    height: 24,
    width: 24,
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  gridIconElement: {
    height: 5,
    width: '40%',
    marginHorizontal: 1,
    marginTop: 3,
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  button: {
    marginTop: 20,
    height: 56,
    width: 260,
    borderRadius: 28,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
