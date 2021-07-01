import React from 'react';
import useAxios from '../hooks/useAxios';
import { Flex, Text} from '@chakra-ui/react';
import ShopCarousel from '../containers/ShopCarousel';
import StatsContainer from '../containers/StatsContainer';

const Home = () => {
    const data = useAxios('categories').response;


    return (
        <Flex width="100%" height="100%" direction="column" justifyContent="center" alignItems="center" >

            <ShopCarousel />
            <StatsContainer />
            
        </Flex>
    );
}

export default Home;