import React from "react";
import { Card, Form, Input, Button,Tabs, Select,List, Avatar,Switch } from "antd";
import './style/userinfo.css'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const Option = Select.Option;
class UserInfo extends React.Component{
    componentDidMount(){
        this.node.scrollIntoView();
    }

    state = {
        data:[
            {
                title: '账户密码',
                description:'当前密码强度：强'
            },
            {
                title: '绑定手机',
                description:'已绑定手机：138****8293'
            },
            {
                title: '绑定密保',
                description:'动态密保口令，账户安全有保障'
            },
            {
                title: '备用邮箱',
                description:'已绑定邮箱：xiaofu***infohold..com.cn'
            },
        ],
        list:[
            {
                title:'绑定小付钱包',
                description:'当前尚未绑定账号'
            }
        ],
        newMessage:[
            {
                title:'消息通知',
                description:'其他用户的消息将以站内信的形式通知'
            },
            {
                title:'系统通知',
                description:'系统消息将以站内信的形式通知'
            },
            {
                title:'待办通知',
                description:'待办事项将以站内信的形式通知'
            }
        ]
    }
    changeTabPosition = (tabPosition) => {
        this.setState({ tabPosition });
    }
    onChange = (checked) => {
        console.log(`switch to ${checked}`);
    }       
    render(){
        const { getFieldDecorator } = this.props.form;
        return ( 
            <div ref={node => this.node = node} className="setting-content">
                <div className="setting-title">用户管理</div>
                <Tabs tabPosition={'left'}>
                <TabPane tab="基本信息" key="1">
                    <Card title="基本信息">
                        <Form layout="horizontal">
                            <FormItem label="邮箱">
                                {
                                    getFieldDecorator('email', {
                                        initialValue: 'xiaofuqianbao@infohold.com.cn',
                                        rules: [
                                            {
                                                message: '用户名不能为空'
                                            }
                                        ]
                                    })(
                                        <Input placeholder="请输入邮箱" size='small' />
                                    )
                                }
                            </FormItem>
                            <FormItem label="昵称">
                                {
                                    getFieldDecorator('name', {
                                        initialValue: 'Infohold coin'
                                    })(
                                        <Input  placeholder="请输入昵称"  size='small' />
                                    )
                                }
                            </FormItem>
                            <FormItem label="个人简介">
                                {
                                    getFieldDecorator('profile', {
                                    })(
                                        <Input.TextArea
                                            placeholder='这个人很懒，什么都没留下'
                                            rows={4}
                                            size='small'
                                            style={{fontSize:13}}
                                        />
                                    )
                                }
                            </FormItem>
                            <FormItem label="国家地区">
                                {
                                    getFieldDecorator('country', {
                                        initialValue:'China'
                                    })(
                                        <Select style={{ maxWidth: 220 }} size='small'>
                                            <Option value="China">中国</Option>
                                        </Select>
                                    )
                                }
                            </FormItem>
                            <FormItem label="所在省市">
                                {
                                    getFieldDecorator('geographic', {
                                        initialValue:'zhejiang'
                                    })(
                                        <Select style={{ maxWidth: 220 }} size='small'>
                                            <Option value="zhejiang">浙江</Option>
                                        </Select>
                                    )
                                }
                            </FormItem>
                            <FormItem label="街道地址">
                                {
                                    getFieldDecorator('address',{
                                        initialValue:'北京市海淀区奥林匹克公园'
                                    })(
                                        <Input size='small'/>
                                    )
                                }
                            </FormItem>
                            <FormItem label="联系电话">
                                {
                                    getFieldDecorator('phone',{
                                        initialValue:'010-75676568'
                                    })(
                                        <Input size='small' />
                                    )
                                }
                            </FormItem>
                            <FormItem>
                                <Button type="primary" onClick={this.handleSubmit}>更新信息</Button>
                            </FormItem>
                        </Form>
                    </Card>    
                </TabPane>
                <TabPane tab="安全设置" key="2">
                    <Card title="安全设置">
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.data}
                            renderItem={item => (
                            <List.Item actions={[<a>修改</a>]}>
                                <List.Item.Meta
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={item.description}
                                /> 
                            </List.Item>
                        )} 
                        />          
                    </Card>
                </TabPane>
                <TabPane tab="账号绑定" key="3">
                    <Card title="账号绑定">
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.list}
                            renderItem={item => (
                            <List.Item actions={[<a>绑定</a>]}>
                                <List.Item.Meta
                                avatar={<Avatar 
                                    src={require('../static/wallet.png')} 
                                    style={{width:50,height:50}}
                                    />}
                                title={item.title}
                                description={item.description}
                                />
                            </List.Item>
                        )}
                        />             
                    </Card>
                </TabPane>
                <TabPane tab="新消息通知" key="4">
                    <Card title="新消息通知">
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.newMessage}
                            renderItem={item => (
                            <List.Item actions={[<Switch size="small" checkedChildren="开" defaultChecked/> ]}>
                                <List.Item.Meta
                                title={item.title}
                                description={item.description}
                                />
                            </List.Item>
                        )}
                        />             
                    </Card>
                </TabPane>
                </Tabs>
            </div> 
        );
    }
}
export default Form.create()(UserInfo);