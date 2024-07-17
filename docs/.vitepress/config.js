export default {
    title: 'Java成长之路',
    description: '只要学不死，就往死里学！',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
    ],
    themeConfig: {
        siteTitle: 'combat',
        logo: '/images/logo-mini.svg',
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
            '/introduction/': [
                {
                    text: 'introduction',
                    items: [
                        {text: 'Index', link: '/guide/'},
                        {text: 'One', link: '/guide/one'},
                        {text: 'Two', link: '/guide/two'}
                    ]
                }
            ],

            // 当用户位于 `config` 目录时，会显示此侧边栏
            '/config/': [
                {
                    text: 'Config',
                    items: [
                        {text: 'Index', link: '/config/'},
                        {text: 'Three', link: '/config/three'},
                        {text: 'Four', link: '/config/four'}
                    ]
                }
            ]
        },
        /*导航栏*/
        nav: [
            {text: '首页', link: '/'},
            {
                text: 'Java',
                items: [
                    {text: 'introduction', link: '/introduction'},

                ]
            },
            {
                text: 'Python',
                items: [
                    {text: 'Item A', link: '/item-1'},
                ]
            },
            {
                text: 'Web',
                items: [
                    {text: 'Item A', link: '/item-1'},
                ]
            },
            {
                text: 'DevOps',
                items: [
                    {text: 'Item A', link: '/item-1'},
                ]
            }
        ]
        /*尾部*/
    }

}
