import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Home from '../pages/Home';
import Layout from '../containers/Layout';

const App = () => (
    <ChakraProvider>
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component={Home}/> 
                </Switch>
            </BrowserRouter>
        </Layout>

    </ChakraProvider>

);

export default App;