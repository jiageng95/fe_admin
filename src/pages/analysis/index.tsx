import React from 'react'
import { Card, Row, Col, Icon } from 'antd'
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label } from 'bizcharts'
import ChartCard from '../../components/ChartCard'
import '../../assets/css/pages/analysis.less'

class Analysis extends React.Component {
    render () {
        const visitData = [
            { date: '2019-7-12', value: 123 },
            { date: '2019-7-13', value: 223 },
            { date: '2019-7-14', value: 323 },
            { date: '2019-7-15', value: 223 },
            { date: '2019-7-16', value: 333 },
            { date: '2019-7-17', value: 400 },
            { date: '2019-7-18', value: 331 },
            { date: '2019-7-19', value: 223 },
            { date: '2019-7-20', value: 373 },
            { date: '2019-7-21', value: 423 },
            { date: '2019-7-22', value: 321 },
            { date: '2019-7-23', value: 214 },
            { date: '2019-7-24', value: 432 },
            { date: '2019-7-25', value: 213 },
            { date: '2019-7-26', value: 322 },
            { date: '2019-7-27', value: 223 },
            { date: '2019-7-28', value: 432 }
        ]
        const visitCols = {
            date: { alias: '访问量' }
        }
        const payData = [
            { name: '2019-7-12', value: 123 },
            { name: '2019-7-13', value: 223 },
            { name: '2019-7-14', value: 323 },
            { name: '2019-7-15', value: 223 },
            { name: '2019-7-16', value: 333 },
            { name: '2019-7-17', value: 400 },
            { name: '2019-7-18', value: 331 },
            { name: '2019-7-19', value: 223 },
            { name: '2019-7-20', value: 373 },
            { name: '2019-7-21', value: 423 },
            { name: '2019-7-22', value: 321 },
            { name: '2019-7-23', value: 214 },
            { name: '2019-7-24', value: 432 },
            { name: '2019-7-25', value: 213 },
            { name: '2019-7-26', value: 322 },
            { name: '2019-7-27', value: 223 },
            { name: '2019-7-28', value: 432 }
        ]
        const payCols = {
            date: { alias: '支付笔数' }
        }
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
        const cols = {
            sold: { alias: '销售量' }
        }
        const rankArr = [
            {
                name: '傻帽路1号店',
                rank: 323233
            },
            {
                name: '傻帽路2号店',
                rank: 323233
            },
            {
                name: '傻帽路3号店',
                rank: 323233
            },
            {
                name: '傻帽路4号店',
                rank: 323233
            },
            {
                name: '傻帽路5号店',
                rank: 323233
            },
            {
                name: '傻帽路6号店',
                rank: 323233
            },
            {
                name: '傻帽路7号店',
                rank: 323233
            }
        ]
        const rankingList = (rankArr.map((item, index) => (
            <div className="list_item" key={index}>
                <span className="item_index">{index + 1}</span>
                <span className="item_name">{item.name}</span>
                <span className="item_rank">{item.rank}</span>
            </div>
        )))
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
                            title="访问量"
                            tip="访问量"
                            value={8846}
                            bottomTit="日访问量"
                            bottomValue="2423"
                        >
                            <Chart
                                className="charts_item"
                                height={50}
                                forceFit={true}
                                data={visitData}
                                scale={visitCols}
                                padding="auto"
                            >
                                <Tooltip />
                                <Geom type="area" position="date*value" shape="smooth" color="#975FE4" opacity={1}/>
                            </Chart>
                        </ChartCard>
                    </Col>
                    <Col span={6}>
                        <ChartCard
                            title="支付笔数"
                            tip="支付笔数"
                            value={6560}
                            bottomTit="转化率"
                            bottomValue="60%"
                        >
                            <Chart
                                className="charts_item"
                                height={50}
                                forceFit={true}
                                data={payData}
                                scale={payCols}
                                padding="auto"
                            >
                                <Tooltip />
                                <Geom type="interval" position="name*value" opacity={1}/>
                            </Chart>
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
                            <Chart
                                className="charts_item"
                                height={50}
                                forceFit={true}
                                data={visitData}
                                scale={visitCols}
                                padding="auto"
                            >
                                <Tooltip />
                                <Geom type="area" position="date*value" shape="smooth" color="#975FE4" opacity={1}/>
                            </Chart>
                        </ChartCard>
                    </Col>
                </Row>
                <Row className="mb16">
                    <Col span={24}>
                        <Card title="访问量" className="visit_card">
                            <Row gutter={32}>
                                <Col span={16}>
                                    <h4 className="charts_tit">销售趋势</h4>
                                    <Chart height={270} forceFit={true} data={data} scale={cols} padding="auto">
                                        <Axis name="genre"/>
                                        <Axis name="sold"/>
                                        <Tooltip />
                                        <Geom type="interval" position="genre*sold" />
                                    </Chart>
                                </Col>
                                <Col span={8}>
                                    <h4 className="charts_tit">门店销售排名</h4>
                                    <div className="ranking_list">
                                        {rankingList}
                                    </div>
                                </Col>
                            </Row>
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
