import React from 'react';
import useAxios from '../hooks/useAxios';
import { Box, Text} from '@chakra-ui/react';

const Home = () => {
    const data = useAxios('categories').response;


    return (
        <Box width="70%" height="100%">

            <Text>Esto es el home</Text>
            
        </Box>
    );
}

export default Home;