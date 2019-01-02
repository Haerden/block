import React from "react";
import { Card, Form,InputNumber, Button,Select,Row,Col,Table } from "antd";
import './style/coinInout.css'
const FormItem = Form.Item;
const Option = Select.Option;

class CoinInout extends React.Component{
    constructor(){
        super();
        this.state = { 
            userl:[],
            userlist:['111','222','333'],
            labeldefault:{
                labelFrist:'IFC 币账户',
                labelSencond:'小付钱包账户',
                labelThree:'充入数量（币）',
                labelButton:'充币'
            },
            recharge:{
                labelFrist:'IFC 币账户',
                labelSencond:'小付钱包账户',
                labelThree:'充入数量（币）',
                labelButton:'充币'
            },
            extract:{
                labelFrist:'小付钱包账户',
                labelSencond:'IFC 币账户',
                labelThree:'提出数量（币）',
                labelButton:'提币'
            }   
        };
    }
    handleRecharge = () => {
        this.setState({
            recharge:this.state.labeldefault
        })
    }
    handleExtract = () => {
        this.setState({
            recharge:this.state.extract
        })
    }
    render(){
         const columns = [{
            title: 'IFC地址',
            dataIndex: 'IFC',
            key: 'IFC'
          }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
          }, {
            title: '钱包',
            dataIndex: 'coin',
            key: 'coin',
          }, {
            title: '类型',
            key: 'status',
            dataIndex: 'status'
          }, {
            title: '数量',
            key: 'total',
            dataIndex: 'total'
          }, {
            title: '状态',
            key: 'states',
            dataIndex: 'states',
            render: text => (
                 text == '申请中' ? <span style={{color:'#FAAD14'}}>{text}</span> : (text == '成功' ? <span style={{color:'#A0D911'}}>{text}</span> : <span style={{color:'#ff7b5a'}}>{text}</span>)
            )
          }];
          const dataSource = [{
            key: '1',
            IFC: 'CB3EE8EF04143B75',
            time: '2016-09-05 15:00',
            coin: 'XX公司企业钱包',
            status: '充值',
            total:'100IFC',
            states:'成功'
          }, {
            key: '2',
            IFC: 'CB8GG4EF02123B02',
            time: '2016-09-05 14:00',
            coin: 'XX公司企业钱包',
            status: '充值',
            total:'100IFC',
            states:'成功'
          }, {
            key: '3',
            IFC: 'CB2HH1EF01013B11',
            time: '2016-09-05 13:00',
            coin: 'XX公司企业钱包',
            status: '提币',
            total:'200IFC',
            states:'失败'
          }, { 
            key: '4',
            IFC: 'CB3EE8EF04143B76',
            time: '2016-09-05 12:00',
            coin: 'XX公司企业钱包',
            status: '提币',
            total:'500IFC',
            states:'申请中'
          }, {
            key: '5',
            IFC: 'CB2HH1EF01013C13',
            time: '2016-09-05 11:30',
            coin: 'XX公司企业钱包',
            status: '提币',
            total:'100IFC',
            states:'成功'
          }];
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="draw-content">
                <Card title="充币/提币" style={{margin:'0 100px'}}>
                    <Row>
                        <Col span={8} className="draw-left">
                            <p>账户余额</p>
                            <h2>30000.00 &nbsp;&nbsp;IFC</h2>
                            <div>
                                <Button type="primary" onClick={this.handleRecharge}>充币</Button>
                                <Button onClick={this.handleExtract}>提币</Button>
                            </div>
                            <p>IFC地址：</p>
                            <p>IFC-bcdwop12378</p>
                        </Col>
                        <Col span={16} className="draw-form">
                            <Form  className="login-form">
                                    <FormItem
                                    label={this.state.recharge.labelFrist}
                                    >
                                    {getFieldDecorator('select', {
                                        rules: [
                                        { message: 'Please select your country!' },
                                        ],
                                        initialValue:'000'
                                    })(
                                        <Select size='small' value={this.state.userl} onChange={this.handleChange}>
                                            {
                                                this.state.userlist.map((value,key)=>{
                                                    return <Option key={key} value={value}>{value}</Option>
                                                })
                                            }
                                        </Select>
                                    )}
                                    </FormItem>
                                    <FormItem
                                    label={this.state.recharge.labelSencond}
                                    >
                                         <Select placeholder="请输入IFC 币账户地址" size='small'>
                                           {
                                                this.state.userlist.map((value,key)=>{
                                                    return <Option key={key} value={value}>{value}</Option>
                                                })
                                            }
                                        </Select>
                                    </FormItem>
                                    <FormItem
                                    label={this.state.recharge.labelThree}
                                    >
                                        {getFieldDecorator('input-number')(
                                            <InputNumber placeholder="请输入 Infohold Coin 数量" min={1} max={10} size='small' style={{width:'100%'}}/>
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        <Button type="primary" htmlType="submit" className="transfer-form-button" size='small'>
                                        {this.state.recharge.labelButton}
                                        </Button>
                                    </FormItem>
                                    </Form>

                            <p style={{fontSize:12,color:'#ccc'}}>温馨提示：请仔细核对账户信息，以免给自身造成损失。</p>
                        </Col>
                    </Row>
                </Card>
                <Card title="账户明细" style={{margin:'30px 100px'}}>
                    <Table 
                    dataSource={dataSource} 
                    columns={columns} 
                    pagination={false}
                    />
                </Card>
            </div>

        )
    }
                
                                   
}
export default  Form.create()(CoinInout);