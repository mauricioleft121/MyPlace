/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { Modal, Text, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icons from 'react-native-vector-icons/Ionicons';
import Touchable from '../../Pressable/Pressable';
import { Sub, useSubjectStore } from '../../../stores/SubjectsStore';
import { useGlobalStore } from '../../../stores/GlobalStore';
import { Plus, Minus } from 'lucide-react-native';

import styles, {pickerSelectStyles} from './styles';

export type CustomModalRef = {
  show: () => void
  hide: () => void
}


const InsertModal: React.ForwardRefRenderFunction<CustomModalRef> = (props, ref) => {

  const Hours = [
    '13:00',
    '15:00',
    '17:00',
    '19:00',
    '21:00'
  ];

  const DaysOfWeek = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta'
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [newSubject, setNewSubject] = useState<Sub>({
    Title: '',
    Room: '',
    Block: '',
    Schedules: []
  });



  const { addSubject } = useSubjectStore();
  const { setBlurViewVisible } = useGlobalStore();


  const show = useCallback(() => {
    setModalVisible(true);
    setBlurViewVisible(true);
  }, []);

  const hide = useCallback(() => {
    setModalVisible(false);
    setBlurViewVisible(false);
    setNewSubject({
      Title: '',
      Room: '',
      Block: '',
      Schedules: []
    });
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        show,
        hide
      };
    },
    []
  );


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.viewTopBar}>
          <Text style={styles.Title}>Nova Materia</Text>
          <Touchable activeOpacity={0.8} onPress={() => hide()}>
            <Icons name='close' size={25} color='#a11300' />
          </Touchable>
        </View>
        <View style={styles.Bar} />
        <View style={styles.viewTextInput}>
          <Text style={styles.TitleTextInput}>Nome da materia</Text>
          <TextInput
            style={styles.TextInput}
            cursorColor='#000'
            value={newSubject.Title}
            onChangeText={(text) => setNewSubject({ ...newSubject, Title: text })}
            underlineColorAndroid={'transparent'} />
          <View style={styles.ViewPlacement}>
            <View>
              <Text style={styles.TitleTextInput}>Sala</Text>
              <TextInput
                style={styles.TextInputPlacement}
                cursorColor='#000'
                value={newSubject.Room}
                onChangeText={(text) => setNewSubject({ ...newSubject, Room: text })}
                underlineColorAndroid={'transparent'} />
            </View>
            <View>
              <Text style={styles.TitleTextInput}>Bloco</Text>
              <TextInput
                style={styles.TextInputPlacement}
                cursorColor='#000'
                value={newSubject.Block}
                onChangeText={(text) => setNewSubject({ ...newSubject, Block: text })}
                underlineColorAndroid={'transparent'} />
            </View>

          </View>

          <Text style={styles.TitleTextInput}>Qntd de aulas na semana: (Max: 4)</Text>
          <View style={styles.ViewNumberOfClasses}>
            <View
              style={styles.scrollView}
            >
              <Touchable
                onPress={() => {
                  if (newSubject.Schedules.length < 4)
                    setNewSubject({ ...newSubject, Schedules: [...newSubject.Schedules, {DayOfWeek: '', Hour: ''}] });
                }}
                style={styles.buttonPlus}>
                <Plus color={'#000'} />
              </Touchable>
              <Text style={styles.number}>{newSubject.Schedules.length}</Text>
              <Touchable
                onPress={() => {
                  if (newSubject.Schedules.length > 0) {
                    setNewSubject({ ...newSubject, Schedules: newSubject.Schedules.slice(0, newSubject.Schedules.length - 1) });
                  }
                }}
                style={styles.buttonMinus}>
                <Minus color={'#000'} />
              </Touchable>
            </View>
          </View>
          {
            newSubject.Schedules.map((Schedule, index) => (
              <View style={styles.PickerView} key={index}>

                <Text style={styles.TitleTextInput}>Aula {index + 1}</Text>
                
                <View style={[styles.ViewPlacement, styles.PickerView]}>
                  <View>
                    <Text style={styles.TitleTextInput}>Dia da semana</Text>
                    <RNPickerSelect
                      style={pickerSelectStyles}
                      value={Schedule.DayOfWeek}
                      onValueChange={(value) => setNewSubject({ ...newSubject, Schedules: newSubject.Schedules.map((item, i) => i === index ? { ...item, DayOfWeek: value} : item)})}
                      items={DaysOfWeek.map((day, _) => ({ label: day, value: day }))}
                      useNativeAndroidPickerStyle={false}
                      placeholder={{label: 'Selecione um dia', value: -1}}
                    />
                  </View>
                  <View>
                    <Text style={styles.TitleTextInput}>Horario</Text>
                    <RNPickerSelect
                      style={pickerSelectStyles}
                      value={Schedule.Hour}
                      onValueChange={(value) => setNewSubject({ ...newSubject, Schedules: newSubject.Schedules.map((item, i) => i === index ? { ...item, Hour: value} : item)})}
                      items={Hours.map((hour, _) => ({ label: hour, value: hour }))}
                      useNativeAndroidPickerStyle={false}
                      placeholder={{label: 'Selecione um horario', value: -1}}
                    />
                  </View>

                </View>
              </View>
            ))
          }
        </View >
        <View style={styles.viewConfirmarButton}>
          <Touchable activeOpacity={0.8} style={styles.buttonConfirmar} onPress={() => {
            addSubject(newSubject);
            hide();
          }}>
            <Icons name='checkmark-sharp' size={25} color='#fff' />
            <Text style={styles.textButton}>Confirmar</Text>
          </Touchable>
        </View>
      </View>
    </Modal>


  );
};

export default forwardRef(InsertModal);