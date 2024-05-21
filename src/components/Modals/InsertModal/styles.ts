import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: hp(0.5),
    right: wp(0),
    borderRadius: 5,
    width: wp(100),
    height: 'auto',
    borderColor: '#0000002a',
    borderWidth: 1,
  },
  viewTopBar: {
    flexDirection: 'row',
    width: 'auto',
    marginTop: hp(1),
    marginLeft: wp(5),
    marginRight: wp(5),
    justifyContent: 'space-between'
  },
  Title: {
    fontSize: hp(2.2),
    color: '#a11300',
    fontWeight: 'bold'
  },
  viewTextInput: {
    // height: hp(50),
    width: wp(88),
    marginLeft: wp(5),
    marginTop: hp(2),
  },
  TitleTextInput: {
    fontSize: hp(1.6),
    color: '#707070',
    fontWeight: 'bold'
  },
  TextInput: {
    height: hp(5),
    textAlignVertical: 'top',
    color: '#000',
    borderWidth: 1,
    borderColor: '#00000067',
    borderRadius: 8,
    marginTop: hp(1)
  },
  Bar: {
    borderTopWidth: 1,
    borderColor: '#d4d4d4',
    marginLeft: wp(5),
    marginRight: wp(5),
    marginTop: hp(1)
  },
  viewConfirmarButton: {
    marginLeft: wp(5),
    marginRight: wp(5),
    width: wp(88),
    height: 'auto',
    marginTop: hp(2),
    flexDirection: 'row-reverse',
    marginBottom: hp(1),
  },
  buttonConfirmar: {
    backgroundColor: '#a11300',
    width: wp(20),
    height: hp(8),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: '#fff',
    fontSize: hp(1.5),
    fontWeight: '800'
  },
  buttonsContainerWeek: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(2),
    width: wp(88),
  },
  buttonWeek: {
    backgroundColor: '#a11300',
    width: wp(10),
    height: hp(5.1),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0000002a',
    borderWidth: 1,
  },
  buttonWeekSelected: {
    width: wp(10.8),
    height: hp(5.55),
    marginLeft: wp(2),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000be',
  },
  buttonWeekUnselected: {
    width: wp(10.8),
    height: hp(5.55),
    marginLeft: wp(2),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  containerHours: {
    width: wp(60),
    height: hp(5),
    marginTop: hp(1),
    borderColor: '#0000002a',
    borderWidth: 1,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  buttonHoursUnselected: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(12),
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonHoursSelected: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(12),
    backgroundColor: '#00000030'
  },
  borderFristButton: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  borderLastButton: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  buttonHoursDivider: {
    borderRightColor: '#0000002a',
    borderRightWidth: 1,
  },
  TextButtonHour: {
    color: '#000000'
  },
  ViewPlacement: {
    flexDirection: 'row',
    width: wp(88),
    height: hp(10),
    gap: wp(8),
  },
  TextInputPlacement: {
    height: hp(5),
    textAlignVertical: 'top',
    color: '#000',
    borderWidth: 1,
    borderColor: '#00000067',
    borderRadius: 8,
    marginTop: hp(1),
    width: wp(40)
  },
  scrollView: {
    width: wp(40),
    height: hp(7),
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8
  },
  number: {
    fontSize: 20,
    color: '#000000'
  },
  buttonPlus: {
    width: wp(12),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#0000002a'
  },
  buttonMinus: {
    width: wp(12),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#0000002a'
  },
  ViewNumberOfClasses: {
    width: wp(88),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1)
  },
  PickerView: {
    marginTop: hp(0.8),
  }
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#00000067',
    borderRadius: 8,
    color: 'black',
    width: wp(40),
  },
  inputAndroid: {
    fontSize: 16,
    borderWidth: 1,
    paddingHorizontal: wp(2),
    borderColor: '#00000067',
    borderRadius: 8,
    color: 'black',
    width: wp(40),
  },
});

export default styles;