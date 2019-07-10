import React from 'react'
import { Row, Col, Icon } from 'antd'
import ChartCard from '../../components/ChartCard'
import '../../assets/css/pages/analysis.less'

class Analysis extends React.Component {
    render () {
        return (
            <div className="analysis container">
                <Row gutter={16}>
                    <Col span={6}>
                        <ChartCard
                            title="总销售额"
                            tip="总销售额"
                            value={126560}
                            prefix='￥'
                            bottomTit="日销售额"
                            bottomValue="¥ 12423"
                        >
                            <div className="con_m_item">
                                周同比
                                <span className="txt red">12%</span>
                                <Icon type="arrow-up" className="red" />
                            </div>
                            <div className="con_m_item">
                                日同比
                                <span className="txt green">11%</span>
                                <Icon type="arrow-down" className="green" />
                            </div>
                        </ChartCard>
                    </Col>
                    <Col span={6}>
                        <ChartCard
                            title="总销售额"
                            tip="总销售额"
                            value={126560}
                            prefix='￥'
                            bottomTit="日销售额"
                            bottomValue="¥ 12423"
                        >
                            <div className="con_m_item">
                                周同比
                                <span className="txt red">12%</span>
                                <Icon type="arrow-up" className="red" />
                            </div>
                            <div className="con_m_item">
                                日同比
                                <span className="txt green">11%</span>
                                <Icon type="arrow-down" className="green" />
                            </div>
                        </ChartCard>
                    </Col>
                    <Col span={6}>
                        <ChartCard
                            title="总销售额"
                            tip="总销售额"
                            value={126560}
                            prefix='￥'
                            bottomTit="日销售额"
                            bottomValue="¥ 12423"
                        >
                            <div className="con_m_item">
                                周同比
                                <span className="txt red">12%</span>
                                <Icon type="arrow-up" className="red" />
                            </div>
                            <div className="con_m_item">
                                日同比
                                <span className="txt green">11%</span>
                                <Icon type="arrow-down" className="green" />
                            </div>
                        </ChartCard>
                    </Col>
                    <Col span={6}>
                        <ChartCard
                            title="总销售额"
                            tip="总销售额"
                            value={126560}
                            prefix='￥'
                            bottomTit="日销售额"
                            bottomValue="¥ 12423"
                        >
                            <div className="con_m_item">
                                周同比
                                <span className="txt red">12%</span>
                                <Icon type="arrow-up" className="red" />
                            </div>
                            <div className="con_m_item">
                                日同比
                                <span className="txt green">11%</span>
                                <Icon type="arrow-down" className="green" />
                            </div>
                        </ChartCard>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Analysis
