import React from 'react';
import { Flex } from '@chakra-ui/react';
import ShopHeader from './ShopHeader';
import Categories from './Categories';


const Layout = ({children} : Element) => (
    <Flex flexDirection="column">
        <ShopHeader />

        <Flex> 
            
            <Categories />
            {children} 
        
        </Flex>

    </Flex>
)

export default Layout;