import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Layout from '../containers/Layout';

const App = () => (
    <ChakraProvider>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path = "/category/:categoryId" component={Categories}/> 
                        <Route exact path = "/home" component={Home}/> 
                    </Switch>
                </Layout>
            </BrowserRouter>

    </ChakraProvider>

);

export default App;