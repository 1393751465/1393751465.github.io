module.exports = {
    base: "/freezeFish/",
    lang: "zh-CN",
    title: "前端",
    description: "前端",
    theme: "@qcyblm/vpx",
    themeConfig: {
        search: false,
        nav: [
            { text: "Home", link: "./", icon: "fa fa-home" },
        ],
        sidebar: [
            {
                title: "test",
                collapsable: false, // 不折叠
                children: [
                    {
                        title: "test",
                        path: "./test",
                    },
                ],
            },
            
        ],
    },
};
