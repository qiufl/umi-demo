import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useModel, Outlet } from "umi";
import { Spin } from "antd";
import BorderContainer from '@/components/BorderContainer';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import RouteContext from '@/components/RouteContext';
import useGlobalModel from '@/models/global';
import './index.less';

export interface BaseLayoutProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
export default function BaseLayout(props: BaseLayoutProps) {
  const { className, style, children } = props;
  const classString = classNames('base-layout', className); 
  const { currentUser, fetchCurrentUser, fetchCurrentUserLoading, menus, fetchMenu, fetchMenuLoading } = useModel('global.index');
  useEffect(() => fetchMenu(), [1]);
  useEffect(() => fetchCurrentUser(), [1])
  console.log('==>menus=', menus);
  return (
    <RouteContext.Provider
      value={{menus}}
    >
      <Spin spinning={fetchCurrentUserLoading || fetchMenuLoading}>
        <BorderContainer
          className={classString}
          style={style}
          left={<Sidebar/>}
          main={
            <BorderContainer
              design='headline'
              style={{width: '100%', height: '100%',}}
              top={<Header/>}
              main={<Outlet />}
            />
          }
        />
      </Spin>
    </RouteContext.Provider>
  );
}