import React,{ Component } from 'react';
import {Card, Table} from 'antd';

class CoinFlow extends Component {
	componentDidMount(){
		this.node.scrollIntoView();
	}
	render() {
		const columns = [{
  		title: 'IFC地址',
  		dataIndex: 'id',
  		key: 'id',
		}, {
  		title: '转让时间',
  		dataIndex: 'time',
  		key: 'time',
		}, {
		  title: '转让人',
  		dataIndex: 'from',
  		key: 'from',
		}, {
		  title: '受让人',
		  key: 'to',
		  dataIndex: 'to',
		 
		}, {
		  title: '数量',
		  key: 'count',
		  dataIndex: 'count',
		 
		}, {
		  title: '位置',
		  key: 'locate',
		  dataIndex: 'locate',
		}

		];
		const data = [{
  			key: '1',
  			id: 'CB3EE8EF04143B75',
  			time: "2018-09-05 15:00",
  			from: "张XX",
  			to: "刘XX",
  			count:"300 IFC",
  			locate:"北京"
		}, {
		  key: '2',
		  id: 'CB3EE8EF04143B72',
		  time: "2018-09-05 15:00",
		  from: "刘XX",
		  to: "宋XX",
		  count:"800 IFC",
		  locate:"新加坡"
		}, {
		  key: '3',
		  id: 'CB3EE8EF04143B76',
		  time: "2018-09-09 11:00",
		  from: "张XX",
		  to: "王XX",
		  count:"2300 IFC",
		  locate:"北京"
		}, {
		  key: '4',
		  id: 'CB3EE8EF04143B75',
		  time: "2018-09-15 15:00",
		  from: "张XX",
		  to: "王XX",
		  count:"1300 IFC",
		  locate:"伦敦"
		}];
		return (
			<div ref={node => this.node = node}>
				<img className="banner" 
					src={require('../static/map.png')}
					alt=""/>
				<div className="card-container">
                	<Card title="转让列表">
                	    <Table dataSource={data} columns={columns} 
                	    	 pagination={false}
                	    />
                	</Card>
            		</div>
			</div>
		)
	}
}

export default CoinFlow; 