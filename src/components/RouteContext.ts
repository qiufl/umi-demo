import { createContext } from 'react';
import { BreadcrumbProps } from 'antd/es/breadcrumb';


type BreadcrumbListReturn = Pick<BreadcrumbProps, Extract<keyof BreadcrumbProps, 'routes' | 'itemRender'>>;
export interface MenuDataItem {
  authority?: string[] | string;
  children?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: React.ReactNode;
  locale?: string | false;
  name?: string;
  key?: string;
  path?: string;
  [key: string]: any;
  parentKeys?: string[];
}

export interface RouteContextType {
  breadcrumb?: BreadcrumbListReturn;
  menuData?: MenuDataItem[];
  isMobile?: boolean;
  prefixCls?: string;
  collapsed?: boolean;
  hasSiderMenu?: boolean;
  hasHeader?: boolean;
  siderWidth?: number;
  isChildrenLayout?: boolean;
  hasFooterToolbar?: boolean;
  hasFooter?: boolean;
  setHasFooterToolbar?: React.Dispatch<React.SetStateAction<boolean>>;
  pageTitleInfo?: {
    title: string;
    id: string;
    pageName: string;
  };
}

const routeContext: React.Context<any> = createContext({});

export default routeContext;