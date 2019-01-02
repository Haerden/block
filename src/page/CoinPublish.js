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
                        })(
                        <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='简称：'
                    >
                        {getFieldDecorator('nickname', {
                        })(
                        <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="发行时间"
                        >
                        {getFieldDecorator('date-time-picker')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{width:'100%'}} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="有效期"
                        >
                        {getFieldDecorator('date-time-picker')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="数量"
                        >
                        <InputNumber
                            min={1}
                            max={100000000}
                            onChange={this.handleNumberChange}
                        />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='费用：'
                    >
                        {getFieldDecorator('price', {
                        })(
                        <Input />
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
                        })(
                            <Select placeholder="请输入IFC 币账户地址">
                            </Select>
                        )}
                    </FormItem>    
                    <FormItem label="简述"
                        {...formItemLayout}
                    >
                        <TextArea rows={4} />
                    </FormItem>    
                    <FormItem label="上传文件"
                        {...formItemLayout}
                    >
                        <Upload {...props}>
                            <Button>
                                <Icon type="upload" /> Upload
                            </Button>
                        </Upload>
                    </FormItem>                             
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary">确定</Button>
                        <Button>重置</Button>
                    </FormItem>
                </Form>                
            </Card>
        </div>

      );
    }
  }
export default  Form.create()(CoinPublish);