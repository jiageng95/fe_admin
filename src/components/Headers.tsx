import React from 'react';
import { Layout, Icon } from 'antd';
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
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle} />
            </Header>
        )
    }
}
export default Headers;