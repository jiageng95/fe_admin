import React from 'react'
import { Card, Row, Col, Icon } from 'antd'
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label } from 'bizcharts'
import ChartCard from '../../components/ChartCard'
import '../../assets/css/pages/analysis.less'

class Analysis extends React.Component {
    render () {
        // 数据源
        const data = [
            { genre: '1月', sold: 275 },
            { genre: '2月', sold: 115 },
            { genre: '3月', sold: 120 },
            { genre: '4月', sold: 350 },
            { genre: '5月', sold: 150 },
            { genre: '6月', sold: 120 },
            { genre: '7月', sold: 450 },
            { genre: '8月', sold: 50 },
            { genre: '9月', sold: 470 },
            { genre: '10月', sold: 750 },
            { genre: '11月', sold: 570 },
            { genre: '12月', sold: 230 }
        ]
        // 定义度量
        const cols = {
            sold: { alias: '销售量' },
            genre: { alias: '游戏种类' }
        }
        return (
            <div className="analysis container">
                <Row gutter={16} className="mb16">
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
                <Row className="mb16">
                    <Col span={24}>
                        <Card title="访问量" className="visit_card">
                            <Chart height={320} forceFit={true} data={data} scale={cols}>
                                <Axis name="genre"/>
                                <Axis name="sold"/>
                                {/* <Legend position="top"/> */}
                                <Tooltip />
                                <Geom type="interval" position="genre*sold" />
                            </Chart>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} className="mb16">
                    <Col span={12}>
                        <Card title="线上热门搜索" className="visit_card">
                            1
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="销售额类别占比" className="visit_card">
                            1
                        </Card>
                    </Col>
                </Row>
                <Row className="mb16">
                    <Col span={24}>
                        <Card className="visit_card">
                            123456
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Analysis
