declare namespace API {
    export interface CurrentUser {
        avatar?: string;
        name?: string;
        title?: string;
        group?: string;
        signature?: string;
        tags?: {
            key: string;
            label: string;
        }[];
        userid?: string;
        access?: 'user' | 'guest' | 'admin';
        unreadCount?: number;
    }

    export interface LoginStateType {
        status?: 'ok' | 'error';
        type?: string;
    }
    export interface Menu {
        id: number;
        path: string;
        component: string;
        icon?: string;
        children?: Menu[];
    }
}
