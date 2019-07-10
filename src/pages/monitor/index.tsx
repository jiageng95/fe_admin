import React from 'react'
import { Card, Row, Col } from 'antd'
import '../../assets/css/pages/monitor.less'

class Monitor extends React.Component {
    render () {
        return (
            <div className="monitor container">
                <Row gutter={16}>
                    <Col span={18}>
                        <Card title="实时监控情况" className="monitor_card mb16">
                            <div className="card_con">1</div>
                        </Card>
                        <Row gutter={16}>
                            <Col span={16}>
                                <Card title="区块4" className="block_card">
                                    <div className="card_con">1</div>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="区块5" className="block_card">
                                    <div className="card_con">1</div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6}>
                        <Card title="区块1" className="block_card mb16">
                            <div className="card_con">1</div>
                        </Card>
                        <Card title="区块2" className="block_card mb16">
                            <div className="card_con">1</div>
                        </Card>
                        <Card title="区块3" className="block_card">
                            <div className="card_con">1</div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Monitor
