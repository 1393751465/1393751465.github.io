module.exports = {
    base: "/freezeFish/",
    lang: "zh-CN",
    title: "小可爱的找工作日记",
    description: "小可爱的找工作日记",
    theme: "@qcyblm/vpx",
    themeConfig: {
        search: false,
        nav: [
            { text: "Home", link: "/", icon: "fa fa-home" },
        ],
        sidebar: [
            {
                title: "八股",
                collapsable: false, // 不折叠
                children: [
                    {
                        title: "八股1",
                        path: "/八股",
                    },
                ],
            },
            {
                title: "有趣的面试问题",
                collapsable: false, // 不折叠
                children: [
                    {
                        title: "js文件的加载顺序",
                        path: "/js文件加载",
                    },
                ],
            }
            
        ],
    },
};
