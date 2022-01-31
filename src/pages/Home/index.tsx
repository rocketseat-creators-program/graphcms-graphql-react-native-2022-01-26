import React, {useState, useMemo} from 'react';
import {SafeAreaView} from 'react-native';
import {
  Box,
  View,
  FlatList,
  Actionsheet,
  useDisclose,
  Text,
  Badge,
  Stack,
  HStack,
  Button,
  Spinner,
} from 'native-base';
import {useQuery} from '@apollo/client';

import PostCard from '../../components/PostCard';
import Header from '../../components/Header';

import {GET_ALL_POST} from '../../graphql/query/posts';
import {styles} from './styles';

const Home = () => {
  const [categorie, setCategorie] = useState('');
  const {isOpen, onOpen, onClose} = useDisclose();
  const {data, loading, refetch} = useQuery(GET_ALL_POST, {
    variables: {
      where: categorie ? {categorie} : undefined,
    },
  });

  const posts = useMemo(() => {
    if (!loading && data?.posts) {
      return data.posts;
    }
    return [];
  }, [loading, data]);

  const handleFind = (value: string) => {
    setCategorie(value);
    setTimeout(() => {
      refetch();
      onClose();
    }, 600);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.scrollViewArea}>
        <Stack flex={1} justifyContent="center" alignItems="center">
          <Spinner color="cyan.500" size="lg" />
        </Stack>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.scrollViewArea}>
      <Box flex={1} alignItems="center" justifyContent="flex-start">
        <Header onOpen={onOpen} />
        <FlatList
          data={posts}
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
              <Button variant="ghost" onPress={() => handleFind('Node')}>
                <Badge colorScheme="success">NODE JS</Badge>
              </Button>
              <Button variant="ghost" onPress={() => handleFind('Javascript')}>
                <Badge colorScheme="danger">Javascript</Badge>
              </Button>
              <Button variant="ghost" onPress={() => handleFind('')}>
                <Badge colorScheme="primary">Nenhum</Badge>
              </Button>
            </HStack>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  );
};

export default Home;
