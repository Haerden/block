import React from "react";
import { Card,Slider,Input,Button,List,Row,Col,Table } from "antd";
import './style/coinExchange.css';

class CoinExchange extends React.Component{
    constructor(){
        super();
        this.state= {
            selectedItem:{
                currencyName:"CBC",
                latestPrice:30.00,
                infoName:'长白山旅游币',
                gain:'-20%'
            },
            otherCoinTotal:0,
            cbcCoinTotal:0
        }
    }
    handleOtherChange = (value) => {
        this.setState({
            otherCoinTotal:value 
        })
    }
    handleCbcChange = (value) => {
        this.setState({
            cbcCoinTotal:value 
        })
    }
    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }
    
    render(){
        const marketList = [{
			"id": 1,
			"currencyName": "CBC",
			"latestPrice": "0.808",
			"gain": "0.76",
		}, {
			"id": 2,
			"currencyName": "OPT",
			"latestPrice": "0.808",
			"gain": "-1.54",
		},{
			"id": 3,
			"currencyName": "HPP",
			"latestPrice": "0.808",
			"gain": "-2.66",
		},{
			"id": 4,
			"currencyName": "ONT",
			"latestPrice": "0.808",
			"gain": "+1.51",
		},{
			"id": 5,
			"currencyName": "OPP",
			"latestPrice": "0.808",
			"gain": "-0.23",
		},{
			"id": 6,
			"currencyName": "UIU",
			"latestPrice": "0.808",
			"gain": "-0.76",
		},{
			"id": 7,
			"currencyName": "HPT",
			"latestPrice": "0.808",
			"gain": "0.76",
		}, {
			"id": 8,
			"currencyName": "OPT",
			"latestPrice": "0.808",
			"gain": "-1.54",
		},{
			"id": 9,
			"currencyName": "HPP",
			"latestPrice": "0.808",
			"gain": "-2.66",
		},
        ];
        const EntrustList = [{
            "id": 1,
            "businessTitle":"买入",
			"entrustPrice": "0.0053",
			"entrustCount": "50",
			"entrustTotal": "50",
		}, {
            "id": 2,
            "businessTitle":"卖出",
			"entrustPrice": "0.0052",
			"entrustCount": "40",
			"entrustTotal": "38",
		},{
            "id": 3,
            "businessTitle":"买入",
			"entrustPrice": "0.0052",
			"entrustCount": "40",
			"entrustTotal": "38",
		},{
            "id": 4,
            "businessTitle":"卖出",
			"entrustPrice": "0.0052",
			"entrustCount": "40",
			"entrustTotal": "38",
		},{
            "id": 5,
            "businessTitle":"买入",
			"entrustPrice": "0.0052",
			"entrustCount": "40",
			"entrustTotal": "38",
		},{
            "id": 6,
            "businessTitle":"卖出",
			"entrustPrice": "0.0052",
			"entrustCount": "40",
			"entrustTotal": "38",
		},{
            "id": 7,
            "businessTitle":"买入",
			"entrustPrice": "0.0052",
			"entrustCount": "40",
			"entrustTotal": "38",
		},
        ];
        const TimeList = [{
            "id": 1,
            "time":"15:05:46",
			"businessTitle": "卖出",
			"entrustPrice": "0.0053",
			"entrustCount": "50",
		}, {
            "id": 2,
            "time":"15:04:31",
			"businessTitle": "买入",
			"entrustPrice": "0.0052",
			"entrustCount": "40",
		},{
            "id": 3,
            "time":"15:04:46",
			"businessTitle": "买入",
			"entrustPrice": "0.0051",
			"entrustCount": "30",
		},{
            "id": 4,
            "time":"15:03:22",
			"businessTitle": "卖出",
			"entrustPrice": "0.0050",
			"entrustCount": "38",
		},{
            "id": 5,
            "time":"12:03:22",
			"businessTitle": "买入",
			"entrustPrice": "0.0048",
			"entrustCount": "36",
		},{
            "id": 6,
            "time":"11:03:22",
			"businessTitle": "买入",
			"entrustPrice": "0.0045",
			"entrustCount": "30",
		}
        ];
        const gridStyle = {
            width: '50%',
            textAlign: 'center',
        };   
        const marks = {
            0: '0',
            2500: '2500',
            5000: '5000',
            7500: '7500',
            10000: '10000 CBC'
        };
        const marksIFC = {
            0: '0',
            250: '250',
            500: '500',
            750: '750',
            1000: '1000 IFC'
        };

        const columns = [{
            title: '币名称',
            dataIndex: 'currencyName',
            width: 80,
          }, {
            title: '最新价',
            dataIndex: 'latestPrice',
            width: 80,
          }, {
            title: '涨幅',
            dataIndex: 'gain',
            render: text => (
                text > 0 ? <span style={{color:'#FAAD14'}}>{text+'%'}</span> : <span style={{color:'#A0D911'}}>{text+'%'}</span>
              )
          }
        ];
        const columnsEntrust = [{
            title: '',
            dataIndex: 'businessTitle',
            width:'25%',
            render: text => (
                text == '买入' ? <span style={{color:'#FAAD14'}}>{text}</span> : <span style={{color:'#A0D911'}}>{text}</span> 
            )
          }, {
            title: '价格(CBC)',
            dataIndex: 'entrustPrice',
            width:'25%',
          },{
            title: '数量(IFC)',
            dataIndex: 'entrustCount',
            width:'25%',
          }, {
            title: '累计(IFC)',
            dataIndex: 'entrustTotal',
            width:'25%',
          }
        ];
        const columnsTime = [{
            title: '时间',
            dataIndex: 'time',
            width:'25%',
          },{
            title: '方向',
            dataIndex: 'businessTitle',
            width:'25%',
            render: text => (
                text == '买入' ? <span style={{color:'#FAAD14'}}>{text}</span> : <span style={{color:'#A0D911'}}>{text}</span> 
            )
          }, {
            title: '价格(IFC)',
            dataIndex: 'entrustPrice',
            width:'25%',
          },{
            title: '数量(CBC)',
            dataIndex: 'entrustCount',
            width:'25%',
          }
        ];
        const newsList = [
            {
              title: '长白山旅游区“积分换IFC币活动”正火热进行中',
              time:'2018.12.11  10:10'
            },
            {
              title: '区块链技术运用，让企业效率倍增',
              time:'2018.12.11  10:10'
            },
            {
              title: '小付咖啡今日推出新品套餐活动，获得市场好评',
              time:'2018.12.11  10:10'
            },
            {
              title: '畅游北京公园，套票限量抢购中',
              time:'2018.12.11  10:10'
            },
            {
                title: '意大利酒庄高端红酒，让你拥有国内自己的酒庄',
                time:'2018.12.11  10:10'
            },
        ];
        return ( 
            <div className="trade-content">
                <Row>
                    <Col span={6}>
                       <Card title="行情列表" style={{height:586}}>
                            <Table columns={columns} 
                                dataSource={marketList} 
                                pagination={false} 
                                scroll={{ y: 430 }}
                                onRow={(record,index) => {
                                    return {
                                        onClick: () => {
                                            this.onRowClick(record,index);
                                        }
                                    };
                                }}
                            />
                       </Card>
                    </Col>
                    <Col span={18} style={{marginTop:0}}>
                        <Row>
                            <div className="trade-title">
                                <span>{this.state.selectedItem.currencyName}</span>
                                <span className="currencyname" key={this.state.selectedRowKeys}>{this.state.selectedItem.infoName}</span>
                                <span className="latestPrice">200.50≈1.00 IFC</span>
                                <span className="gain">{this.state.selectedItem.gain}</span>
                            </div>
                            <Col span={15}>
                                <Card title="兑换">
                                    <Card.Grid style={gridStyle}>
                                        <p className="changeTitle">
                                            可用 {this.state.selectedItem.currencyName} 101,250.00
                                        </p>
                                        <div className="changeInput">
                                            <p>兑换价</p>
                                            <Input 
                                            value='50'
                                            suffix='IFC'
                                            disabled
                                            />
                                        </div>
                                        <div className="changeInput">
                                            <p>兑换量</p>
                                            <Input 
                                            suffix={this.state.selectedItem.currencyName}
                                            value={this.state.otherCoinTotal}
                                            />
                                        </div> 
                                        <div className="trade-botton">
                                            <Slider marks={marks} min={0} max={10000} onChange={this.handleOtherChange} />
                                            <p>可兑换 {this.state.otherCoinTotal/4} IFC</p>
                                            <Button block>{this.state.selectedItem.currencyName} => IFC</Button>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <p className="changeTitle">
                                             可用 IFC 500.00
                                        </p>
                                        <div className="changeInput">
                                            <p>兑换价</p>
                                            <Input 
                                            suffix={this.state.selectedItem.currencyName}
                                            value='200'
                                            disabled
                                            />
                                        </div>
                                        <div className="changeInput">
                                            <p>兑换量</p>
                                            <Input 
                                            suffix='IFC'
                                            value={this.state.cbcCoinTotal}
                                            />
                                        </div> 
                                        <div className="trade-botton">
                                            <Slider marks={marksIFC} min={0} max={1000}  onChange={this.handleCbcChange} />
                                            <p>可兑换 {this.state.cbcCoinTotal/2} IFC</p>
                                            <Button type="primary"  block>IFC => {this.state.selectedItem.currencyName}</Button>
                                        </div>                                      
                                    </Card.Grid>
                                </Card>
                            </Col>
                            <Col span={8}  offset={1}>
                                <Card title="委托列表" style={{height:506}}>
                                    <Table columns={columnsEntrust} 
                                        dataSource={EntrustList} 
                                        pagination={false} 
                                        scroll={{ y: 350 }}
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop:28}}>
                    <Col span={6}>
                       <Card title="行情列表" style={{height:'560px'}}>
                       <List
                            itemLayout="horizontal"
                            dataSource={newsList}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                title={<a href="javascript:;">{item.title}</a>}
                                description={item.time}
                                />
                            </List.Item>
                            )}
                        />
                       </Card>
                    </Col>
                    <Col span={18} className="trade-info">
                        <Row>
                            <Col span={15} >
                                <Card title="币种资料" style={{height:'560px'}}>
                                    <p className="coin-name">{this.state.selectedItem.currencyName}</p>
                                    <p className="coin-fname">长白山旅游币</p>
                                    <Card.Grid style={{width:'40%',paddingRight:'30px'}}>
                                        <p>
                                            <span style={{color:'#8d8d8d',display:'block'}}>简介：</span>
                                            是由长白旅游公司基于Infoholder Coin全球通用积分币平台发行了积分币。发行总量限定5千万，100%用作免费赠送。旅游者在长白山旅游的所有消费，包括门票、长白山住宿、交通、饮食等，都可以根据积分规则，免费获得CBC币。旅游者持CBC币可以在长白山景区范围内指定商户获取礼品或服务，也可兑换成INC币，在全国范围内指定商户内进行消费。
                                        </p>
                                    </Card.Grid>
                                    <Card.Grid style={{width:'60%',paddingLeft:'15px',marginTop:'-24px'}}>                          
                                        <div className="coin-info-item">
                                        发行时间
                                            <span className="coin-info-label">
                                                2018年11月25日
                                            </span>
                                        </div>                           
                                        <div className="coin-info-item">
                                        发行总量
                                            <span className="coin-info-label">
                                            5000万
                                            </span>
                                        </div>                           
                                        <div className="coin-info-item">
                                        当前流通
                                            <span className="coin-info-label">
                                            1500.98万
                                            </span>
                                        </div>                           
                                        <div className="coin-info-item">
                                        官网
                                            <a href="javascript:;" style={{paddingLeft:62}}>
                                            http://www.ichangbaishan.com
                                            </a>
                                        </div>                       
                                        <div className="coin-info-item">
                                        区块查询
                                            <a href="javascript:;">
                                            http://www.infoholder.com
                                            </a>
                                        </div>                       
                                    </Card.Grid>
                                </Card>
                            </Col>
                            <Col span={8} offset={1}>
                                <Card title="实时成交" style={{height:'560px'}}>
                                    <Table columns={columnsTime} 
                                        dataSource={TimeList} 
                                        pagination={false} 
                                        scroll={{ y: 350 }}
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default CoinExchange;