import React, {useState, useEffect } from 'react';
import notFound from '../assets/static/notFound.png';
import { getProduct, setIntoShopCard } from '../actions';
import { connect } from 'react-redux';
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
    Select
} from '@chakra-ui/react';

const ProductChild = (props) => {

  const [price,setPrice] = useState([]);
  const [image, setImage] = useState(props.product.images[0]);
  const [currentSize, setCurrentSize] = useState('');
  // const selectSizeRef = useRef();

  const handleImageNotFound = (event) => {

    event.target.src = notFound;
    setImage(event.target.src);

  }

  useEffect(() => {

    let priceString = String(props.product.finalPrice).substring(0,2) + '.' + String(props.product.finalPrice).substring(2,4);
    setPrice(parseFloat(priceString).toFixed(2));

  },[])

  const handleOpenDrawInChild = (productId) => {

    const producRepeat = props.shopCard.find(product => product.productId === productId)

    if(!producRepeat){
      
      props.getProduct(productId);
      let priceString = String(props.product.finalPrice).substring(0,2) + '.' + String(props.product.finalPrice).substring(2,4);
      setPrice(parseFloat(priceString).toFixed(2));
      console.log(currentSize);

      let productFormated = {
        productId: props.product.modelId,
        name: props.product.name,
        color: props.product.color,
        price,
        size: currentSize,
        amount: 1
      }

      handleSetFinalPrice(productFormated)
    }

    props.handleOpenDraw();
  }

  const handleSetFinalPrice = (productFormated) => {

    if(props.shopCard[0] !== undefined){

      const shopTotal = Number(props.shopCard[props.shopCard.length - 1].total);
      productFormated.total = shopTotal + Number(productFormated.price);
      props.setIntoShopCard(productFormated);

    } else {

      productFormated.total = parseFloat(productFormated.price).toFixed(2);
      props.setIntoShopCard(productFormated);

    }

  }

  const handleSizeChange = event => {
    event.preventDefault();
    let size = event.target.value;
    console.log(size);
    setCurrentSize(size);
  }

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
            alt={`Picture of ${props.product.name}`}
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
                {props.product !== undefined ? <Text as="span" fontSize="md">{props.product.name}</Text> : 'example'}
              </Box>

              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>

                <Button ref={props.btnRef} onClick={() => {handleOpenDrawInChild(props.product.modelId)}}>

                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'}/>

                </Button>

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

            <Select placeholder="Seleccione una talla" onChange={handleSizeChange}>

              {props.product.sizes.map(size => <option key={size.variantId} value={`${size.name} meses`}>{`${size.name} meses`}</option>)}

            </Select>



          </Box>

        </Box>

      </Flex>

    );
}

const mapStateToProps = state => {
  return {
    shopCard: state.shopCard
  }

}

const mapDispatchToProps = {
  getProduct,
  setIntoShopCard
};
  
export default connect(mapStateToProps,mapDispatchToProps)(ProductChild);