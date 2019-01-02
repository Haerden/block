import React, { Component } from 'react';
import Home from './page/Home';
import CoinFlow from './page/CoinFlow';
import CoinPublish from './page/CoinPublish';
import CoinInout from './page/CoinInout';
import CoinTransfer from './page/CoinTransfer';
import CoinExchange from './page/CoinExchange';
import UserInfo from './page/UserInfo';
import AccountPage from './page/AccountPage';
import BlockPage from './page/BlockPage';
import BlockDetailPage from './page/BlockDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
class App extends Component {

  render() {
    return (
   
      		<BrowserRouter>
      		<div>
            <Header />
      			<Route path='/' exact component={Home}></Route>
            <Route path='/coinTransfer' exact component={CoinTransfer}></Route>
            <Route path='/coinFlow' exact component={CoinFlow}></Route>
            <Route path='/coinExchange' exact component={CoinExchange}></Route>
            <Route path='/coinPublish' exact component={CoinPublish}></Route>
            <Route path='/user' exact component={UserInfo}></Route> 
            <Route path='/account' exact component={AccountPage}></Route>
            <Route path='/block' exact component={BlockPage}></Route>
            <Route path='/deatails/:uniquekey' exact component={BlockDetailPage}></Route> 
            <Route path='/coinInout' exact component={CoinInout}></Route>   
            <Footer />      	
      		</div>
      	</BrowserRouter>
    );
  }
}

export default App;
