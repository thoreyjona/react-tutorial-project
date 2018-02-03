import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'; 
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import HomePage from '../components/HomePage';
import PortfolioItemPage from '../components/PortfolioItemPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItemPage} exact={true}/>
                <Route path="/portfolio" component={PortfolioPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div> 
    </BrowserRouter>
);

export default AppRouter;