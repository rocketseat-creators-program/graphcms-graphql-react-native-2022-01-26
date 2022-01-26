import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Box,
  View,
  FlatList,
  Actionsheet,
  useDisclose,
  Text,
  Badge,
  HStack,
  Button,
} from 'native-base';

import PostCard from '../../components/PostCard';
import Header from '../../components/Header';

import {styles} from './styles';

const Home = () => {
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <SafeAreaView style={styles.scrollViewArea}>
      <Box flex={1} alignItems="center" justifyContent="flex-start">
        <Header onOpen={onOpen} />
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={({item}) => <PostCard item={item} />}
          lineHeight={24}
          ItemSeparatorComponent={() => <View style={styles.separatorSpace} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </Box>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="fuchsia.800" mb={4}>
              Selecione um Filtro
            </Text>
            <HStack justifyContent="flex-start">
              <Button variant="ghost">
                <Badge colorScheme="success">NODE JS</Badge>
              </Button>
              <Button variant="ghost">
                <Badge colorScheme="danger">REACT JS</Badge>
              </Button>
            </HStack>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  );
};

export default Home;
