import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

import Header from './Header';
import SideBar from './SideBar';

const { Content, Footer } = Layout;

interface Props {
    component: any;
    routeProps: RouteComponentProps;
}

const BasePage = (props: Props) => {

    return (
        <>
            <Header />
            <Layout style={{ minHeight: '95vh' }}>
                <SideBar />
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Painel</Breadcrumb.Item>
                            <Breadcrumb.Item>Solicitação</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {React.createElement(props.component, props.routeProps)}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>QuickOps ©2020 Created by Gilmar Alcantara</Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default BasePage;