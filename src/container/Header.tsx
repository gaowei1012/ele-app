import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

const QtHeader = () => {
  return (
    <Header className="header" style={{ padding: 0, height: 54 }}>
      <div className="left" />
      <div className="right" style={{ marginRight: 20 }}>
        右侧
      </div>
    </Header>
  )
}

export default QtHeader
