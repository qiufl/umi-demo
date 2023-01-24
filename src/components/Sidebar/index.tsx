import React, {  useState, useContext, createContext } from 'react';
import { useNavigate, useLocation, } from "umi";
import { Table, Tabs, Menu, Button } from 'antd';
import classNames from 'classnames';
import BorderLayout from '../BorderContainer';
import { 
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import RouteContext from '../RouteContext';
import './index.less';

export interface SidebarProps {
  className?: string;
  style?: React.CSSProperties;
}
interface SidebarContextType {
  collapsed?: boolean;
}
const SidebarContext = createContext<SidebarContextType>({});
function renderLogo() {
  return (
    <div className="sidebar-logo">logo</div>
  );
}
function renderMenu() {
  return (
    <div>menu</div>
  );
}
function getItem(label: string, key: string, icon?: any, children?: any, type?: any) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const menuItems = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
const mapper = (item) => {
  return {
    icon: item.id % 2 == 0 ? <PieChartOutlined />: <DesktopOutlined />,
    key: `${item.path}`,
    label: <span>{item.name}</span>,
    title: <span>{item.name}</span>,
    path: item.path,
  }
}
export default function Sidebar(props: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const classString = classNames('sidebar', {
    ['sidebar-collapsed']: collapsed
  }); 
  const { menus } = useContext(RouteContext);
  console.log('==>menus=', menus);
  return (
    <SidebarContext.Provider value={{
      collapsed,
    }}>
      <BorderLayout
        className={classString}
        top={<div className="sidebar-logo" style={{backgroundColor: 'blue'}}>top</div>}
        bottom={
          <div className="sidebar-bottom">
            <div className="sidebar-bottom-coll" onClick={() => setCollapsed(!collapsed)}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</div>
          </div>
        }
        main={
          <Menu
            onClick={(e) => {
              navigate(e?.key);
            }}
            style={{ width: '100%' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={menus.map(mapper)}
          />
        }
      />
    </SidebarContext.Provider>
  );
}