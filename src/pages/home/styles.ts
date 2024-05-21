import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1b1d',
    width: wp(100),
    height: hp(100),
    display: 'flex',
    alignContent: 'center'
  },
  TitleBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(7),
    marginTop: hp(2),
  },
  TitleBarText: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'Quicksand-SemiBold'
  },
  text: {
    color: '#000000'
  },
  button: {
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffffff2f',
    borderWidth: 1,
    padding: 5,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999
  },
  CardContainer: {
    height: hp(88),
    width: wp(100),
  },
  Line: {
    borderBottomColor: '#ffffff2f',
    borderBottomWidth: 1,
    width: wp(100),
    marginTop: hp(2)
  }

});

export default styles;