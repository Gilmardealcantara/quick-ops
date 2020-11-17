import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './Header';
import SideBar from './SideBar';
import BreadcrumbWrapper from '../../components/BreadcrumbWrapper';

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
                <Layout className="site-layout" style={{
                    backgroundColor: "#f4f6fa"
                }}>
                    <Content>
                        <BreadcrumbWrapper />
                        <div className="site-layout-background" style={{ minHeight: 360 }}>
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