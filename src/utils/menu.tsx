import * as React from "react";
import { 
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

interface MenuItem {
    key: string,
    icon: React.ReactNode,
    children?: MenuItem[],
    label: string,
}
const menuHash: any = {
  "/": {
    label: "首页",
    icon: <PieChartOutlined />,
  },
  user: {
    label: "用户",
    icon: <UserOutlined />,
  },
};
const getItem = (path: string, children?: MenuItem[]) => {
  const route = menuHash[path];
  return {
    key: path.startsWith("/") ? path : `/${path}`,
    icon: route?.icon || <></>,
    children,
    label: route?.label || path,
  } as MenuItem;
};
const routesToMenu = (routes: any[]): MenuItem[] => {
  return routes
    .map((route) => {
      const { path, children } = route;
      if (children) {
        return getItem(path, routesToMenu(children));
      }
      return getItem(path);
    });
};
export {
  routesToMenu,
};