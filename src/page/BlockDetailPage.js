import React,{ Component } from 'react';
import {Card,Row,Col,Icon} from 'antd';
import {Link} from "react-router-dom";

import './style/slider.css';
import './style/account.css';
class BlockDetailPage extends Component {
	
	handleChange(value) {
	  console.log(value); 
	}
	render() {
		const blockInf=[{
			coinName:"IFC-bcdwop12378",
			coinNumber:"0.0895891 IFC",
			createTime:"2018-12-19 14:09:56",
			coinInfOne:"14LKRuH5LywgE99tw",
			coinInfTwo:"1.04049032",
			coinInfThree:"14PSpuSo7tGZA5VzsgyVnGjTy7wRPSTJL",
			coinInfFour:"12.58958791"
		},{
			coinName:"IFC-bcdwop12372",
			coinNumber:"0.0895892 IFC",
			createTime:"2018-12-19 14:09:36",
			coinInfOne:"14LKRuH5LywgE99twe8r2sCvny8QcMuUia",
			coinInfTwo:"1.04049031",
			coinInfThree:"14PSpuSo7tGZA5VzsgyVnG",
			coinInfFour:"12.58958351"
		},{
			coinName:"IFC-bcdwop12328",
			coinNumber:"0.0895891 IFC",
			createTime:"2018-12-19 14:09:56",
			coinInfOne:"14LKRuH5LywgE99tw",
			coinInfTwo:"1.04049032",
			coinInfThree:"14PSpuSo7tGZA5VzsgyVnGjTy7wRPSTJL",
			coinInfFour:"12.58958791"
		},{
			coinName:"IFC-bcdwop123421",
			coinNumber:"0.0895891 IFC",
			createTime:"2018-12-19 14:09:56",
			coinInfOne:"14LKRuH5LywgE99tw",
			coinInfTwo:"1.04049032",
			coinInfThree:"14PSpuSo7tGZA5VzsgyVnGjTy7wRPSTJL",
			coinInfFour:"12.58958791"
		}];
		return (
			<div className="blockWapper">
                <Card title="摘要" className="abstract-card">
                	<Row>
					<Col span={7} style={{ borderRight:'1px solid #ddd', padding:'0 20px'}}>
						<p>
							<span>高度</span>
							<span className="fr">554,,450</span>
						</p>
						<p>
							<span>确认数</span>
							<span className="fr">1</span>
						</p>
						<p>
							<span>大小</span>
							<span className="fr">549,904 Bytes</span>
						</p>
						<p>
							<span>Stripped Size</span>
							<span className="fr">472,355 Bytes</span>
						</p>
						<p>
							<span>Weight</span>
							<span className="fr">1,983,231</span>
						</p>
						<p>
							<span>数量</span>
							<span className="fr">1,203</span>
						</p>
					</Col>
					<Col span={7} style={{ borderRight:'1px solid #ddd', padding:'0 20px'}}>
						<p>
							<span>版本</span>
							<span className="fr">0x200000000</span>
						</p>
						<p>
							<span>难度</span>
							<span className="fr">5.30 T / 5.11 T</span>
						</p>
						<p>
							<span>Bits</span>
							<span className="fr">0x17371ef4</span>
						</p>
						<p>
							<span>Nonce</span>
							<span className="fr">0x8c649bd0</span>
						</p>
						<p>
							<span>播报方</span>
							<span className="fr mainColor">ViaBTC</span>
						</p>
						<p>
							<span>时间</span>
							<span className="fr">2018-12-19 14:09:39</span>
						</p>
					</Col>
					<Col span={10} style={{padding:'0 20px'}}>
						<p>
							<span>块哈希</span>
							<span className="fr">000000000000000356455768723b3a332ffa</span>
						</p>
						<p>
							<span>前一个块</span>
							<span className="fr">000000000000000356455768723b3a332ffa</span>
						</p>
						<p>
							<span>后一个块</span>
							<span className="fr">N/A</span>
						</p>
						<p>
							<span>Merkle Root</span>
							<span className="fr">831d45sa9540v95460bz0299003003eer3</span>
						</p>
					</Col>
					</Row>
                </Card>
				<Card title="交易">
					{blockInf.map((item, index)=>{
                        return (
							<Card
								type="inner"
								title={item.coinName}
								extra={
									<div>
										<span style={{marginRight:30}}>{item.coinNumber}</span>
										<span>{item.createTime}</span>
									</div>
								}
								>
								<Row>
									<Col span={8}>{item.coinInfOne}</Col>
									<Col span={4}>{item.coinInfTwo}</Col>
									<Col span={1}>
										<Icon type="right-circle" theme="filled"  style={{color:'#d9d9d9',fontSize:24}} />
									</Col>
									<Col span={7}>
										{item.coinInfThree}
									</Col>
									<Col span={4} style={{textAlign:'right'}}>{item.coinInfFour}</Col>
								</Row>
								<span className="block-mark">12.58958791</span>
							</Card>					
						)}
						)
					}

				</Card>
                	
            </div>
		)
	}
}

export default BlockDetailPage; 