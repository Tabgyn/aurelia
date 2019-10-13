import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

// import { Container } from './styles';

import Routes from './routes';

export default function App() {
  YellowBox.ignoreWarnings(['RCTRootView', 'Functions as object-form attrs']);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#D8A537" />
      <Routes />
    </>
  );
}
