const url = 'https://blog.saintic.com'
const title = '陶先森de博客'
const description = '记录点滴，开源项目分享，撰写经验与技术'

const friendLink = [
    {
        title: "WangMao's Blog",
        link: 'https://blog.wangmao.me/'
    },
    {
        title: 'OOIII',
        desc: 'Change or Die',
        link: 'https://ooiii.com/'
    },
    {
        title: '木法传',
        link: 'https://www.mofazhuan.com/'
    },
    {
        title: '薛定喵君',
        link: 'http://xuedingmiao.com/'
    }
]

const nav = [
    {
        text: '首页',
        link: '/',
        icon: 'reco-home'
    },
    {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date'
    },
    {
        text: '关于我',
        icon: 'reco-message',
        items: [
            {
                text: '关于/联系我',
                link: '/post/about',
                icon: 'reco-blog'
            },
            {
                text: '站点',
                items: [
                    {
                        text: '主站',
                        link: 'https://www.saintic.com',
                        icon: 'reco-home'
                    },
                    {
                        text: '文档',
                        link: 'https://docs.saintic.com',
                        icon: 'reco-document'
                    },
                    {
                        text: 'Gitee',
                        link: 'https://gitee.com/staugur',
                        icon: 'reco-mayun'
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/staugur',
                        icon: 'reco-github'
                    }
                ]
            },
            {
                text: '个人开源推荐',
                items: [
                    {
                        text: 'Flask-PluginKit',
                        link: 'https://github.com/staugur/Flask-PluginKit'
                    },
                    {
                        text: 'picbed',
                        link: 'https://github.com/staugur/picbed'
                    },
                    {
                        text: 'rtfd',
                        link: 'https://github.com/staugur/rtfd'
                    }
                ]
            }
        ]
    }
]

module.exports = {
    title,
    description,
    dest: 'dist',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.ico'
            }
        ],
        [
            'link',
            {
                rel: 'shortcut icon',
                href: '/favicon.ico'
            }
        ],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,user-scalable=no'
            }
        ],
        [
            'meta',
            {
                name: 'keywords',
                content: 'SaintIC,staugur,Linux,DevOps,python'
            }
        ]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    theme: 'reco',
    themeConfig: {
        nav,
        friendLink,
        type: 'blog',
        codeTheme: 'tomorrow',
        blogConfig: {
            category: {
                location: 2,
                text: '分类'
            },
            tag: {
                location: 3,
                text: '标签'
            }
        },
        subSidebar: 'auto',
        search: true,
        searchMaxSuggestions: 10,
        author: 'Hiroshi.tao',
        authorAvatar: '/avatar.png',
        // 备案
        record: '京ICP备14058611号',
        recordLink: 'http://www.beian.miit.gov.cn/',
        // 项目开始时间，只填写年份
        startYear: '2017'
    },
    markdown: {
        lineNumbers: true
    },
    plugins: {
        feed: {
            title,
            description,
            favicon: url + '/favicon.ico',
            canonical_base: url,
            author: {
                name: 'Hiroshi.tao',
                email: 'staugur@saintic.com',
                link: 'https://www.saintic.com'
            }
        }
    },
    configureWebpack: () => {
        let cdn = 'https://cdn.jsdelivr.net/gh/staugur/blog@gh-pages/'
        if (process.env.NODE_ENV === 'production') {
            return {
                output: {
                    publicPath: cdn
                }
            }
        }
    }
}
