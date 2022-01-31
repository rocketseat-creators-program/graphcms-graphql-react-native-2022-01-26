import React from 'react';
import {NativeBaseProvider} from 'native-base';

import {ApolloContextProvider} from './context/ApolloContext';

import Routes from './routes';

const App = () => {
  return (
    <ApolloContextProvider>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </ApolloContextProvider>
  );
};

export default App;
