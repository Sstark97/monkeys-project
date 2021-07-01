import React, { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons'
import Logo  from '../assets/static/logo.png';
import '../assets/styles/Search.scss';
import { 
    Flex, 
    Image, 
    Input, 
    IconButton
} from '@chakra-ui/react';

const ShopHeader = () => {

    const [focusOnInput, setFocusOnInput] = useState(false);

    const handleFocusOnInput = () => {
        setFocusOnInput(true);
    }

    const handleFocusOutOfInput = () => {
        setFocusOnInput(false);
    }

    
    return (
        <Flex flexDirection="row" width="100%" my="1rem" justifyContent="center" alignItems="center">

            <Image src={Logo} marginRight="4rem" marginLeft="4rem" width="44px"/>
            <Flex flexDirection="row" width="70%" alignItems="center" justifyContent="center">

                {/* <IconButton aria-label="Search database" icon={<SearchIcon />} size="xs" height="30px"/> */}
                <Input 
                className="inputstyle" 
                placeholder={focusOnInput ? "¿Estas buscando algo...?" : ""} 
                alignSelf="center" 
                onFocus={handleFocusOnInput}
                onBlur={handleFocusOutOfInput}
                />

            </Flex>
            
        </Flex>
    );

}

export default ShopHeader;