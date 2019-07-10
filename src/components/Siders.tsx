import React from 'react'
import router from 'umi/router'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout

interface ISidersProps extends React.Props<any> {
    collapsed: boolean
}

class Siders extends React.Component<ISidersProps, any> {
    goUrl = ({ key }: any) => {
        router.push(key)
    }
    render () {
        let collapsed = this.props.collapsed
        return (
            <Sider trigger={null} width="256" collapsible={true} collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['/workplace']} onClick={this.goUrl}>
                    <Menu.Item key="/workplace">
                        <Icon type="user" />
                        <span>工作台</span>
                    </Menu.Item>
                    <Menu.Item key="/monitor">
                        <Icon type="video-camera" />
                        <span>监控台</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
export default Siders
