import React, {useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    LeftOutlined
    // FileOutlined,
    // TeamOutlined,
    // UserOutlined,
} from '@ant-design/icons';
import { RouteComponentProps } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;

interface Props {
    component: any;
    routeProps: RouteComponentProps;
}



const BasePage = (props: Props) =>  {
    const [ collapsed, setCollapsed ] = useState( true );


        return (
            <>
                <Header className="site-layout-background" style={{ 
                        paddingTop: "10px" , 
                        paddingRight: "15px" , 
                        paddingBottom: "9px" , 
                        paddingLeft: "21px" , 
                        height: '48px', 
                        backgroundColor: "#053d4e" 
                    }}
                />
                <Layout style={{ minHeight: '95vh' }}>
                    <Sider 
                        style={{backgroundColor: "#053d4e"}}
                        collapsible 
                        collapsed={collapsed} 
                        // onCollapse={() => setCollapsed(!collapsed)}
                        trigger={null}
                    >
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{backgroundColor: "#053d4e"}}>
                            <Menu.Item style={{backgroundColor: "#053d4e"}} key="2" icon={<LeftOutlined />} onClick={() => setCollapsed(!collapsed)}> Close </Menu.Item>
                            <Menu.Item style={{backgroundColor: "#053d4e"}} key="2" icon={<DesktopOutlined />}> Home </Menu.Item>
                            <Menu.Item style={{backgroundColor: "#053d4e"}} key="1" icon={<PieChartOutlined />}> Dashboard </Menu.Item>
                        </Menu>
                    </Sider>

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