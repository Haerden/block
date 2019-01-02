import React,{ Component } from 'react';
import {Icon} from 'antd';
import './components.css';
import { Link } from 'react-router-dom';


class Header extends Component {

	render() {
		return (
			<div className="headerWripper">
				<Link to={'/'}>
					<div className="logo">
					</div>
				</Link>
				<div className="nav">
					<div className="navItem active left">
						<Link to={'/'}>首页</Link>
					</div>
					<Link to={'/coinExchange'} target="">
						<div className="navItem left">币币兑换</div>
					</Link>
					<Link to={'/coinTransfer'} target="">
						<div className="navItem left">IFC币转让</div>
					</Link>
					<Link to={'/coinFlow'} target="">
						<div className="navItem left">
							转让概览
						</div>
					</Link>
					<Link to={'/coinPublish'} target="">
						<div className="navItem left">
							发行币
						</div>
					</Link>
					<div className="navItem right"><Icon type="appstore"/></div>
					<Link to={'/account'} target="">
						<div className="navItem right">
							<Icon type="credit-card"/>
						</div>
					</Link>
					<Link to={'/user'} target="">
						<div className="navItem right">
							<Icon type="user"/>
						</div>
					</Link>
				</div>
			</div>
		)
	}
}

export default Header; 