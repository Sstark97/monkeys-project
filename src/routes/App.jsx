import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Layout from "../containers/Layout";

const App = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/category/:categoryId' component={Categories} />
          <Route exact path='/products/:categoryId' component={Products} />
          <Route exact path='/product/:productId' component={Product} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
