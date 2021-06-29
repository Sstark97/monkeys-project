import React, {useState, useEffect} from 'react';
import notFound from '../assets/static/notFound.png';
import { FiShoppingCart } from 'react-icons/fi';
import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Tooltip,
    Text,
    Button,
    Icon,
    useDisclosure
} from '@chakra-ui/react';

const data = {
isNew: true,
imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
name: 'Wayfarer Classic',
price: 4.5,
rating: 4.2,
numReviews: 34,
};

const ProductChild = ({product, btnRef, handleOpenDraw}) => {

  const [price,setPrice] = useState(0);
  const [image, setImage] = useState(product.images[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {

    let priceString = String(product.finalPrice).substring(0,2) + '.' + String(product.finalPrice).substring(2,4);
    setPrice(parseFloat(priceString).toFixed(2));

  },[]);

  const handleImageNotFound = (event) => {
    event.target.src = notFound;
    setImage(event.target.src);
  }

  const handleOpenDrawInChild = (productId) => {
    console.log(productId);
    handleOpenDraw();
  }

  console.log(btnRef)
    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">

          <Image
            src={image}
            alt={`Picture of ${product.name}`}
            roundedTop="lg"
            onError={handleImageNotFound}
          />
  
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                width="170px">
                {product !== undefined ? <Text as="span" fontSize="md">{product.name}</Text> : 'example'}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
{/*                 
                <ShopCard color={product.color} name={product.name} price={price}/> */}
                <Button ref={btnRef} onClick={() => {handleOpenDrawInChild(product.modelId)}}><Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'}/></Button>

              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                {price}
                <Box as="span" color={'gray.600'} fontSize="lg">
                  €
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
}
  
export default ProductChild;