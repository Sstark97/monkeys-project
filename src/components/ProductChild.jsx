import React, { useState, useEffect, useRef } from "react";
import notFound from "../assets/static/notFound.png";
import { getProduct, setIntoShopCard } from "../actions";
import { connect } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Tooltip,
  Text,
  Button,
  Icon,
  Select,
  Spinner,
} from "@chakra-ui/react";

const ProductChild = (props) => {
  const [price, setPrice] = useState([]);
  const [image, setImage] = useState(props.product.images[0]);
  const [currentSize, setCurrentSize] = useState("");
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);

  useEffect(() => {
    const priceString =
      String(props.product.finalPrice).substring(0, 2) +
      "." +
      String(props.product.finalPrice).substring(2, 4);
    setPrice(parseFloat(priceString).toFixed(2));
    setCurrentSize(`${props.product.sizes[0].name} meses`);
  }, []);

  const handleImageNotFound = (event) => {
    event.target.src = notFound;
    setImage(event.target.src);
  };

  const handleImageLoaded = () => {
    counter.current += 1;

    if (counter.current === 1) {
      setLoading(false);
    }
  };

  const handleOpenDrawInChild = (productId) => {
    props.getProduct(productId);
    const priceString = `${String(props.product.finalPrice).substring(
      0,
      2
    )}.${String(props.product.finalPrice).substring(2, 4)}`;
    setPrice(parseFloat(priceString).toFixed(2));

    const productFormated = {
      productId: props.product.modelId,
      name: props.product.name,
      color: props.product.color,
      price,
      size: currentSize,
      amount: 1,
    };

    props.setIntoShopCard(productFormated);
    props.handleOpenDraw();
  };

  const handleSizeChange = (event) => {
    event.preventDefault();
    const size = event.target.value;
    setCurrentSize(size);
  };

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Flex
          direction="row"
          height="80%"
          wrap="wrap"
          width="100%"
          justifyContent="center"
          alignItems="center"
          display={loading ? "flex" : "none"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>

        <Image
          src={image}
          alt={`Picture of ${props.product.name}`}
          roundedTop="lg"
          display={!loading ? "flex" : "none"}
          onLoad={handleImageLoaded}
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
              width="170px"
            >
              {props.product !== undefined ? (
                <Text as="span" fontSize="md">
                  {props.product.name}
                </Text>
              ) : (
                "example"
              )}
            </Box>

            <Tooltip
              label="Add to cart"
              bg="white"
              placement="top"
              color="gray.800"
              fontSize="1.2em"
            >
              <Button
                ref={props.btnRef}
                onClick={() => {
                  handleOpenDrawInChild(props.product.modelId);
                }}
              >
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </Button>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              {price}
              <Box as="span" color="gray.600" fontSize="lg">
                €
              </Box>
            </Box>
          </Flex>

          <Select onChange={handleSizeChange}>
            {props.product.sizes.map((size) => (
              <option
                key={size.variantId}
                value={`${size.name} meses`}
              >{`${size.name} meses`}</option>
            ))}
          </Select>
        </Box>
      </Box>
    </Flex>
  );
};

const mapStateToProps = (state) => {
  return {
    shopCard: state.shopCard,
  };
};

const mapDispatchToProps = {
  getProduct,
  setIntoShopCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductChild);
