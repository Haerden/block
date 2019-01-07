import React,{ Component } from 'react';
import {Card,Row,Col} from 'antd';

import './style/slider.css';
import './style/account.css';

class BlockDetail extends Component {
	
	handleChange(value) {
	  console.log(value); 
	}
	render() {
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
							<span className="fr">ViaBTC</span>
						</p>
						<p>
							<span>时间</span>
							<span className="fr">2018-12-19 14:09:39</span>
						</p>
					</Col>
					<Col span={10} style={{padding:'0 20px'}}>
						<p>
							<span>块哈希</span>
							<span className="fr">00000000000000032435456455768723b3a332ffa</span>
						</p>
						<p>
							<span>前一个块</span>
							<span className="fr">00000000000000032435456455768723b3a332ffa</span>
						</p>
						<p>
							<span>后一个块</span>
							<span className="fr">N/A</span>
						</p>
						<p>
							<span>Merkle Root</span>
							<span className="fr">831d45c34b485sa9540v95460bz0299003003eer3</span>
						</p>
					</Col>
					</Row>
                </Card>
				<Card title="交易">
					<Card
						style={{ marginTop: 1 }}
						type="inner"
						title="IFC-bcdwop12378"
						extra={
							<div>
								<span style={{marginRight:30}}>0.0895891  IFC</span>
								<span>2018-12-19 14:09:56</span>
							</div>
						}
						>
						<Row>
							<Col span={8}>14LKRuH5LywgE99tw</Col>
							<Col span={4}>1.040</Col>
							<Col span={8}>14PSpuSo7tGZA5VzsgyVn</Col>
							<Col span={4}>122134567.58958791</Col>
						</Row>
					</Card>
					<Card
						style={{ marginTop: 30 }}
						type="inner"
						title="IFC-bcdwop12378"
						extra={
							<div>
								<span style={{marginRight:30}}>0.0895891  CBC</span>
								<span>2018-12-19 14:09:56</span>
							</div>
						}
						>
						<Row>
							<Col span={8}>14LKRuH5LywgE99twe8r2sCvny8QcMuUia</Col>
							<Col span={4}>1.04049032</Col>
							<Col span={8}>14PSpuSo7tGZA5VzsgyVnGjTy7wRPSTJL</Col>
							<Col span={4}>12.58958791</Col>
						</Row>
					</Card>
				</Card>
                	
            </div>
		)
	}
}

export default BlockDetail; 