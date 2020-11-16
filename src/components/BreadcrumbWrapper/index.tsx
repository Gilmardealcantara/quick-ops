/* eslint-disable no-debugger */
import React from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumb } from 'antd';
import { ApplicationState } from '../../store';
import { RouterState } from 'connected-react-router';



const BreadcrumbWrapper = () => {
    const router = useSelector<ApplicationState, RouterState<unknown>>(state => state.router)
    return (
        <Breadcrumb style={{ padding: '10px 0px 10px 40px', backgroundColor: "#f0f3f7", color: "#51c1c3" }} >
            {router.location.pathname === "/requests" ? (
                <>
                    <Breadcrumb.Item>Painel</Breadcrumb.Item>
                    <Breadcrumb.Item>Solicitação</Breadcrumb.Item>
                </>
            ) : (
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                )}
        </Breadcrumb>
    );
};

export default BreadcrumbWrapper;
