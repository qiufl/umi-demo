import { request } from 'umi';

export function getMenus(): Promise<API.Menu[]> {
    return request('/api/menus');
}