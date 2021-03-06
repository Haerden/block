import React,{ Component } from 'react';
import {Card, Table} from 'antd';
import axios from 'axios'
import './style/coinPublish.css'
class CoinFlow extends Component {
  // 列表请求
	requestList = ()=>{
		axios.get('/api/head.json').then((res) => {
					const result = res.data.data;
					this.renderMap(result);
		});
	}
	componentDidMount(){
		this.node.scrollIntoView();
		this.requestList()
	}
	renderMap = (result) => { 
	  let list = result.route_list;
		this.map = new window.BMap.Map("container", {enableMapClick: false});
		let gps2 = list[list.length - 1].split(',');
		let cPoint = new window.BMap.Point(gps2[0], gps2[1]);

		this.map.centerAndZoom(cPoint, 4);
		
		 let user_list = result.user_list;

	for(var i=0;i<user_list.length;i++){
			var point = new window.BMap.Point(user_list[i][0],user_list[i][1]); 
			var content = '<div class="exam_coin_sel_details"><img class="user_addr"><div class="user_infom">' +
			'<div class="exam_user_sel_details_coin">'+'<span class="coin-pic"></span><span class="coin-num">'+user_list[i][2]+'</span><span class="coin-a">兑换信息</span>'+'</div>' +
			'<div>'+user_list[i][3]+' 兑换 '+user_list[i][4]+'</div>' +
			'<div>'+user_list[i][5]+'</div>' +
			'<div>'+user_list[i][6]+'</div>' +
			'</div></div></div>';
			var bikeMarker = new window.BMap.Marker(point, { icon: 
					new window.BMap.Symbol(window.BMap_Symbol_SHAPE_POINT, {
							scale: 2,
							fillColor: "orange",
							fillOpacity: 0.8
					}) 
			});
			this.map.addOverlay(bikeMarker);         
			this.addClickHandler(content,bikeMarker);
	}	
		this.addMapControl(content);
};
addClickHandler = (content,marker)=>{
	let opts = {
		width:161,
		enableMessage:true,
		offset: new window.BMap.Size(-20, -40)
	}; 
	marker.addEventListener("click",function(e){
			let p = e.target;
			let point = new window.BMap.Point(p.getPosition().lng, p.getPosition().lat);
			let infoWindow = new window.BMap.InfoWindow(content,opts);  
			this.map.openInfoWindow(infoWindow,point);
		}
	);
}                
addMapControl = () => {
		let map = this.map;
		var top_right_control = new window.BMap.ScaleControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT});
		var top_right_navigation = new window.BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT});
		map.addControl(top_right_control);
		map.addControl(top_right_navigation);
		map.enableScrollWheelZoom(true);
};
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
				<div id="container" style={{height:500}}></div>
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