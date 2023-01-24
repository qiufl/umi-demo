import mockjs from "mockjs";

export default {
    'GET /api/menus': [
        {
            id: "1",
            name: "首页",
            path: "/index",
            component: "@/pages/index",
        },
        {
            id: "2",
            name: "文档",
            path: "/docs",
            component: "@/pages/docs",
        },
    ]
}