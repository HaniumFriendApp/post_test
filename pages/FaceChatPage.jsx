import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Image,
  View,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Right,
  Text,
  Button,
} from 'native-base';

export default function FaceChatPage({ navigation }) {
  //상태관리 함수를 useeffect안에 두면 에러뜬다.
  //그래서 getdata함수로 저기 멀리 함수에서 setdata할거다
  //이렇게 한 이유 : 최적화 가능해서
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <Container style={styles.create}>
      <Text>화상채팅페이지</Text>
      <ActivityIndicator size="large" />
    </Container>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#F6F6F6',
    height: 70,
    borderRadius: 10,
    marginTop: 50,
    width: '90%',
    alignSelf: 'center',
  },
});
