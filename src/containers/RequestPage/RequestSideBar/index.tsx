import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from 'src/store';
import { SideBarDataState } from 'src/store/modules/sidebarData/types';
import { HeaderDataState } from 'src/store/modules/headerData/types';
import { loadSideBarData } from 'src/store/modules/sidebarData/actions';
import { AppAction, AppStatusState } from 'src/store/modules/appStatus/types';

import CoinItem from './CoinItem';

import './style.css';

interface LocalState {
  header: HeaderDataState;
  sidebar: SideBarDataState;
  appStatus: AppStatusState;
}

const RequestSideBar = () => {
  const dispatch = useDispatch();
  const { header, sidebar, appStatus } = useSelector<ApplicationState, LocalState>((state) => ({
    header: state.headerData,
    sidebar: state.sidebarData,
    appStatus: state.appStatus,
  }));

  useEffect(() => {
    dispatch(loadSideBarData());
  }, [dispatch]);

  const appStatusIsRead = appStatus.status === AppAction.READ;
  return (
    <div className='request-side-bar'>
      <div className={`request-side-bar-status-card request-side-bar-status-card-${appStatus.status}`}>
        <span className='request-side-bar-status-card-title'> Status </span>
        <span className='request-side-bar-status-card-desc'>
          {appStatusIsRead ? header.data?.status : 'Em Preenchimento'}
        </span>
      </div>
      <div className='request-side-bar-coins'>
        {sidebar.data
          .filter((x) => x.declared !== 0 && appStatusIsRead)
          .map((item) => (
            <CoinItem key={item.currency.id} sidebarData={item} />
          ))}
      </div>
    </div>
  );
};

export default RequestSideBar;
