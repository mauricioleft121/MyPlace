import React, { useEffect, useRef } from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './styles';
import Card from '../../components/Card/Card';
import { useSubjectStore } from '../../stores/SubjectsStore';
import Touchable from '../../components/Pressable/Pressable';
import InsertModal, { CustomModalRef } from '../../components/Modals/InsertModal/InsertModal';
import { useGlobalStore } from '../../stores/GlobalStore';
import { BlurView } from '@react-native-community/blur';
import { Plus } from 'lucide-react-native';


const HomeScreen: React.FC = () => {

  const { subjects, getSubjects } = useSubjectStore();
  const { BlurViewVisible, setBlurViewVisible } = useGlobalStore();

  const InsertRef = useRef<CustomModalRef>(null);

  useEffect(() => {
    getSubjects();
    setBlurViewVisible(false);
  },[]);

  return (
    <View style={styles.container}>
      {
        BlurViewVisible ?
          <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={1}
            reducedTransparencyFallbackColor="black"
          /> : null
      }
      <View style={styles.TitleBar}>
        <Text style={styles.TitleBarText}>My Place</Text>
        <Touchable style={styles.button} onPress={() => InsertRef.current?.show()}>
          <Plus color={'#ffffff'}/>
        </Touchable>
      </View>
      <View style={styles.Line}/>
      <ScrollView>
        <View style={styles.CardContainer}>
          {
            subjects.map((sub,index) => (
              <Card key={index} Subject={sub} index={index}/>
            ))
          }
        </View>
        <InsertModal ref={InsertRef}/>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;