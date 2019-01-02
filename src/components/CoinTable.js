import React from 'react';
import { Table } from 'antd';

export default class CoinTable extends React.Component {
    state = {

    }
    params = {
        page:1
    }
    componentDidMount(){

        this.setState({
            dataSource: this.props.data
        })
    }

    handleChange = (pagination, filters, sorter)=>{
       
    }

    render(){
        const columns = [
            {
                title: '币名称',
                key: 'name',
                dataIndex: 'name',
                width:'16%'
            },
            {
                title: '最新价格',
                key: 'price',
                dataIndex: 'price',
                sorter:(a,b)=>{
                    return a.new - b.new;
                },
                sortOrder:this.state.sortOrder,
                width:'16%'
            },
            {
                title: '涨幅',
                key: 'gap',
                dataIndex: 'gap',
                width:'16%'
            },
            {
                title: '最高价',
                key: 'high',
                dataIndex: 'high',
                width:'16%'
            },
            {
                title: '最低价',
                key: 'low',
                dataIndex: 'low',
                width:'16%'
            },
            {
                title: '24H成交量',
                key: 'vol',
                dataIndex: 'vol',
            }
        ]
        return (
            <div>
                    <Table
                        columns={columns}
                        dataSource={this.props.data}
                        pagination={false}
                        scroll={{y:240}}
                        onChange={this.handleChange}
                    />
            </div>
        )
    }
}