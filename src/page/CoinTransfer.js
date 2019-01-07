import React from "react";
import $ from 'jquery'
import { Carousel,Row,Col,Card, Form,InputNumber, Input, Button, Select } from "antd";
import park_img from '../static/park.png'
import card_a from '../static/card_a.png'
import card_b from '../static/card_b.png'
import card_c from '../static/card_c.png'
import './style/slider.css';
const FormItem = Form.Item;
const Option = Select.Option;
const { Meta } = Card;

class CoinTransfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userl:[],
            userlist:['IFC-bcdwop 12379','IFC-bcdwop 12378','IFC-bcdwop 12370'],
            userCoin:'IFC-bcdwop 12379 '
        };
    }
    // componentdidmount(){
    //     $(function() { $('#carousel').carousel({     
    //         curDisplay: 0, //默认索引 
    //         autoPlay: false, //是否自动播放 
    //         interval: 3000 //间隔时间  
    //        });   
    //     }); 
    // }
    handleSelectChange = (value) => {
        this.setState({
                userCoin:value
            }
        )
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className = 'components-form-transfer'>
                <Row>
                    <Col span = {8}>
                        <Card
                            title="转让"
                            style={{height:500}}
                        >
                            <Form  className="login-form">
                                    <FormItem
                                    label="转出 IFC币账户"
                                    >
                                    {getFieldDecorator('select', {
                                        rules: [
                                        { message: 'Please select your country!' },
                                        ],
                                        initialValue:'IFC-bcdwop 12379'
                                    })(
                                        <Select value={this.state.userl} onChange={this.handleSelectChange}>
                                            {
                                                this.state.userlist.map((value,key)=>{
                                                    return <Option key={key} value={value}>{value}</Option>
                                                })
                                            }
                                        </Select>
                                    )}
                                    </FormItem>
                                    <FormItem
                                    label="转入 IFC币账户"
                                    >
                                    {getFieldDecorator('input', {
                                        rules: [
                                        { message: 'Please select your country!' },
                                        ],
                                    })(
                                        <Input  placeholder="请输入IFC 币账户地址" />
                                    )}
                                    </FormItem>
                                    <FormItem
                                    label="转让数量"
                                    >
                                    {getFieldDecorator('input-number')(
                                        <InputNumber placeholder="请输入 Infohold Coin 数量" min={1} max={100000} style={{width:'100%'}}/>
                                    )}
                                    </FormItem>
                                    <FormItem>
                                    <Button type="primary" htmlType="submit" className="transfer-form-button">
                                       转让
                                    </Button>
                                    </FormItem>
                            </Form>
                        </Card>
                    </Col>
                    <Col span = {15} offset = {1} >
                        <Card
                            title="账户信息"
                            style={{height:500}}
                        >
                                <div id="banner">
                                    <div id="carousel">
                                        <img src={card_b} />
                                        <img src={card_a} />
                                        <img src={card_c} />
                                        <img src={card_a} />
                                        <img src={card_c} />
                                    </div>
                                </div>
                            <Meta
                            title= {`IFC 账户：${this.state.userCoin}  可用IFC数量：3000`}
                            style={{textAlign:'center',marginBottom:50,marginTop:10}}
                            />
                        </Card>
                    </Col>
                </Row>
                <img src={park_img}  style={{width:'100%',marginTop:28}}/>
            </div>
        );
    }
}

export default  Form.create()(CoinTransfer);