import React from 'react';
import { Flex, Image, Input, Box, IconButton, list} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import useAxios from '../hooks/useAxios';

const Categories = () => {
    const data = useAxios('categories').response;

    return (
        <ul>
            {data.map(category => <li key={category.categoryId}>{category.name}</li>)}
        </ul>
    )
}

export default Categories;
