import React,{ Component } from 'react';
import AdList from '../components/AdList';
import MarketList from '../components/MarketList';
import BlockList from '../components/BlockList';
import IFCInfo from '../components/IFCInfo';
import CoinContent from '../components/CoinContent';
import NewsList from '../components/NewsList';
import CoinFlowCard from '../components/CoinFlowCard';
import './page.css';
import { Row, Col} from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			banner:<img className="banner" 
					src={require('../static/banner.png')}
					alt="_blank"/>,
			adList:[],
			marketList:[],
			blockList:[],
			newsList:[],
			IFCInfo:null
		}
	}
    componentDidMount(){
        axios.get('/api/head.json').then((res) => {
          const result = res.data.data;
          console.log(result)
          this.setState({
          	adList: result.adList,
          	marketList: result.marketList,
          	blockList: result.blockList,
          	newsList: result.newsList
          })
      });
        setTimeout(()=>{
        	this.setState({
        		banner:<img className="banner_after" 
					src={require('../static/banner_after.png')}
					alt="_blank"/>
        	})
        },10000);
    }

	render() {
		return (
			<div>
				{this.state.banner}
				<Row>
					<Col span={16}>
						<MarketList data={this.state.marketList}/>
					</Col>
					<Col span={8}>
					 	<IFCInfo />
					</Col>
				</Row>
				<Row>
					<Col span={16}>
						<Link to={"./block"} target=""><BlockList/></Link>
					</Col>
					<Col span={8}>
					 	<CoinContent />
					</Col>
				</Row>
				<Row>
					<CoinFlowCard />
				</Row>
				<AdList data={this.state.adList}/>
				<Row>
					 <NewsList data={this.state.newsList}/>
				</Row>
			</div>
		)
	}
}

export default Home; 