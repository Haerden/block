import React,{ Component } from 'react';

class AdList extends Component {

	render() {
		/*
		let imgView = this.props.data.length>0? ( 
			this.props.data.map((item,index)=>{
				return <img src={require('../static/ad.png')} 
					key={item.id} 
					alt="_blank"/>
			})) : null;
		*/
		return (
			<div className="adList">
			  	<img src={require('../static/ad.png')} 
					alt="_blank"/>
			</div>
		)
	}
}

export default AdList; 