import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Cremas from "../assets/static/cremas.png";
import Rebajas from "../assets/static/rebajas.png";
import { Flex, Text } from "@chakra-ui/react";

const ShopCarousel = () => (
  <Flex width="100%" p="12">
    <Carousel>
      <Flex>
        <img src={Cremas} alt="Nuevos sticks y cremas solares disponibles" />
        <Text className="legend">Nuevos Sticks y Cremas solares</Text>
      </Flex>

      <Flex>
        <img src={Rebajas} alt="40% de Rebajas" />
        <Text className="legend">40% de Rebajas</Text>
      </Flex>
    </Carousel>
  </Flex>
);

export default ShopCarousel;
