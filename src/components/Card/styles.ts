import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  Header: {
    width: wp(90),
    backgroundColor: '#b60505',
    height: hp(5),
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    height: 'auto',
    width: wp(90.5),
    marginLeft: wp(5),
    elevation: 10,
    marginTop: hp(1),
    marginBottom: hp(1),
    borderColor: '#00000010',
    borderWidth: 1,
    borderRadius: 8
  },
  cardContent: {
    maxHeight: hp(20),
    width: wp(90),
    display: 'flex',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5)
  },
  TextTitle: {
    color: '#ffffff',
    fontSize: hp(2),
    paddingLeft: wp(2),
    height: 'auto',
    fontWeight: 'bold'
  },
  Text: {
    color: '#000000',
    fontSize: hp(2),
    paddingLeft: wp(1),
    height: 'auto',
    fontWeight: 'bold',

  },
  ButtonTrash: {
    width: hp(3.5),
    height: hp(3.5),
    marginRight: wp(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  }
});

export default styles;