import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Layout } from 'antd';

import BreadcrumbWrapper from 'src/components/BreadcrumbWrapper';
import Header from './Header';
import SideBar from './SideBar';

const { Content, Footer } = Layout;

interface Props {
  component: any;
  routeProps: RouteComponentProps;
}

const BasePage = ({ component, routeProps }: Props) => (
  <>
    <Header />
    <Layout style={{ minHeight: '95vh' }}>
      <SideBar />
      <Layout
        className='site-layout'
        style={{
          backgroundColor: '#f4f6fa',
        }}
      >
        <Content>
          <BreadcrumbWrapper />
          <div className='site-layout-background' style={{ minHeight: 360 }}>
            {React.createElement(component, routeProps)}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>QuickOps ©2020 Created by Gilmar Alcantara</Footer>
      </Layout>
    </Layout>
  </>
);

export default BasePage;
