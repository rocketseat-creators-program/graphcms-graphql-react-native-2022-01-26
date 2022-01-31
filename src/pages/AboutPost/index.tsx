import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  VStack,
  ScrollView,
  HStack,
  ArrowBackIcon,
  StatusBar,
  Stack,
  Spinner,
  Button,
} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';

import {useQuery} from '@apollo/client';
import {GET_POST} from '../../graphql/query/posts';

const AboutPost: React.FC = () => {
  const navigation = useNavigation();
  const {params} = useRoute();

  const postId = params?.postId || '';

  const {data, loading} = useQuery(GET_POST, {
    variables: {id: postId},
  });

  const post = useMemo(() => {
    if (!loading && data?.post) {
      return data.post;
    }
    return [];
  }, [data, loading]);

  if (loading) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Stack flex={1} justifyContent="center" alignItems="center">
          <Spinner color="cyan.500" size="lg" />
        </Stack>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: post.coverUrl,
            }}
            alt="image"
          />
        </AspectRatio>
        <Center bg="violet.500" position="absolute" bottom="0">
          <Button variant="ghost" onPress={() => navigation.goBack()}>
            <ArrowBackIcon size={8} color="warmGray.50" />
            <Text color="warmGray.50">Voltar</Text>
          </Button>
        </Center>
        <Center
          bg="violet.500"
          _dark={{
            bg: 'violet.400',
          }}
          _text={{
            color: 'warmGray.50',
            fontWeight: '700',
            fontSize: 'xs',
          }}
          position="absolute"
          bottom="0"
          right="0"
          px="3"
          py="1.5">
          {post.categorie}
        </Center>
      </Box>
      <VStack mt={4} px={4}>
        <HStack>
          <Heading mb={4}>{post.title}</Heading>
        </HStack>
        <Text mb={4}>{post.description.text.replace(/\\n/g, '\n')}</Text>
      </VStack>
    </ScrollView>
  );
};

export default AboutPost;
