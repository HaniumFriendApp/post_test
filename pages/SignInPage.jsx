import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  AsyncStorage,
  TextInput,
  Image,
} from 'react-native';
import { Container, Content, Text, Form, Button } from 'native-base';

import ItemInput from '../components/ItemInput';
import { signIn } from '../config/firebaseFunctions';
import * as firebase from 'firebase';
import Loading from '../pages/Loading';
import PasswordInput from 'react-native-password-eye';

import LockSvg from '../assets/lock';
import UserSvg from '../assets/user';

export default function SignInPage({ navigation }) {
  const [ready, setReady] = useState(false);
  // 로그인 된 상황일 시 setIsLogined로 true 로.
  const [isLogined, setIsLogined] = useState(false);
  const [userData, setUserData] = useState({});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });

    setTimeout(() => {
      //로딩화면 보여주는 시간에 async조회
      AsyncStorage.getItem('session', (err, result) => {
        console.log('ASYNCSTORAGE');
        //result에 값이 있으면 바로 tabnavigator로 ㄱ
        console.log(result);
        if (result) {
          navigation.push('TabNavigator');
        } else {
          setReady(true);
        }
      });
      setReady(true);
    }, 1000);
  }, []);

  const doSignIn = () => {
    //Email 로그인 버튼을 누를 때 실행되는 함수
    if (email == '') {
      setEmailError('이메일을 입력해주세요');
      return false;
    } else {
      setEmailError('');
    }

    if (password == '') {
      setPasswordError('비밀번호를 입력해주세요');
      return false;
    } else {
      setPasswordError('');
    }

    signIn(email, password, navigation);
  };
  const setEmailFunc = (itemInputEmail) => {
    //이메일 상태값을 관리하는 함수
    setEmail(itemInputEmail);
  };
  const setPasswordFunc = (itemInputPassword) => {
    //패스워드 상태값을 관리하는 함수
    setPassword(itemInputPassword);
  };

  const goSignUp = () => {
    navigation.navigate('SignUpPage');
  };

  return ready ? (
    <Container style={styles.container}>
      <View style={styles.background}>
        <Content contentContainerStyle={styles.content} scrollEnabled={false}>
          <Text style={styles.title}>
            <Text style={styles.highlite}>친구야</Text>놀자!
          </Text>
          <Form style={styles.form}>
            <>
              {isLogined ? (
                // uri와 Text 태그 안에 있는 것들을 userData로 데이터 바인딩 해주면된다.(로그인 되었을때화면확인)
                <View style={styles.profileWrapper}>
                  <Image
                    style={styles.profileImg}
                    source={{
                      uri: 'https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg',
                    }}
                  />
                  <Text style={styles.profileName}>홍길동</Text>
                  <Text style={styles.profileId}>ghdrlfhd</Text>
                </View>
              ) : (
                <View style={styles.inputWrapper}>
                  <UserSvg />
                  <TextInput
                    placeholder="아이디"
                    onChangeText={setEmailFunc}
                    style={styles.inputStyle}
                  />
                </View>
              )}
            </>
            <View style={styles.inputWrapper}>
              <LockSvg />
              <PasswordInput
                onChangeText={setPasswordFunc}
                containerStyles={styles.inputStyle}
                inputStyle={styles.inputS}
                placeholder="비밀번호"
                secureTextEntry={true}
              />
            </View>
          </Form>
          {/* <Button full style={styles.snsSignUp}>
            <Text>Facebook 로그인</Text>
          </Button> */}
          <View style={styles.smallbuttons}>
            <Button full style={styles.emailSignUp} onPress={goSignUp}>
              <Text style={{ color: '#333' }}>회원가입</Text>
            </Button>
            <Button
              full
              style={styles.idpwfind}
              onPress={() => navigation.navigate('FindIdPage')}
            >
              {/* 이메일로 ID,PW찾는 API사용 필요함. */}
              <Text style={{ color: '#333' }}>ID/PW찾기</Text>
            </Button>
          </View>

          <Button full style={styles.emailSignIn} onPress={doSignIn}>
            <Text>로그인</Text>
          </Button>
        </Content>
      </View>
    </Container>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  inputS: {
    fontSize: 18,
  },
  container: {},
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFEB99',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //  backgroundColor: 'rgba(52, 52, 52, 0.5)',
    margin: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  highlite: {
    fontSize: 25,
    fontWeight: '700',
    color: 'deeppink',
    textAlign: 'center',
  },
  form: {
    width: '80%',
    borderRadius: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },
  label: {
    color: '#fff',
  },
  input: {
    color: '#fff',
  },
  snsSignUp: {
    alignSelf: 'center',
    width: 100,
    borderRadius: 10,
    backgroundColor: '#4667A5',
  },
  emailSignIn: {
    alignSelf: 'center',
    width: 250,
    borderRadius: 10,
    backgroundColor: '#333',
  },
  emailSignUp: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#FFEB99',
  },
  idpwfind: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#FFEB99',
  },
  smallbuttons: {
    flexDirection: 'row',
  },
  inputStyle: {
    fontSize: 18,
    width: '90%',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderColor: '#999',
    borderWidth: 1,
    fontSize: 18,
    width: '100%',
    marginBottom: 8,
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  profileId: {
    fontSize: 19,
    color: '#777',
    marginBottom: 10,
  },
  profileImg: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
});
