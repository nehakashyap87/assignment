import React, { useState } from 'react'
import { Layout } from 'antd';
const { Header} = Layout;
const SidebarHeader = () => {
  return (
    <>
      <Header
        style={{
          padding: 0,
          background: 'danger',
        }} >
        <p style={{ textAlign: 'center', fontSize: "20px", color: 'white' }}>Assignment Work Based on Admin</p>
      </Header>
      </>
  )
}

export default SidebarHeader