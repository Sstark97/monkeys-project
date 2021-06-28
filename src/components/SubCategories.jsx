import React from 'react';
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"

const SubCategories = ( {subCategories, hover} ) => {
    
    if(hover) {
        console.log(hover)
        return (
            <UnorderedList zIndex={1000} height="20%" width="xs" padding="12">
                {subCategories.map(category => <ListItem key={category.categoryId}>{category.name}</ListItem>)}
            </UnorderedList>
        )
    } else {
        return <></>
    }

}

export default SubCategories;