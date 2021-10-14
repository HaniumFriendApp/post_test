import React, { useEffect } from 'react';

import { Platform, Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainPage from '../pages/MainPage';
import MyPage from '../pages/MyPage';
import FaceChatPage from '../pages/FaceChatPage';
import CalendarPage from '../pages/CalendarPage';
import ChatPage from '../pages/ChatPage';
import * as Icons from '../assets';

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          //현재 이 앱을 구동하고 있는 디바이스가 뭔지 Platform.OS 을 통해 확인 할 수 있음
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';

          return Icons[(focused ? 'Filled' : '') + route.name.slice(0, -4)];
        },
        tabBarStyle: {
          backgroundColor: '#FFEB99',
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tabs.Screen name="HomePage" component={MainPage} />
      <Tabs.Screen name="CalendarPage" component={CalendarPage} />
      <Tabs.Screen name="PencilPage" component={FaceChatPage} />
      <Tabs.Screen name="TalkPage" component={ChatPage} />
      <Tabs.Screen name="SettingsPage" component={MyPage} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 200,
    width: '100%',
  },
});

export default TabNavigator;
