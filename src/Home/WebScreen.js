import React from 'react';
import { WebView } from 'react-native-webview';

const WebScreen = () => {

    return (
    <>
      <WebView source={{ uri: 'https://covid19.go.id/' }}/>
    </>
    );
  };
  
  export default WebScreen;