import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
const LoadingImage = require('../assets/loading.gif');
//그냥 로딩 페이지 그리는거
export default function Loading() {
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Thumbnail large source={LoadingImage}></Thumbnail>
        <Text style={styles.title}>친구야 놀자!</Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB99',
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
});
