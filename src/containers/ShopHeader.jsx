import React, { useState, useMemo } from "react";
import { useHistory } from "react-router";
import Logo from "../assets/static/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSearchProduct, setIntoShopCard, setProducts } from "../actions";
import "../assets/styles/Search.scss";
import axios from "axios";

import { Flex, Image, Input, Text } from "@chakra-ui/react";

const ShopHeader = (props) => {
  const [focusOnInput, setFocusOnInput] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [products, setSearchProducts] = useState([]);
  const history = useHistory();

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [products, searchValue]);

  const handleFocusOnInput = () => {
    setFocusOnInput(true);
  };

  const handleFocusOutOfInput = () => {
    setFocusOnInput(false);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const productToSearch = event.target.value;
    setSearchValue(productToSearch);

    if (productToSearch !== "") {
      const resp = await axios.get(
        `https://private-anon-180d22d3a2-gocco.apiary-mock.com/stores/2/products/search?with_text=${searchValue}`
      );
      props.setProducts(resp.data.results);
      setSearchProducts(resp.data.results);
    } else {
      props.setSearchProducts([]);
    }
  };

  const handleSetSearchProduct = (product) => {
    props.setSearchProduct(product);
    setSearchValue("");
  };

  return (
    <Flex
      flexDirection='row'
      width='100%'
      my='1rem'
      justifyContent='center'
      alignItems='center'
    >
      <Image
        className='logo'
        src={Logo}
        alt='Logo'
        marginRight='4rem'
        marginLeft='4rem'
        width='44px'
        onClick={() => {
          history.push("/");
        }}
      />

      <Flex
        flexDirection='column'
        width='70%'
        alignItems='center'
        justifyContent='center'
      >
        <Input
          className='inputstyle'
          placeholder={focusOnInput ? "¿Estas buscando algo...?" : ""}
          alignSelf='center'
          position='static'
          value={searchValue}
          onFocus={handleFocusOnInput}
          onBlur={handleFocusOutOfInput}
          onChange={handleSearch}
        />

        {searchValue !== "" ? (
          <Flex direction='row' wrap='wrap' width='100%'>
            {filteredProducts.length !== 0 ? (
              filteredProducts.map((child) => {
                return (
                  <Flex key={child.modelId} width='20%' maxHeight='fit-content'>
                    <Link
                      to={"/product/" + child.modelId}
                      onClick={() => {
                        handleSetSearchProduct(child);
                      }}
                    >
                      <Text>{child.name}</Text>
                    </Link>
                  </Flex>
                );
              })
            ) : (
              <h2>Ese producto no existe</h2>
            )}
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};

const mapDispatchToProps = {
  setSearchProduct,
  setIntoShopCard,
  setProducts,
};

export default connect(null, mapDispatchToProps)(ShopHeader);
