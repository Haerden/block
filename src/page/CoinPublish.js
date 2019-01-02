import React from "react";
import { Upload,Card,Form,DatePicker,Input,Icon,  Select, Row, Col, Button, AutoComplete,InputNumber } from "antd";
import './style/coinPublish.css'
const FormItem = Form.Item;
const Option = Select.Option;
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
    componentDidMount(){
        this.node.scrollIntoView();
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
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
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }],
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
                        >
                        <InputNumber
                            min={1}
                            max={100000000}
                            defaultValue={1}
                            style={{width:'100%'}}
                            addonAfter='IFC'
                        />
                    </FormItem>
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
                        {getFieldDecorator('select', {
                            rules: [
                            { message: 'Please select your country!' },
                            ],
                            initialValue:'免费赠与'
                        })(
                            <Input  disabled/>
                        )}
                    </FormItem>    
                    <FormItem label="简述"
                        {...formItemLayout}
                    >
                        <TextArea rows={4} placeholder='企业币概述介绍' />
                    </FormItem>    
                    <FormItem label="上传文件"
                        {...formItemLayout}
                    >
                        <Upload {...props}>
                            <Button>
                                <Icon type="upload" /> 上传文件
                            </Button>
                        </Upload>
                    </FormItem>                             
                    <FormItem style={{float:'right',marginRight:300}}>
                        <Button type="primary">发币</Button>
                        <Button>重置</Button>
                    </FormItem>
                </Form>                
            </Card>
        </div>

      );
    }
  }
export default  Form.create()(CoinPublish);