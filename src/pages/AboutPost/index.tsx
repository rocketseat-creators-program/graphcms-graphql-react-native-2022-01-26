import React from 'react';
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
  Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const AboutPost: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: 'https://blog.rocketseat.com.br/content/images/size/w2000/2022/01/Rocketseat-jquery-historia.jpg',
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
          TAG
        </Center>
      </Box>
      <VStack mt={4} px={4}>
        <HStack>
          <Heading mb={4}>Title of post</Heading>
        </HStack>
        <Text mb={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.
        </Text>
        <Text mb={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.
        </Text>
        <Text mb={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo non ea, debitis odit commodi saepe.
          Recusandae incidunt ducimus dolore, impedit temporibus necessitatibus
          quia! Cum possimus, similique deleniti sequi blanditiis aliquam.
        </Text>
        <Text mb={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo non ea, debitis odit commodi saepe.
          Recusandae incidunt ducimus dolore, impedit temporibus necessitatibus
          quia! Cum possimus, similique deleniti sequi blanditiis aliquam.
        </Text>
        <Text mb={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo non ea, debitis odit commodi saepe.
          Recusandae incidunt ducimus dolore, impedit temporibus necessitatibus
          quia! Cum possimus, similique deleniti sequi blanditiis aliquam.
        </Text>
      </VStack>
    </ScrollView>
  );
};

export default AboutPost;
