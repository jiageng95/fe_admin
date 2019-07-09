import React from 'react'
import { Statistic, Card, Tooltip, Icon } from 'antd'
import '../assets/css/components/chartCard.less'

interface IChartCardProps extends React.Props<any> {
    title: string,
    tip: string,
    value: number,
    size?: number,
    prefix?: string,
    suffix?: string,
    bottomTit: string,
    bottomValue: string
}
class ChartCard extends React.Component<IChartCardProps> {
    render () {
        const {
            title,
            tip,
            value,
            size = 28,
            prefix,
            suffix,
            children,
            bottomTit,
            bottomValue
        } = this.props
        return (
            <Card className="chart_card">
                <div className="card_title">
                    <span>{title}</span>
                    <div className="tip">
                        <Tooltip placement="top" title={tip}>
                            <Icon type="exclamation-circle" />
                        </Tooltip>
                    </div>
                </div>
                <div className="card_con">
                    <div className="con_num">
                        <Statistic prefix={prefix} suffix={suffix} value={value} valueStyle={{fontSize: size}}/>
                    </div>
                    <div className="con_m">
                        {children}
                    </div>
                    <div className="con_b">
                        {bottomTit}
                        <span>{bottomValue}</span>
                    </div>
                </div>
            </Card> 
        )
    }
}
export default ChartCard
