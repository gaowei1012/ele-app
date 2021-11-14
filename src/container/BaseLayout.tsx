import { useState } from 'react'
import { Layout, Menu, Breadcrumb, Spin } from 'antd'
import { Route, Switch, withRouter, Link } from "react-router-dom"
import {
  PieChartOutlined
} from '@ant-design/icons'
import QtHeader from './Header'
import QtFooter from './Footer'
import menu from '../config/menu'
import routes from '../config/routes'

const { Content, Sider } = Layout;

const BaseLayout = (props: any) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" style={{ height: 55 }} />
        <Menu style={{ height: '100%' }} theme="dark" defaultSelectedKeys={['1']} mode='inline'>
          {menu.map((item: any, index: number) => (
            <Menu.Item key={index} icon={<PieChartOutlined />}>
              {console.log(item.path)}
              <Link to={item.path}>
                {item.title}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <QtHeader />
        <Spin spinning={false}>
          <Content style={{ margin: '0 10px' }}>
            <Breadcrumb style={{ margin: '10px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 10, minHeight: '100%', background: '#fff' }}>
              <Switch>
                {routes.map(item => {
                  console.log(item)
                  return <Route key={item.path} path={item.path} exact={item.exact} render={(props: any) => <item.component {...props}/>} />
                })}
              </Switch>
            </div>
          </Content>
        </Spin>
        <QtFooter />
      </Layout>
    </Layout>
  )
}
export default withRouter(BaseLayout)
