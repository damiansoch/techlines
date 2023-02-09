import {
  Flex,
  HStack,
  Circle,
  Box,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { GiMoebiusStar as StarIcon } from 'react-icons/gi';

const Rating = ({ rating, numReviews }) => {
  const [iconSize, setIconSize] = useState('14px');
  return (
    <Flex>
      <HStack spacing='2px'>
        <Icon as={StarIcon} size={iconSize} w='14px' color='orange.500' />
        <Icon
          as={StarIcon}
          size={iconSize}
          w='14px'
          color={rating >= 1.5 ? 'orange.500' : 'gray'}
        />
        <Icon
          as={StarIcon}
          size={iconSize}
          w='14px'
          color={rating >= 2.5 ? 'orange.500' : 'gray'}
        />
        <Icon
          as={StarIcon}
          size={iconSize}
          w='14px'
          color={rating >= 3.5 ? 'orange.500' : 'gray'}
        />
        <Icon
          as={StarIcon}
          size={iconSize}
          w='14px'
          color={rating >= 4.5 ? 'orange.500' : 'gray'}
        />
      </HStack>
      <Text fontSize='md' fontWeight='bold' ml={4}>{`${numReviews} ${
        numReviews === 1 ? 'review' : 'reviews'
      }`}</Text>
    </Flex>
  );
};

export default Rating;
