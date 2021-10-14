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

export default function MainPage({ navigation }) {
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <Container style={styles.create}>
      <Text>친구목록(메인페이지)</Text>
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
