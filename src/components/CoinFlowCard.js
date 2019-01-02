import React,{ Component } from 'react';
import {Card} from 'antd';
import './components.css';
import {Link} from 'react-router-dom';

class CoinFlowCard extends Component {

	render() {
		return (
			<div className="block-content">
				<Card title="转让列表">
					<Link to={'./coinflow'} target="">
                	<img className="flowImg" 
					 src={require('../static/map.png')}
					 alt=""/> 
					</Link>
                </Card>
			</div>
		)
	}
}

export default CoinFlowCard; 