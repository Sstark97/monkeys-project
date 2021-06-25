import React from 'react';
import useAxios from '../hooks/useAxios';
import { Flex, Image, Input, Box, IconButton, list} from '@chakra-ui/react';


const Home = () => {
    const data = useAxios('categories').response;


    return (
        <Box width="70%" height="100%">
            <ul>
                {data !== undefined ? data.map(category => <li key={category.categoryId}>{category.name}</li>) : <></>}
            </ul>
            {console.log(data)}
        </Box>
    );
}

export default Home;