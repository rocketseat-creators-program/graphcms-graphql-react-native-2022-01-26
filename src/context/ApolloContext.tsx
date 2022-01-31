import React from 'react';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const token =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDI1NDI3MjEsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NreTB4bWk4ZDQ1b3EwMXl1MjBicjQybHUvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmZiYzRhZGMtNTYzOS00YTI0LThiMzEtMTY0MDIxZDhiMzc4IiwianRpIjoiY2t5a25pejlwMDN1dTAxejE4MWtwNXY5ayJ9.DcA8KCeDFxMJ1DZ3yMMmc0bubTPnIa6MW8FM6m56hyd8gmN8lpMiNgZwPcySmiYJNS0l_bphzrKvERHLh5fifacvBeuPO-vfgZtmPy3A6t0wf3cZ945K6p-orz4c7inIhuhZUYsNGEhHqp7va5B0lOKYOxMewCVboa-pxroeKMk717Sy0DZybnoGyYqLBc-oXdK_8dPmC5tgj6zO__PEwtvBTG7b28iN463y_jKglAOubGJ_X3KrnDSjf236wRZQXhw28LxqaWyYWwLJTYq_uKui855gR1ZFgF76JFEgdzBtZegdm35ES75GWSepHmvR31xy16lYUWqOhmSwVj7dbECJmteRN1wQyIkt2BXEgUWH-st06Juw71vSr97IjRBtanPqnve6zCBzw5ep_ZWJycxg81H3kIsnSqpidrwY8gqrUyCeXGskN-3I3NcvtvNz_rjL2V0IHEeOFn0acf0ycTGSERT4V0k2sUmSTTQ5rt_ffI2-1lW9L4QZ_B1olCXAMLoaFX3PRRmc-0Me9ISkuTgw934VkOl_2J7z1vrSn_b_nBosvDdaST5pEIjeF8L3hHSfcU0bcKbJuthmdRtxDGQUoXAcK-w-_PPhtexqPz6GSM-Cd4_FpTQaeKsatyHJy_Y7C8HdTBtoiGSXvrtPGUMa2L3czHX3Qm-fMlCvLNs';

const httpLink = createHttpLink({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cky0xmi8d45oq01yu20br42lu/master',
});

const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const ApolloContextProvider: React.FC = ({children}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
