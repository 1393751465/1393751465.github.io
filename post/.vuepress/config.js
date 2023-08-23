module.exports = {
    lang: "zh-CN",
    title: "前端的设计模式系列",
    description: "前端的设计模式系列 by windliang",
    theme: "@qcyblm/vpx",
    themeConfig: {
        search: false,
        nav: [
            { text: "Home", link: "/", icon: "fa fa-home" },
            {
                text: "极客时间/掘金优惠",
                link: "https://coursesub.top/",
            },
            { text: "leetcode详细题解", link: "https://leetcode.wang" },
            { text: "Vue2源码详解", link: "https://vue.windliang.wang/" },
            { text: "windliang博客", link: "https://windliang.wang" },
        ],
        sidebar: [
            {
                title: "创建型",
                collapsable: false, // 不折叠
                children: [
                    {
                        title: "单例模式",
                        path: "/test",
                    },
                    {
                        title: "建造者模式",
                        path: "/test",
                    },
                ],
            },
            
        ],
    },
};
