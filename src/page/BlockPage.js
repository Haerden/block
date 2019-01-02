import React,{ Component } from 'react';
import '../components/components.css';
import { Card, Icon,Timeline,Row,Col} from 'antd';
import {Link} from "react-router-dom";
class BlockPage extends Component {
	componentDidMount() {
    this.node.scrollIntoView();
  	}
	render() {
		const block=[{
			number:"346,237",
			hash:"3dcdf849ea875411",
			createTime:"2017-04-19  14：18PM",
			version:"0x20000022"
		},
		{
			number:"346,236",
			hash:"3dcdf849ea875412",
			createTime:"2017-04-19  14：18PM",
			version:"0x20000022"
		},
		{
			number:"346,236",
			hash:"3dcdf849ea875413",
			createTime:"2017-04-19  15：18PM",
			version:"0x20000022"
		},
		{
			number:"346,236",
			hash:"3dcdf849ea875414",
			createTime:"2017-04-19  16：18PM",
			version:"0x20000022"
		}];

		return (
			<div ref={node => this.node = node}  className="block_page_content">
                <Card title='区块查询' bordered={false}
                    >
                    <Timeline>
                       {block.map((item, index)=>{
                        	return (
									<Timeline.Item>
										<Link to={`details/${index}`}>
									 	<div className="test_triangle_border">
                                		<Row>
                                    	<Col span={11}>
                                        <h4>区块号：{item.number}</h4>
                                        <p>块哈希：{item.hash}</p>
                                    	</Col>
                                    	<Col span={9}>
                                        <p>创建时间：</p>
                                        <p>2017-04-19  14：18PM</p>
                                    	</Col>
                                    	<Col span={4}>
                                        <p>块版本：</p>
                                        <p>{item.version}</p>
                                    	</Col>
                                		</Row>
                            			</div>
										</Link>
                        			</Timeline.Item>
                       	)
                        })
                   }
                            
                    </Timeline>
                </Card>
            </div>
		)
	}
}

export default BlockPage; 