import React from 'react'
import router from 'umi/router'
import withRouter from 'umi/withRouter';
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout

// interface ISidersProps extends React.Props<any> {
//     collapsed: boolean
// }

class Siders extends React.Component<any> {
    constructor (props: any) {
        super(props);
    }
    state = {
        defaultKey: ''
    }
    goUrl = ({ key }: any) => {
        router.push(key)
    }
    componentWillMount () {
        this.setState({ defaultKey: this.props.location.pathname })
    }
    render () {
        let collapsed = this.props.collapsed
        let { defaultKey } = this.state
        return (
            <Sider trigger={null} width="256" collapsible={true} collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[defaultKey]} onClick={this.goUrl}>
                    <Menu.Item key="/workplace">
                        <Icon type="home" />
                        <span>工作台</span>
                    </Menu.Item>
                    <Menu.Item key="/monitor">
                        <Icon type="bar-chart" />
                        <span>监控台</span>
                    </Menu.Item>
                    <Menu.Item key="/analysis">
                        <Icon type="container" />
                        <span>分析台</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
export default withRouter(Siders);
