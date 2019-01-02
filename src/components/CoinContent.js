import React from 'react'
import { Card,Row,Col} from 'antd';
import './style/infoCoin.css';


export default class CoinContent extends React.Component {
    render(){
        return (
            <div className= 'info-content'>
                <Card title="基本信息" bordered={false}>
                   <Row style={{height:10}}></Row>
                    <Row>
                        <Col span={8}>币种全称</Col>
                        <Col span={10} offset={6}>Infohold Coin</Col>
                    </Row>
                    <Row>
                        <Col span={8}>币种简称</Col>
                        <Col span={10} offset={6}>IFC</Col>
                    </Row>
                    <Row>
                        <Col span={8}>发行</Col>
                        <Col span={10} offset={6}>小付钱包</Col>
                    </Row>
                    <Row>
                        <Col span={8}>发行时间</Col>
                        <Col span={10} offset={6}>2018年12月12日</Col>
                    </Row>
                    <Row>
                        <Col span={8}>IFC标志</Col>
                        <Col span={10} offset={5}>
                            <img src={require('../static/coin.png')} 
                             style={{marginTop:50,width:140,height:140}}
                             className="ifcImage"
                            alt=""/>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}