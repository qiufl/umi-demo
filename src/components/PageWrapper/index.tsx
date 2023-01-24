import * as React from 'react';
import classNames from 'classnames';
import './index.less';
import BorderLayout from '../BorderContainer';
import Sidebar from '../Sidebar';
import Header from '../Header';
import RouteContext from '../RouteContext';

export interface PageWrapperProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
export default function PageWrapper(props: PageWrapperProps) {
  const { className, style, children } = props;
  const classString = classNames('layout', className); 
  return (
    <div className={classString} style={style}>{children}</div>
  );
}