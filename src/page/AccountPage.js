import React,{ Component } from 'react';
import {Card,Row,Col,Select} from 'antd';
import card_a from '../static/card_d.png'
import card_b from '../static/card_e.png'
import card_c from '../static/card_f.png'
import './style/slider.css';
import './style/account.css';
import $ from './slider.js'
const Option = Select.Option



class AccountPage extends Component {
	
	handleChange(value) {
	  console.log(value); 
	}
	componentDidMount(){
		this.node.scrollTop = 0
		$('#carousel').carousel({     
            curDisplay: 0, //默认索引 
            autoPlay: false, //是否自动播放 
            interval: 3000 //间隔时间  
        }); 
    }
	render() {
		return (
			<div ref={node => this.node = node} className="accountWrapper">
                <Card title="账户管理">
                	<Row>
					<Col span={10}>
						<Row>可用</Row>
						<Row id="cell"> 
							<Col span={5}><img 
							src={require("../static/cbc.png")} 
							style={{width:80,height:80}}
							alt="CBC"/></Col>
                        	<Col span={19}>15000.00 CBC</Col>
                        </Row>
						<Row>
							  <Col span={6}>币名</Col>
                        	  <Col span={18} >CBC</Col>
                        </Row>
                        <Row>
							  <Col span={6}>币地址</Col>
                        	  <Col span={18}>CBC-bcdwop12378</Col>
                        </Row>
                        <Row>
							  <Col span={6}>助记词</Col>
                        	  <Col span={18}>xd刘sx海</Col>
						</Row>
					</Col>
					<Col span={14}>

						<Select labelInValue defaultValue={{ key: 'CBC' }} className="selectDiv" onChange={this.handleChange.bind(this)}>
    						<Option value="CBC">CBC</Option>
    						<Option value="CBC">CBC</Option>
  						</Select>
  						<Row style={{height:40}}>
						</Row>
  						<div id="banner">
                         <div id="carousel">
                              <img src={card_a} alt="CBC"/>
                              <img src={card_b} alt="CBC"/>
                              <img src={card_c} alt="CBC"/>                             
                           </div>
                        </div>
					</Col>
					</Row>
                </Card>

                	
            </div>
		)
	}
}

export default AccountPage; 