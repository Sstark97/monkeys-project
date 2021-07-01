import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrap,
  WrapItem,
  Text,
} from '@chakra-ui/react';

const CategoryChild = ({ subCategory }) => {

    return(
        <Wrap display= "flex" direction="row" height="30%" spacing="10" width="100%" justifyContent="center" alignItems="center" >    

          <WrapItem className="category" key={subCategory.categoryId}  height="100%">
                              
              <Link to={'/products/' + subCategory.categoryId}>

                  <Text fontWeight="light" fontSize="xl" >{subCategory.name}</Text>

              </Link>
                            
          </WrapItem>

      </Wrap>
    );
}



export default CategoryChild;