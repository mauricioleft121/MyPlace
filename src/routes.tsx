import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './pages/home/HomeScreen';

// import { Container } from './styles';

const Routes: React.FC = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Home' 
        component={Home}
        options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default Routes;
