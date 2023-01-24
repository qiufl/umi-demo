import { defineConfig } from "umi";

export default defineConfig({
  plugins: [
    require.resolve("@umijs/plugins/dist/model"),
    require.resolve("@umijs/plugins/dist/request"),
    require.resolve("@umijs/plugins/dist/antd"),
  ],
  model: {},
  request: {},
  antd: {},
  routes: [
    { 
      exact: false, 
      path: '/', 
      component: '@/layouts/BaseLayout',
      routes: [
        { exact: true, path: '/index', component: '@/pages/index' },
        { exact: true, path: '/docs', component: '@/pages/docs' },
      ],
    },
  ],
  npmClient: 'yarn',
});
