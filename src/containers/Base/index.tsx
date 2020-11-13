import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// import Header from './Header';
// import SideBar from './SideBar';

interface Props {
    component: any;
    routeProps: RouteComponentProps;
}


const BasePage = (props: Props) => {

    return (
        <div className={''}>
            <div>header</div>
            <div>sidebar</div>
            {/* <Header
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                drawerWidth={drawerWidth}
            />
            <SideBar
                open={open}
                handleDrawerClose={handleDrawerClose}
                drawerWidth={drawerWidth}
                user={user}
            /> */}
            <main className={''}>
                <div className={''} />
                <div>{React.createElement(props.component, props.routeProps)}</div>
            </main>
        </div>
    );
};

export default BasePage;
