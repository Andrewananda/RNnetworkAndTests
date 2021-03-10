import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Link(props) {
  return (
    <View>
      <WebView source={{uri: props.page}} />
    </View>
  );
}
