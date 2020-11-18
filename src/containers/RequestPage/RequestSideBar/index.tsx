import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from 'src/store';
import { SideBarDataState } from 'src/store/modules/sidebarData/types';
import { HeaderDataState } from 'src/store/modules/headerData/types';
import { loadSideBarData } from 'src/store/modules/sidebarData/actions';

import CoinItem from './CoinItem';

import './style.css';

interface LocalState {
  header: HeaderDataState;
  sidebar: SideBarDataState;
}

const RequestSideBar = () => {
  const dispatch = useDispatch();
  const { header, sidebar } = useSelector<ApplicationState, LocalState>((state) => ({
    header: state.headerData,
    sidebar: state.sidebarData,
  }));

  useEffect(() => {
    dispatch(loadSideBarData());
  }, []);

  return (
    <div className='request-side-bar'>
      <div className='request-side-bar-status-card'>
        <span className='request-side-bar-status-card-title'> Status </span>
        <span className='request-side-bar-status-card-desc'> {header.data?.status} </span>
      </div>
      <div className='request-side-bar-coins'>
        {sidebar.data
          .filter((x) => x.declared !== 0)
          .map((item) => (
            <CoinItem key={item.currency.id} sidebarData={item} />
          ))}
      </div>
    </div>
  );
};

export default RequestSideBar;
