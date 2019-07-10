import React from 'react';
import { Layout, Icon, Menu, Dropdown } from 'antd';
import '../assets/css/components/headers.less'
const { Header } = Layout;

interface IHeadersProps extends React.Props<any> {
    collapsed: boolean,
    changeCollapsed: (collapsed: boolean) => void
}

class Headers extends React.Component<IHeadersProps, any> {
    constructor (props: any) {
        super(props)
        this.state = {
            collapsed: true
        }
    }
    changeCollapsed = () => {
        this.props.changeCollapsed(this.state.collapsed)
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
        this.changeCollapsed()
    }
    render () {
        let collapsed = this.props.collapsed
        let menu = (
            <Menu className="drop_menu">
                <Menu.Item>
                    <Icon type="user" />
                    个人中心
                </Menu.Item>
                <Menu.Item>
                    <Icon type="setting" />
                    个人设置
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    <Icon type="logout" />
                    退出登录
                </Menu.Item>
            </Menu>
        );
        return (
            <Header className="headers">
                <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <div className="headers_r">
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <div className="user">
                            <img className="avatar" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                            <span className="username">Chris</span>
                        </div>
                    </Dropdown>
                </div>
            </Header>
        )
    }
}
export default Headers;
