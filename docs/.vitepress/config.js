import mdItCustomAttrs from 'markdown-it-custom-attrs'
export default {
    title: 'Java成长之路',
    description: '只要学不死，就往死里学！',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
    ],
    markdown:{
        config: (md) => {
            md.use(mdItCustomAttrs, 'image', {
                'data-fancybox': 'gallery',
            })
        },
        codeCopyButtonTitle: '复制代码',
    },
    lastUpdated: true,
    ignoreDeadLinks: true,
    cleanUrls: false,
    themeConfig: {
        lastUpdatedText: "最近更新时间",
        siteTitle: 'combat',
        logo: '/images/logo-mini.svg',
        outlineTitle: '导航目录',
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档',
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        displayDetails: '显示详细列表',
                        footer: {
                            navigateText: '切换',
                            selectText: '选择',
                            closeText: '关闭',
                        },
                    },
                },
            },
        },
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        footer: {
            message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
        },

        /*侧边栏*/
        sidebar: {
            // 当用户位于 `guide` 目录时，会显示此侧边栏
           '/middleware/message/': [
                {text: 'Rocket', link: '/middleware/message/rocket'},
                {text: 'RabbitMQ', link: '/middleware/message/rabbit'},
                {text: 'Kafka', link: '/middleware/message/kafka'}
            ],
            '/middleware/database': [
                {
                    text: '数据库中间件',
                    items: [
                        {text: 'ShardingSphere', link: '/middleware/database/ShardingSphere'},
                        {text: 'Mycat', link: '/middleware/database/Mycat'},
                    ]
                }
            ],
            '/database/SQL':[
                {text: 'Mysql', link: '/database/SQL/mysql'},
                {text: 'PostgresSQL', link: '/database/SQL/PostgresSQL'},
                {text: 'SQLServer', link: '/database/SQL/SQLServer'},
                {text: 'Oracle', link: '/database/SQL/Oracle'},
            ],
            '/database/NoSQL':[
                {text: 'Redis', link: '/database/NoSQL/Redis'},
                {text: 'Elasticsearch', link: '/database/NoSQL/Elasticsearch'},
                {text: 'MongoDB', link: '/database/NoSQL/MongoDB'},
            ],

            '/program':[
                {text: '数据结构与算法', link: '/program/dataStructure'},
                {text: '设计模式', link: '/program/design', prev: '/program/dataStructure'},
                {text: '计算机网络', link: '/program/network'},
                {text: '操作系统', link: '/program/os'},
            ],
            'frontend/base':[
                {text: 'Html', link: '/frontend/base/html/index'},
                {text: 'Css', link: '/frontend/base/css/index'},
                {text: 'JavaScript', link: '/frontend/base/javascript/index'},
                {text: 'TypeScript', link: '/frontend/base/typescript/index'},
            ]
        },
        /*导航栏*/
        nav: [
            {text: '首页', link: '/'},
            {
                text: 'Java',
                items: [
                    {
                        text: '🥦 JavaSE',
                        items: [
                            {
                                text: '面向对象',
                                link: '/home',
                            },
                        ],
                    },
                    {text: 'JUC', link: '/404'},
                    {text: 'JVM', link: '/404'},
                    {text: 'Spring全家桶', link: '/404'},
                    {text: 'SpringCloud', link: '/404'},
                ]
            },
            {
                text: 'Web',
                items: [
                    {
                        text: '🎁 基础以及提升篇',
                        items: [
                            {text: 'Html', link: '/frontend/base/html/index'},
                            {text: 'Css', link: '/frontend/base/css/index'},
                            {text: 'JavaScript', link: '/frontend/base/javascript/index'},
                            {text: 'TypeScript', link: '/frontend/base/typescript/index'},
                        ],
                    },
                    {
                        text: '🥦 服务器端',
                        items: [
                            {text: 'Node', link: '/404'},
                            {text: 'Express', link: '/frontend/server/express/page'},
                            {text: 'Nest', link: '/404'},
                        ],
                    },
                    {
                        text: '🏠 三大主流框架',
                        items: [
                            {text: 'React', link: '/404'},
                            {text: 'Vue', link: '/404'},
                            {text: 'Angular', link: '/404'},
                        ],
                    },
                    {
                        text: '♥️ 跨平台开发',
                        items: [
                            {text: 'uni-app', link: '/404'},
                            {text: 'Taro', link: '/404'},
                        ],
                    },
                ]
            },
            {
                text: 'DevOps',
                items: [
                    {text: 'linux', link: '/404'},
                    {text: 'docker', link: '/404'},
                    {text: 'Jenkins', link: '/404'},
                    {text: 'k8s', link: '/404'},
                ]
            },
            {
                text: 'Python',
                items: [
                    {text: 'Python基础', link: '/404'},
                    {text: '面向对象', link: '/404'},
                    {text: '多进程多线程', link: '/404'},
                ]
            },
            {
                text: '计算机四大件',
                items: [
                    {text: '数据结构与算法', link: '/program/dataStructure'},
                    {text: '设计模式', link: '/program/design'},
                    {text: '计算机网络', link: '/program/network'},
                    {text: '操作系统', link: '/program/os'},
                ]
            },
            {
                text: '数据库',
                items: [
                    {
                        text: '🥦 关系型数据库',
                        items: [
                            {text: 'Mysql', link: '/database/SQL/mysql'},
                            {text: 'PostgresSQL', link: '/database/SQL/PostgresSQL'},
                            {text: 'SQLServer', link: '/database/SQL/SQLServer'},
                            {text: 'Oracle', link: '/database/SQL/Oracle'},
                        ],
                    },
                    {
                        text: '🏠 非关系型数据库',
                        items: [
                            {text: 'Redis', link: '/database/NoSQL/Redis'},
                            {text: 'Elasticsearch', link: '/database/NoSQL/Elasticsearch'},
                            {text: 'MongoDB', link: '/database/NoSQL/MongoDB'},
                        ],
                    },

                ]
            },
            {
                text: '中间件',
                items: [
                    {
                        text: '🥦 消息中间件',
                        items: [
                            {text: 'Rocket', link: '/middleware/message/rocket'},
                            {text: 'RabbitMQ', link: '/middleware/message/rabbit'},
                            {text: 'Kafka', link: '/middleware/message/kafka'},
                        ],
                    },
                    {
                        text: '🏠 数据库中间件',
                        items: [
                            {text: 'ShardingSphere', link: '/middleware/database/ShardingSphere'},
                            {text: 'Mycat', link: '/middleware/database/mycat'},
                        ],
                    },
                ]
            }
        ]
    }

}
