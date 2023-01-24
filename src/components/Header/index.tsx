import React, {  useState, useContext, createContext } from 'react';
import { Breadcrumb } from 'antd';
import classNames from 'classnames';
import BorderLayout from '../BorderContainer';
import './index.less';

export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Header(props: HeaderProps) {
  const { className, style } = props;
  const [collapsed, setCollapsed] = useState(false);

  const classString = classNames('header', className); 
  return (
    <BorderLayout
      className={classString}
      style={style}
      main={
        <div className="header-main">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      }
      right={
        <div className="header-right">xxx</div>
      }
    />
  );
}