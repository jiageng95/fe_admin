import React from 'react';
import Headers from '../components/Headers';
import Siders from '../components/Siders';
import { Layout } from 'antd';
import '../assets/css/reset.less';
import '../assets/css/common.less';
import '../assets/css/layouts/index.less';

const { Content } = Layout;

class BasicLayout extends React.Component<any> {
  state = {
    collapsed: false
  }

  toggle = (collapsed: boolean) => {
    this.setState({
      collapsed
    })
  }

  render() {
    return (
      <Layout>
        <Siders collapsed={this.state.collapsed} />
        <Layout>
          <Headers collapsed={this.state.collapsed} changeCollapsed={this.toggle} />
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default BasicLayout;
