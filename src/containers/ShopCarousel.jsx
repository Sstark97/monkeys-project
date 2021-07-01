import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Cremas from '../assets/static/cremas.png';
import Rebajas from '../assets/static/rebajas.png';
import { Flex, Text} from '@chakra-ui/react';

const ShopCarousel = () => (
    <Flex width="100%" p="12">
            <Carousel >
                <div>
                    <img src={Cremas} />
                    <p className="legend">Nuevos Sticks y Cremas solares</p>
                </div>
                <div>
                    <img src={Rebajas} />
                    <p className="legend">40% de Rebajas</p>
                </div>
            </Carousel>
    </Flex>
);

export default ShopCarousel;