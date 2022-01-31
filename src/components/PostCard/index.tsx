import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {CAREGORIES} from '../../utils/enums/categories';
import {stringToDate} from '../../helpers/date';

interface IPostItem {
  id: string;
  title: string;
  categorie: CAREGORIES;
  shortDescription: string;
  createdAt: string;
  description: string | object;
  coverUrl: string;
}

const PostCard = ({item}: {item: IPostItem}) => {
  const navigation = useNavigation();

  const goToPost = () => {
    navigation.navigate('AboutPost', {
      postId: item.id,
    });
  };
  return (
    <Box
      maxW="80"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: 'coolGray.600',
        backgroundColor: 'gray.700',
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: 'gray.50',
      }}>
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: item.coverUrl,
            }}
            alt="image"
          />
        </AspectRatio>
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
          px="3"
          py="1.5">
          {item.categorie}
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {item.title}
          </Heading>
        </Stack>
        <Text fontWeight="400">{item.shortDescription}</Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400">
              {stringToDate(item.createdAt)}
            </Text>
          </HStack>
          <Button onPress={goToPost}>Ver mais...</Button>
        </HStack>
      </Stack>
    </Box>
  );
};

export default PostCard;
