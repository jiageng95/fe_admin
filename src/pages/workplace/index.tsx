import React from 'react'
import { Statistic, Card, Row, Col } from 'antd'
import '../../assets/css/pages/workplace.less'

class Workplace extends React.Component {
    state = {
        loading: true
    }
    timer: any = null
    componentWillMount () {
        this.timer = setTimeout(() => {
            this.setState({ loading: false })
        }, 1500)
    }
    componentWillUnmount () {
        clearTimeout(this.timer)
    }
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
        let list2 = [
            {
                avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                title: '高逼格设计天团',
                content: '六月迭代',
                name: '大哥哥',
                date: '18分钟前',
                type: 1
            },
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
                title: '高逼格设计天团',
                content: '六月迭代',
                name: '大姐姐',
                date: '2年前',
                type: 1
            },
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
                title: '程序员日常',
                content: '六月迭代',
                name: '小哥哥',
                date: '17分钟前',
                type: 1
            },
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
                title: '中二少女团',
                content: '留言',
                name: '小姐姐',
                date: '2个月前',
                type: 2
            },
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
                title: '程序员日常',
                content: '品牌迭代',
                name: '小弟弟',
                date: '50分钟前',
                type: 1
            },
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
                title: '中二少女团',
                content: '品牌迭代',
                name: '小妹妹',
                date: '14分钟前',
                type: 1
            }
        ]
        let teamlist = [
            {
                name: '中二少年团',
                avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
            },
            {
                name: '中二少女团',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png'
            },
            {
                name: '偶像天团',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png'
            },
            {
                name: '傻不拉几团',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png'
            },
            {
                name: '原地爆炸团',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png'
            },
            {
                name: '斗破苍穹团',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png'
            }
        ]
        let loading = this.state.loading
        let productList = list.map((item, index) => (
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
        let dynamicList = list2.map((item, index) => (
            <div className="card_con" key={index}>
                <div className="card_con_l">
                    <img className="avatar" src={item.avatar} />
                </div>
                <div className="card_con_r">
                    <p className="tit">{item.name} 在 <span>{item.title}</span> {item.type === 1 ? '新建项目' : '发布'} <span>{item.content}</span></p>
                    <p className="date">{item.date}</p>
                </div>
            </div>
        ))
        let teamList = teamlist.map((item, index) => (
            <Col span={12} key={index}>
                <div className="team_item">
                    <img className="avatar" src={item.avatar} />
                    <span className="title">{item.name}</span>
                </div>
            </Col>
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
                            <p className="header_m_t">早安，Chris，祝你健康富有开心每一天！</p>
                            <p className="header_m_b">这个人很懒, 什么都没写~</p>
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
                            <Card title="进行中的项目" className="product_card mb16" extra={<a href="#">全部项目</a>} loading={loading}>
                                {productList}
                            </Card>
                            <Card title="动态" className="dynamic_card" extra={<a href="#">全部动态</a>} loading={loading}>
                                {dynamicList}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="快速开始/便捷导航" className="quick_card mb16" loading={loading}>
                                <a href="javascript:;" className="card_btn">操作一</a>
                                <a href="javascript:;" className="card_btn">操作二</a>
                                <a href="javascript:;" className="card_btn">操作三</a>
                                <a href="javascript:;" className="card_btn">操作四</a>
                                <a href="javascript:;" className="card_btn">操作五</a>
                                <a href="javascript:;" className="card_btn">操作六</a>
                            </Card>
                            <Card title="团队" className="team_card" loading={loading}>
                                <Row gutter={48}>
                                    {teamList}
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Workplace
