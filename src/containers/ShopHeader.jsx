import React from 'react';
import { SearchIcon } from '@chakra-ui/icons'
import Logo  from '../assets/static/logo.png';
import { 
    Flex, 
    Image, 
    Input, 
    IconButton
} from '@chakra-ui/react';

const ShopHeader = () => (
    <Flex flexDirection="row" width="100%" my="4rem">

        <Image src={Logo} marginRight="4rem" marginLeft="4rem"/>
        <Flex flexDirection="row" width="70%" alignSelf="center">

            <IconButton aria-label="Search database" icon={<SearchIcon />} size="xs"/>
            <Input placeholder="" size="xs" alignSelf="flex-end" />

        </Flex>
        
    </Flex>
);

export default ShopHeader;