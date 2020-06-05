import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40 }px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  width: 100%;
  background: #312e38;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;

  padding: 16px 0 ${14 + getBottomSpace()}px;

  border-width: 1px;
  border-color: #232129;
`;

export const BackToSignInText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
