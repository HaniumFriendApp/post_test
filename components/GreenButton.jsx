import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Label, Icon, Text, Button } from 'native-base';
export default function GreenButton({ intext }) {
  return (
    <>
      <Button full style={styles.button}>
        <Text style={{ color: '#818F59' }}>{intext}</Text>
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    color: '#818F59',
    backgroundColor: '#fff',
    borderColor: '#818F59',
    borderWidth: 1,
    borderRadius: 50,
    height: 30,
    width: 100,
  },
});
