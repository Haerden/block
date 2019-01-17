import React from "react";
import { Upload,Card,Form,DatePicker,Input,Icon,  Select, Button, AutoComplete,InputNumber } from "antd";
import './style/coinPublish.css'
const FormItem = Form.Item;
const Option = Select.Option;
const ButtonGroup = Button.Group;
const { TextArea } = Input;
const AutoCompleteOption = AutoComplete.Option;
const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
};
class CoinPublish extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };

    static getDerivedStateFromProps(nextProps) {
        if ('value' in nextProps) {                                                                                                                                    
          return {
            ...(nextProps.value || {}),
          };
        }
        return null;
    }

    componentDidMount(){
        this.node.scrollIntoView();
    }
    reset = ()=>{
        this.props.form.resetFields();
    }
    compareCoinNumber = (rule, value, callback) => {
        const form = this.props.form;
        if (value <= 10000000) {
          callback('最少发行一千万个');
          return;
        } else if  (value > 100000000){
          callback('最多发行一亿个');
          return;
        }
    }
    handleNumberChange = (value) => {
        if(value <= 10000000){
            this.props.form.setFieldsValue({
                price: 200,
            });
        }else if(value > 10000000){
            this.props.form.setFieldsValue({
                price: `${Math.floor(value/50000)}`,
            });
        }
    }
    handButtonFl = (e) => {
        e.preventDefault();
        this.props.form.setFieldsValue({
            coinNumber: 100000000,
        });
    }
    handleButtonHalf = (e) => {
        e.preventDefault();
        this.props.form.setFieldsValue({
            coinNumber: 100000000/2,
        });
    }
    handleButtonFourth = (e) => {
        e.preventDefault();
        this.props.form.setFieldsValue({
            coinNumber: 100000000/4,
        });
    }
    render() {
      const { getFieldDecorator } = this.props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 2 },
          sm: { span: 7 },
        },
        wrapperCol: {
          xs: { span: 12 },
          sm: { span: 10 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 6,
          },
        },
      };
      return (
        <div class="issue-content"  ref={node => this.node = node}>
            <Card title="发行币" style={{margin:'100px 120px'}}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="名称："
                    >
                        {getFieldDecorator('email', {
                            initialValue:'长白山旅游景区'
                        })(
                        <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='简称：'
                    >
                        {getFieldDecorator('nickname', {
                            initialValue:'CBC'
                        })(
                        <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="发行时间"
                        >
                        {getFieldDecorator('date-time-picker')(
                            <DatePicker style={{ width: '100%' }} placeholder='2018-12-15'/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="有效期"
                        >
                        {getFieldDecorator('select',{
                            rules: [{
                                required: true
                            }],
                            initialValue:'1年'
                        })(
                            <Select>
                                <Option value="1">1年</Option>
                                <Option value="2">2年</Option>
                                <Option value="3">3年</Option>
                                <Option value="4">4年</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="数量"
                        style={{marginBottom: 0}}
                        >
                        {getFieldDecorator('coinNumber',{
                            rules: [{
                                required: true, message: '请填写发行的数量',
                                }, {
                                validator: this.compareCoinNumber,
                            }]
                        })(
                        <InputNumber
                                min={10000000}
                                max={100000000}
                                style={{width:'100%'}}
                                addonAfter='IFC'
                                onChange={this.handleNumberChange}
                            />
                        )}
                    </FormItem>
                    <Form.Item style={{marginBottom: 0,marginLeft:'29.2%'}}>
                        {getFieldDecorator('button')(
                        <ButtonGroup>
                            <Button size='small' onClick={this.handButtonFl}>全仓</Button>
                            <Button size='small' onClick={this.handleButtonHalf}>半仓</Button>
                            <Button size='small' onClick={this.handleButtonFourth}>1/4仓</Button>
                        </ButtonGroup>
                        )}
                        
                    </Form.Item>
                    <FormItem
                        {...formItemLayout}
                        label='费用：'
                    >
                        {getFieldDecorator('price', {
                        })(
                        <Input addonAfter='IFC' />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="转让方式"
                        >
                        {getFieldDecorator('mode', {
                            initialValue:"免费赠予"
                        })(
                            <Select>
                                <Option value="1">免费赠予</Option>
                            </Select>
                        )}
                    </FormItem>    
                    <FormItem label="简述"
                        {...formItemLayout}
                    >
                        <TextArea rows={4} placeholder='企业币概述介绍' />
                    </FormItem>    
                    <FormItem label="上传币样"
                        {...formItemLayout}
                    >
                        <Upload {...props}>
                            <Button>
                                <Icon type="upload" /> 上传币样
                            </Button>
                        </Upload>
                        <p style={{fontSize:13,color:'#666666'}}>上传图片应为png，jpg格式且大小不能超过1M</p>
                    </FormItem>                             
                    <FormItem style={{float:'right',marginRight:300}}>
                        <Button type="primary"  htmlType="submit">发币</Button>
                        <Button onClick={this.reset}>重置</Button>
                    </FormItem>
                </Form>                
            </Card>
        </div>

      );
    }
  }
export default  Form.create()(CoinPublish);