import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Body,
  Right,
  Button,
  List,
  ListItem,
  Item,
  Input,
  Thumbnail,
} from 'native-base';
import ImageBlurLoading from 'react-native-image-blur-loading';
const my = require('../assets/my.png');
const width = Dimensions.get('screen').width;

export default function CommentComponent({ comment }) {
  function dateFormat(d) {
    let date = new Date(d); //db에 저장된 알아볼수없는 표준 시간가져옴
    //아래 단계들을 거쳐 우리가 아는 사람이 읽을 수 있는 시간으로 변환

    let year = date.getFullYear();

    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let hour = date.getHours();
    if (hour < 10) hour = '0' + hour;

    let min = date.getMinutes();
    if (min < 10) min = '0' + min;

    let sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
  }

  return (
    <ListItem thumbnail style={{ width: width }}>
      <Left>
        <Thumbnail circular source={my} />
      </Left>
      <Body>
        <Text>{comment.author}</Text>
        <Text note numberOfLines={3}>
          {comment.comment}
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>{dateFormat(comment.date)}</Text>
        </Button>
      </Right>
    </ListItem>
  );
}
