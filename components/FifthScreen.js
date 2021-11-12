import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import ScreenTemplate from '../containers/ScreenTemplate';
import ThreePartRow from '../containers/ThreePartRow';

const Header = () => {
  return (
    <ThreePartRow
      left={<Text style={{ fontSize: 24 }}>the left</Text>}
      right={<Text style={{ fontSize: 24 }}> the right </Text>}
      content={<Text style={{ fontSize: 24 }}> this is the content </Text>}
    />
  );
};

const FifthScreen = () => {
  return (
    <ScreenTemplate>
    <Text></Text>
    </ScreenTemplate>
  );
};

export default FifthScreen;
