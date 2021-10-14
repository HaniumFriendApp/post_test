import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { RadioButton } from 'react-native-paper'
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
  Thumbnail,
  Body,
  Form,
} from 'native-base';
import CardComponent from '../components/CardComponent';
import ImageComponent from '../components/ImageComponent';
import HeaderComponent from '../components/HeaderComponent';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import PasswordInput from 'react-native-password-eye'
const my = require('../assets/my.png');
const imageWidth = Dimensions.get('window').width / 3;

export default function FindIdPage({ navigation }) {
    const [email, setEmail] = useState('');
 
  return (
    <Container>
      <Header transparent style={{ backgroundColor: '#FFEB99' }}>
          <Left>
              <Button
                transparent
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Icon name="arrow-back" style={{ color: 'black' }} />
              </Button>
          </Left>
        <Body>
          <Text style={styles.title}>| ID/PW 찾기 |</Text>
        </Body>
        <Right />
      </Header>
          
      <Content contentContainerStyle={styles.content} scrollEnabled={false}>
            <Form style={styles.form}>
              <Grid style={styles.formGrid}>
                <Row style={styles.row}>
                  <Col style={styles.rightCol}>
                    <TextInput
                      style={styles.colInput}
                      type="text"
                      onChangeText={setEmail}
                      placeholder="이메일을 입력하세요."
                      value={email}
                    />
                    <Button full style={styles.emailSignUp} onPress={() => {}}>
                      <Text style={{ color: 'black' }}>찾기</Text>
                    </Button>
                  </Col>
                </Row>
              </Grid>
            </Form>
          </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    maxWidth: "50%",
  }, 
  radioWrapper: {
    padding: 2.5,
    width: 20,
    height: 20,
    borderRadius: 14,
    borderColor: "#888",
    borderWidth: 2,
    marginRight: 3
  },
  radio: {
    width: "100%",
    height: "100%",
    borderRadius: 14
  },  
  buttonCenter: {
    width: "100%",
    display: "flex",
    alignItems:"center"
  },  
  buttonWrapper: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
    paddingLeft: 4,
    marginTop: 12,
    flexDirection: "row"
  },
  button: {
    borderColor: "#7a7a7a",
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: "#e6f39d",
    marginRight: 4,
  },  
  thumbnail: { alignSelf: 'center' },
  myTitle: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#401201',
    textAlign: 'center',
  },
  category: { fontWeight: '700' },
  categoryContent: { color: 'deeppink', fontWeight: '700' },
  imageWrap: { flexWrap: 'wrap', marginTop: 20 },
  logout: {
    alignSelf: 'center',
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center"
  },
  nameText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#552A14",
    marginLeft: 10
  },
  item1: {
    width: "100%",
    paddingVertical: 4,
    borderBottomWidth: 1.5,
    borderBottomColor: "#ccc",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    marginBottom: 5,
    marginTop: 35,
    paddingLeft: 25
  },
  item1Text: {
    fontSize: 21,
    fontWeight: "700",
    color: "black"
  },
  item2: {
    paddingVertical: 4,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    paddingLeft: 25
  },
  item2Text: {
    fontSize: 17,
    fontWeight: "700",
    color: "black"
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  content: {
    display: "flex",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //  backgroundColor: 'rgba(52, 52, 52, 0.5)',
    margin: 20,
    borderRadius: 20,
    height: "100%"
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#401201',
    textAlign: 'center',
  },
  highlite: {
    fontSize: 25,
    fontWeight: '700',
    color: 'deeppink',
    textAlign: 'center',
  },
  form: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    paddingBottom: 20,
    marginTop: 10,
  },

  snsSignUp: {
    alignSelf: 'center',
    width: 250,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#4667A5',
  },
  emailSignUp: {
    alignSelf: 'center',
    width: "30%",
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFEB99',
  },
  imageUpload: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: 'grey',
    borderStyle: 'dashed',
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    borderRadius: 100,
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  imageUploadPlus: {
    textAlign: 'center',
    width: '100%',
    fontSize: 90,
    fontWeight: '300',
    color: 'grey',
  },
  leftCol: {
    width: 70,
    borderRightWidth: 1,
    borderRightColor: "#ccc",
    padding: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  colText: {
    fontSize: 20,
    textAlign: "center",
  },
  row: {
  },
  rightCol: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 7
  },
  colInput: {
    width: "100%",
    fontSize: 20,
    borderWidth: 1,
    borderColor:"#ddd",
    borderRadius: 20,
    padding: 8
  },
  formGrid: {
    width: "100%",
    height: "100%",
    borderTopColor: "#999",
    borderBottomColor: "#999",
    paddingVertical: 4,
    display: "flex",
    alignItems:"center",
    justifyContent: "center"
  },
  checkButton: {
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginLeft: 4,
    borderWidth: 1,
    borderColor: "#999"
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding: 2,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    marginLeft: 10,
    paddingRight: 24,
    width: "100%"
  },
  inputAndroid: {
    fontSize: 16,
    padding: 2,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    marginLeft: 10,
    paddingRight: 24,
    width: "100%"
  },
});