import React,{ Component } from 'react';
import './components.css';
import 'antd/dist/antd.css';
import { Card, Tabs,Input} from 'antd'
import CoinTable from './CoinTable'
const TabPane = Tabs.TabPane;
const Search = Input.Search;


class MarketList extends Component {

	render(){
        return (
            <div className="card-container">
                <Card title="行情列表">
                    <Search
                        placeholder="搜索币种"
                        onSearch={value => console.log(value)}
                        className="coin-input"
                        style={{width:200,position:'absolute',top:80,right:25,zIndex:40}}
                    />
                    <Tabs type="card">
                        <TabPane tab="全部行情" key="1">
                            <CoinTable data={this.props.data}></CoinTable>
                        </TabPane>
                        <TabPane tab="涨幅榜" key="2" >
                        	<CoinTable data={this.props.data}></CoinTable>
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default MarketList; 