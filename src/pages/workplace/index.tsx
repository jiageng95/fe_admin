import React from 'react'
import { Statistic, Card, Row, Col } from 'antd'
import '../../assets/css/pages/workplace.less'

class Workplace extends React.Component {
    render () {
        let list = [
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                title: 'Alipay',
                content: '那是一种内在的东西，他们到达不了，也无法触及的',
                name: '科学搬砖组',
                date: '18分钟前'
            },
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
                title: 'Angular',
                content: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
                name: '全组都是吴彦祖',
                date: '2年前'
            },
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                title: 'Ant Design',
                content: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
                name: '中二少年团',
                date: '17分钟前'
            },
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
                title: 'Ant Design Pro',
                content: '那时候我只会想自己想要什么，从不想自己拥有什么',
                name: '程序员日常',
                date: '2个月前'
            },
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
                title: 'Bootstrap',
                content: '凛冬将至',
                name: '高逼格设计天团',
                date: '50分钟前'
            },
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
                title: 'React',
                content: '生命就像一盒巧克力，结果往往出人意料',
                name: '骗你来学计算机',
                date: '14分钟前'
            }
        ]
        let cardList = list.map((item, index) => (
            <Card.Grid key={index}>
                <div className="card_header">
                    <img className="card_avatar" src={item.avatar} />
                    <span className="card_title">{item.title}</span>
                </div>
                <div className="card_con">{item.content}</div>
                <div className="card_footer">
                    <span className="card_name">{item.name}</span>
                    <span className="card_date">{item.date}</span>
                </div>
            </Card.Grid>
        ))
        return (
            <div className="workplace">
                <div className="header">
                    <div className="header_title">工作台</div>
                    <div className="header_con">
                        <div className="header_l">
                            <img className="avatar" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                        </div>
                        <div className="header_m">
                            <p className="header_m_t">早安，Chris小布，祝你健康富有开心每一天！</p>
                            <p className="header_m_b">史上最强全栈大佬 - 全球CEO</p>
                        </div>
                        <div className="header_r">
                            <div className="header_r_item">
                                <span className="item_tit">项目数</span>
                                <span className="item_txt">56</span>
                            </div>
                            <div className="header_r_item">
                                <span className="item_tit">团队内排名</span>
                                <span className="item_txt">8<span className="suffix">/ 24</span></span>
                            </div>
                            <div className="header_r_item">
                                <Statistic title="项目访问" value={2223} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Row type="flex" justify="space-between" gutter={16}>
                        <Col span={16}>
                            <Card title="进行中的项目" className="card" extra={<a href="#">全部项目</a>}>
                                {cardList}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="快速开始/便捷导航" className="quick_card">
                                <a href="javascript:;" className="card_btn">操作一</a>
                                <a href="javascript:;" className="card_btn">操作二</a>
                                <a href="javascript:;" className="card_btn">操作三</a>
                                <a href="javascript:;" className="card_btn">操作四</a>
                                <a href="javascript:;" className="card_btn">操作五</a>
                                <a href="javascript:;" className="card_btn">操作六</a>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Workplace
