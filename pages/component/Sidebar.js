import React from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/navigation';
const {Sider} = Layout;
const Sidebar = (props) => {
  const router = useRouter()
  return (
      <Sider>
    <div className="demo-logo-vertical" />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      onClick={(e) => {
        if (e?.key === '1') {
          props.sidebarkey('1')
         }
         if (e.key === '2') {
          props.sidebarkey('2')
         }
         if (e?.key === '3') {
          props.sidebarkey('3')
         }
         if (e?.key === '4') {
          router.push('/thankyou')
         }
       }}
      items={[
        {
          key: '1',
          label: 'Dashboard',
        },
        {
          key: '2',
          icon: <UserOutlined />,
          label: 'Users',
        },
        {
          key: '3',
          icon: <VideoCameraOutlined />,
          label: 'Admin',
        },
        {
          key: '4',
          icon: <UploadOutlined />,
          label: 'Logout',
        },
      ]}
    />
  </Sider>
  )
}
export default Sidebar