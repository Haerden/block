import React,{ Component } from 'react';
import './components.css';
import 'antd/dist/antd.css';

import img1 from '../static/news.png';
import img2 from '../static/news1.png';
import img3 from '../static/news2.png';

class NewsList extends Component {

	render() {
		const { data } = this.props;
		const img = [img1,img2,img3];
		return (
			<div style={{margin:20}}>
				{
					data.map((item, index)=>{
						return(
							<div className="news" key={item.id}>
								<img 
									className="newsImg"
									src={img[index]}
									alt="_blank"/>
								<div className="newsCell">
									<h3 className='title'>{item.title}</h3>
									<div className="target">
    									<span>区块链</span>
    									<span>数字货币</span>
    									<span>智慧城市</span>
    								</div>
									<p className='desc'>{item.desc}</p>
									<div className='good'>
									</div>
								</div>
							</div>

							)
					})
				}
			</div>
		)
	}
}

export default NewsList; 