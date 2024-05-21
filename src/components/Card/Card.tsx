import React from 'react';
import { Text, View } from 'react-native';
import { Trash } from 'lucide-react-native';

import styles from './styles';
import { Sub, useSubjectStore } from '../../stores/SubjectsStore';
import Touchable from '../Pressable/Pressable';


const Card: React.FC<{Subject: Sub, index: number}> = ({Subject, index}) => {
  
  const { deleteSubject } = useSubjectStore();

  return (
    <View style={styles.card}>
      <View style={styles.Header}>
        <Text style={ styles.TextTitle}>
          {Subject.Title}
        </Text>
        <Touchable style={styles.ButtonTrash} activeOpacity={0.8} onPress={() => deleteSubject(index)}>
          <Trash size={20} color='#ffffff'/>
        </Touchable>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.Text}>
              Local: {Subject.Room}.{Subject.Block}
        </Text>
        <Text style={styles.Text}>
              Horarios: {Subject.Schedules.map((schedule, index) => {
            return `${schedule.DayOfWeek} - ${schedule.Hour}${index !== Subject.Schedules.length - 1 ? ' | ' : ''}`;
          })}
        </Text>
      </View>

    </View>
  );
};

export default Card;