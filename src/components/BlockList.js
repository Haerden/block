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
                                        <h4>区块号：346,236</h4>
                                        <p>块哈希：3dcdf849ea875411</p>
                                    </Col>
                                    <Col span={9}>
                                        <p>创建时间：</p>
                                        <p>2017-04-19  14：18PM</p>
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
                                        <p>2017-04-19   14：18PM</p>
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
                                        <p>2017-04-19   14：18PM</p>
                                    </Col>
                                    <Col span={4}>
                                        <p>块版本：</p>
                                        <p>0x20000022</p>
                                    </Col>
                                </Row>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item  dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                            <div className="test_triangle_border">
                                <Row>
                                    <Col span={11}>
                                        <h4>区块号：346,236</h4>
                                        <p>块哈希：3dcdf849ea875411</p>
                                    </Col>
                                    <Col span={9}>
                                        <p>创建时间：</p>
                                        <p>2017-04-19   14：18PM</p>
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