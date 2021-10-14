import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        {
            path: '/',
            component: '@/layouts/DragEditorLayout/index',
            routes: [
                {
                    path: '/',
                    component: '@/pages/index',
                },
            ],
        },
    ],
    fastRefresh: {},
});
