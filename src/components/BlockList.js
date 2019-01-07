import React,{ Component } from 'react';
import './components.css';
import { Card, Icon,Timeline,Row,Col} from 'antd';
import 'antd/dist/antd.css';

class BlockList extends Component {

	render() {
		return (
		<div className = 'block-content'>
                <Card title='区块概要' bordered={false}
                    >
                    <Timeline>
                        <Timeline.Item >
                            <div className="test_triangle_border">
                                <Row>
                                    <Col span={11}>
                                        <h4>区块号：346,235</h4>
                                        <p>块哈希：3dcdf849ea875411</p>
                                    </Col>
                                    <Col span={9}>
                                        <p>创建时间：</p>
                                        <p>2017-04-30  12：18PM</p>
                                    </Col>
                                    <Col span={4}>
                                        <p>块版本：</p>
                                        <p>0x20000022</p>
                                    </Col>
                                </Row>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="test_triangle_border">
                                <Row>
                                    <Col span={11}>
                                        <h4>区块号：346,236</h4>
                                        <p>块哈希：3dcdf849ea875411</p>
                                    </Col>
                                    <Col span={9}>
                                        <p>创建时间：</p>
                                        <p>2017-04-19   15：26PM</p>
                                    </Col>
                                    <Col span={4}>
                                        <p>块版本：</p>
                                        <p>0x20000022</p>
                                    </Col>
                                </Row>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="test_triangle_border">
                                <Row>
                                    <Col span={11}>
                                        <h4>区块号：346,237</h4>
                                        <p>块哈希：3dcdf849ea875411</p>
                                    </Col>
                                    <Col span={9}>
                                        <p>创建时间：</p>
                                        <p>2017-04-15   14：18PM</p>
                                    </Col>
                                    <Col span={4}>
                                        <p>块版本：</p>
                                        <p>0x20000022</p>
                                    </Col>
                                </Row>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="test_triangle_border">
                                <Row>
                                    <Col span={11}>
                                        <h4>区块号：346,238</h4>
                                        <p>块哈希：3dcdf849ea875411</p>
                                    </Col>
                                    <Col span={9}>
                                        <p>创建时间：</p>
                                        <p>2017-04-13   10：30PM</p>
                                    </Col>
                                    <Col span={4}>
                                        <p>块版本：</p>
                                        <p>0x20000022</p>
                                    </Col>
                                </Row>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </Card>
            </div>
		)
	}
}

export default BlockList; 