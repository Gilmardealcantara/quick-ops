import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  LeftOutlined,
} from '@ant-design/icons';

import history from '../../../routes/history';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout.Sider
      style={{ backgroundColor: '#053d4e' }}
      collapsible
      collapsed={collapsed}
      trigger={null}
    >
      <Menu
        theme='dark'
        defaultSelectedKeys={['1']}
        mode='inline'
        style={{ backgroundColor: '#053d4e' }}
      >
        <Menu.Item
          style={{ backgroundColor: '#053d4e' }}
          icon={<LeftOutlined key='1' />}
          onClick={() => setCollapsed(!collapsed)}
        >
          Close
        </Menu.Item>

        <Menu.Item
          style={{ backgroundColor: '#053d4e' }}
          icon={<DesktopOutlined key='2' />}
          onClick={() => history.push('/')}
        >
          Home
        </Menu.Item>

        <Menu.Item
          style={{ backgroundColor: '#053d4e' }}
          icon={<PieChartOutlined key='3' />}
          onClick={() => history.push('/requests')}
        >
          Solicitações
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default SideBar;
