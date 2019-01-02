import React,{ Component } from 'react';
import './components.css';
import { Card,Row,Col} from 'antd';
import {Link} from 'react-router-dom';

class IFCInfo extends Component {

	render() {
		return (
            <div className= 'info-content'>
                <Card title="我的IFC币" bordered={false}>
                     <Row>
                        <Col span={4} >
                            <img style={{width:80,height:80}}
                            src={require('../static/coin.png')} alt=""/>
                        </Col>
                       
                        <Col  span={4}>
                        </Col>
                        <Col  span={16}>
                           <Row>IFC主账号:</Row>
                            <Row>IFC-bcdwop12378</Row>
                        </Col>
                    </Row>
             
                  
                    <Row style={{marginTop:40}}>
                        <Col span={8}>可用IFC</Col>
                        <Col span={10} offset={6}>8000</Col>
                    </Row>
                    <Row>
                        <Col span={8}>可用CBC</Col>
                        <Col span={10} offset={6}>10000</Col>
                    </Row>
                    <Row>
                        <Col span={8}>可用YBC</Col>
                        <Col span={10} offset={6}>12300</Col>
                    </Row>
                    <Row style={{marginTop:100}} className="rowbtn">
                        <Col span={8} style={{borderRight:'2px solid #eee',color: '#db9a2c'}}>
                         <Link to={'/coinInout'} style={{color:"#db9a2c"}}>充币</Link> 
                        </Col>
                     
                        <Col span={8} 
                            style={{borderRight:'2px solid #eee',color: '#db9a2c'}}>
                            <Link to={'/coinTransfer'} style={{color:"#db9a2c"}}>转让</Link> 
                        </Col>
                
                        <Col span={8} style={{color: '#db9a2c'}}>
                            <Link to={'/coinExchange'} style={{color:"#db9a2c"}}>兑换</Link>
                        </Col>
                    </Row>
                </Card>
            </div>
		)
	}
}

export default IFCInfo; 