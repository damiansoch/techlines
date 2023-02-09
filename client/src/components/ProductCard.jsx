import {
  Flex,
  Circle,
  Box,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import { FaOpencart } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';

import { useState } from 'react';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  return (
    <Stack
      p={2}
      spacing={3}
      bg={useColorModeValue('white', 'gray.800')}
      minW='240px'
      h='450px'
      borderWidth='1px'
      rounded='lg'
      shadow='lg'
      position='relative'
    >
      {product.isNew && (
        <Circle
          size='10px'
          position='absolute'
          top={2}
          right={2}
          bg='green.300'
        />
      )}
      {product.stock <= 0 && (
        <Circle size='10px' position='absolute' top={2} left={2} bg='red.300' />
      )}
      <Image src={product.image} alt={product.name} roundedTop='lg' />
      <Box flex='1' maxH='5' alignItems='baseline'>
        {product.stock <= 0 && (
          <Badge rounded='full' px='2' fontSize='0.8rem' colorScheme='red'>
            Sold Out
          </Badge>
        )}
        {product.isNew && (
          <Badge rounded='full' px='2' fontSize='0.8rem' colorScheme='green'>
            New
          </Badge>
        )}
      </Box>
      <Flex mt='1' justifyContent='space-around' alignContent='center'>
        <Link
          as={ReactLink}
          to={`/product/${product._id}`}
          pt='2'
          cursor='pointer'
        >
          <Box fontSize='xl' fontWeight='semibold' lineHeight='tight'>
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex justifyContent='space-between' alignContent='center'>
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </Flex>
      <Flex justify='space-around'>
        <Box fontSize='xl' color={useColorModeValue('gray.800', 'white')}>
          <Box as='span' color={'gray.600'} fontSize='lg'>
            €
          </Box>
          {product.price.toFixed(2)}
        </Box>
        <Tooltip
          label='AddTocart'
          bg='white'
          placement='top'
          color='gray.800'
          fontSize='0.8rem'
        >
          <Button variant='ghost' display='flex' disabled={product.stock <= 0}>
            <Icon
              as={FaOpencart}
              h={7}
              w={7}
              alignSelf='center'
              color='orange.500'
            />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
