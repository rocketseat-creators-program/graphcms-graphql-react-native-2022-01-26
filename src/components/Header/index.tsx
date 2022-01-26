import React from 'react';
import {Heading, HStack, Spacer, SearchIcon, Button} from 'native-base';

interface IHeader {
  onOpen: () => void;
}

const Header: React.FC<IHeader> = ({onOpen}) => {
  return (
    <HStack justifyContent="space-between" alignItems="center" maxW="80" mb={4}>
      <Heading>News</Heading>
      <Spacer />
      <Button onPress={onOpen} variant="ghost">
        <SearchIcon size={18} color="fuchsia.800" />
      </Button>
    </HStack>
  );
};

export default Header;
