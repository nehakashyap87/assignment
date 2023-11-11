import React, { useState } from 'react'
import { Layout, theme } from 'antd';
const { Content } = Layout;

const ContentBar = (props) => {
  console.log("Content",props.user);
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      if (props.dashboard) {
        return (
          <> 
          <Content
          style={{
            textAlign:'center',
            margin: '24px 16px',
            padding: 24,
            minHeight: 695,
            background: colorBgContainer,
          }}
        >
        <strong> {props.dashboard}</strong>
        </Content>
        </>
        )
      }
      else if(props.user) {
        console.log(props.user);
        return (
          <> 
          <Content
          style={{
            textAlign:'center',
            margin: '24px 16px',
            padding: 24,
            minHeight: 695,
            background: colorBgContainer,
          }}
        >
        <strong> {props.user}</strong>
        </Content>
        </>
        )
}
      else if(props.admin) {
        console.log(props.admin);
        return (
          <> 
          <Content
          style={{
            textAlign:'center',
            margin: '24px 16px',
            padding: 24,
            minHeight: 695,
            background: colorBgContainer,
          }}
        >
        <strong> {props.admin}</strong>
        </Content>
        </>
        )
}
}
export default ContentBar