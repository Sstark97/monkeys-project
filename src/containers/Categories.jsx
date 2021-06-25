import React from 'react';
import { Flex, Text, Wrap, WrapItem} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import useAxios from '../hooks/useAxios';

const Categories = () => {
    const data = useAxios('categories').response;

    return (
        <Flex flexDirection="column" height="100%" width="30%" justifyContent="flex-start" mx="6rem">
            <Text fontWeight="extrabold" fontSize="2xl" my="4rem" >Categories</Text>

            <Wrap direction="column" height="50%" spacing="10">
                {data !== undefined ? data.map(category => <WrapItem key={category.categoryId} marginTop="8rem">{category.name}</WrapItem>) : <></>}
            </Wrap>
        </Flex>
    )
}

export default Categories;
