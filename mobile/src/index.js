import React from 'react';
import { StatusBar } from 'react-native';

// import { Container } from './styles';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#D8A537" />
      <Routes />
    </>
  );
}
