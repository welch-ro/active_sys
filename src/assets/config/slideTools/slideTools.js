export default {
    // 布局
    layout: [
        {
            id: 1,
            classify: 'layout',
            isShow: '0',
            type: 'oneLayout',
            name: '一行一列',
            component: [],
            contains: ['image', 'text', 'coupon', 'product', 'swipeProduct', 'hot', 'video', 'swipe', 'navigation', 'skill', 'screen', 'countDown', 'ext_product']
        },
        {
            id: 2,
            classify: 'layout',
            isShow: '1',
            type: 'twoLayout',
            name: '一行两列',
            component: [],
            contains: ['image', 'text', 'coupon']
        },
        {
            id: 3,
            classify: 'layout',
            isShow: '1',
            type: 'threeLayout',
            name: '一行三列',
            component: [],
            contains: ['image', 'text', 'coupon']
        },
        {
            id: 4,
            classify: 'layout',
            isShow: '1',
            type: 'fourLayout',
            name: '一行四列',
            component: [],
            contains: ['image', 'coupon']
        },
        {
            id: 5,
            classify: 'layout',
            isShow: '1',
            type: 'tabLayout',
            name: 'tab布局',
            config: {
                tabList: [{
                    title: '10:00',
                    subTitle: '抢购中',
                    time: [],
                    component: []
                },
                {
                    title: '11:00',
                    subTitle: '即将开抢',
                    time: [],
                    component: []
                },
                {
                    title: '12:00',
                    subTitle: '已结束',
                    time: [],
                    component: []
                }
                ],
                time: '',
                showLogic: 'normal',
                colorData: {
                    color: '#b4b4b4',
                    topColor: '#60872a',
                    selectedColor: '#60872a',
                    backgroundColor: '#ffffff'
                },
                showNum: 3,
                contains: ['image', 'skill', 'product', 'swipeProduct', 'ext_product']
            }
        }
    ],
    // 组件
    component: [{
        id: 1,
        classify: 'component',
        type: 'image',
        name: '图片',
        categoryId: '1',
        categoryDesc: '图文类',
        config: {
            time: '',
            showLogic: 'normal',
            imgUrl: '',
            height: 0,
            width: 0,
            link: '',
            plateId: ''
        }
    },
    {
        id: 2,
        classify: 'component',
        type: 'text',
        name: '文本',
        categoryId: '2',
        categoryDesc: '图文类',
        config: {
            time: '',
            showLogic: 'normal',
            content: '文本内容',
            bgColor: '#ffffff',
            lineHeight: '1.5',
            textIndent: 0,
            padding: '0px 0px',
            plateId: ''
        }
    },
    {
        id: 3,
        classify: 'component',
        type: 'coupon',
        name: '优惠券',
        categoryId: '3',
        categoryDesc: '运营互动类',
        config: {
            time: '',
            showLogic: 'normal',
            imgUrl: '',
            height: 0,
            width: 0,
            plateId: '',
            key: '',
            backImgUrl: '',
            isShow: false,
            isNew: true,
            couponArray: [{
                key: '',
                info: ''
            }]
        }
    },
    {
        id: 4,
        classify: 'component',
        type: 'product',
        name: '商品',
        categoryId: '4',
        categoryDesc: '商品类',
        config: {
            time: '',
            showLogic: 'normal',
            priceColor: '#3b9bff',
            superscriptColor: '#3b9bff',
            cols: 1,
            plateId: '',
            hideMonPay: false,
            selectStyle: 1
        }
    },
    {
        id: 4,
        classify: 'component',
        type: 'ext_product',
        name: '商品',
        categoryId: '4',
        categoryDesc: '商品类',
        config: {
            cols: 1,
            plateId: '',
            styleType: 'oneColumn1',
            time: '',
            showLogic: 'normal',
            styleTypeConfig: {
                'oneColumn1': {
                    priceColor: '#3b9bff',
                    buttonColor: '#3b9bff',
                    monPayColor: '#3b9bff',
                    bgColor: '#ebf5ff',
                    hideMonPay: true,
                    textSuperList: []
                },
                'oneColumn2': {
                    priceColor: '#3b9bff',
                    textSuperList: []
                },
                'twoColumn1': {
                    priceColor: '#3b9bff',
                    buttonColor: '#3b9bff',
                    monPayColor: '#3b9bff',
                    bgColor: '#ebf5ff',
                    hideMonPay: true,
                    textSuperList: []
                },
                'twoColumn2': {
                    priceColor: '#3b9bff',
                    textSuperList: []
                },
                'threeColumn1': {
                    priceColor: '#000000',
                    buttonColor: '#3b9bff',
                    monPayColor: '#3b9bff',
                    bgColor: '#ebf5ff',
                    hideMonPay: true,
                    textSuperList: []
                },
                'threeColumn2': {
                    priceColor: '#3b9bff',
                    textSuperList: []
                }
            }
        }
    },
    {
        id: 5,
        classify: 'component',
        type: 'swipeProduct',
        name: '多列商品',
        categoryId: '5',
        categoryDesc: '商品类',
        config: {
            time: '',
            showLogic: 'normal',
            priceColor: '#3b9bff',
            superscriptColor: '#3b9bff',
            bgColor: '#ebf5ff',
            plateId: '',
            hideMonPay: false,
            selectStyle: 1
        }
    },
    {
        id: 7,
        classify: 'component',
        type: 'navigation',
        name: '导航',
        categoryId: '7',
        categoryDesc: '其它',
        config: {
            navList: [{
                name: '楼层1',
                imgUrl: '',
                selectedImgUrl: '',
                link: '',
                href: ''
            },
            {
                name: '楼层2',
                imgUrl: '',
                selectedImgUrl: '',
                link: '',
                href: ''
            }
            ],
            colorConfig: {
                basic: {
                    color: '#878a90',
                    backgroundColor: '#ffffff'
                },
                active: {
                    color: '#ffffff',
                    backgroundColor: '#3b9bff'
                },
                arrow: {
                    color: '#878a90',
                    backgroundColor: '#ffffff',
                    separatorColor: '#ededed'
                }
            },
            plateId: '',
            type: 'text'
        }
    },
    {
        id: 9,
        classify: 'component',
        type: 'hot',
        name: '热区',
        categoryId: '9',
        categoryDesc: '图文类',
        config: {
            time: '',
            showLogic: 'normal',
            height: 0,
            width: 0,
            imgUrl: '',
            useMap: '',
            hotData: [],
            plateId: ''
        }
    },
    {
        id: 10,
        classify: 'component',
        type: 'video',
        name: '视频',
        categoryId: '10',
        categoryDesc: '图文类',
        config: {
            time: '',
            showLogic: 'normal',
            src: '',
            background: '#000',
            height: 200,
            plateId: ''
        }
    },
    {
        id: 11,
        classify: 'component',
        type: 'swipe',
        name: '轮播',
        categoryId: '11',
        categoryDesc: '图文类',
        config: {
            time: '',
            showLogic: 'normal',
            swipeList: [{
                imgUrl: '',
                link: '',
                height: 0,
                width: 0
            },
            {
                imgUrl: '',
                link: '',
                height: 0,
                width: 0
            }
            ],
            showNum: 1,
            isShowDot: 'false',
            plateId: ''
        }
    },
    {
        id: 12,
        classify: 'component',
        type: 'skill',
        name: '秒杀',
        categoryId: '12',
        categoryDesc: '商品类',
        config: {
            time: '',
            showLogic: 'normal',
            topColor: '#3b9bff',
            buttonColor: '#3b9bff',
            bgColor: '#ebf5ff',
            cols: 1,
            plateId: ''
        }
    },
    {
        id: 15,
        classify: 'component',
        type: 'floating',
        name: 'floating',
        categoryId: '15',
        categoryDesc: '图文类',
        isShow: '0',
        config: {
            imgUrl: '',
            link: '',
            width: '160',
            height: '160'
        }
    },
    {
        id: 16,
        classify: 'component',
        type: 'fix_nav',
        name: '固定导航',
        categoryId: '16',
        categoryDesc: '其它',
        list: [{
            name: '楼层1',
            link: '',
            href: '',
            imgUrl: '',
            selectedImgUrl: ''
        },
        {
            name: '楼层2',
            link: '',
            href: '',
            imgUrl: '',
            selectedImgUrl: ''
        },
        {
            name: '楼层3',
            link: '',
            href: '',
            imgUrl: '',
            selectedImgUrl: ''
        }
        ],
        config: {
            basic: {
                color: '#878a90',
                backgroundColor: '#ffffff'
            },
            active: {
                color: '#ffffff',
                backgroundColor: '#3b9bff'
            },
            arrow: {
                color: '#878a90',
                backgroundColor: '#ffffff',
                separatorColor: '#ededed'
            },
            image: {
                backgroundColor: '#ffffff',
                selectedBackgroundColor: '#3b9bff'
            },
            type: 'text'
        }
    },
    {
        id: 13,
        classify: 'component',
        type: 'recommend',
        name: '推荐商品',
        categoryId: '17',
        categoryDesc: '商品类',
        config: {
            time: '',
            showLogic: 'normal',
            priceColor: '#3b9bff',
            cols: 1,
            plateId: '',
            titleColor: '#3b9bff',
            productNum: 20,
            serviceTypeList: []
        }
    },
    {
        id: 14,
        classify: 'component',
        type: 'swipe_3d',
        name: '3D轮播',
        categoryId: '18',
        categoryDesc: '图文类',
        config: {
            time: '',
            showLogic: 'normal',
            swipeList: [
                {
                    imgUrl: '',
                    link: '',
                    height: 0,
                    width: 0
                },
                {
                    imgUrl: '',
                    link: '',
                    height: 0,
                    width: 0
                },
                {
                    imgUrl: '',
                    link: '',
                    height: 0,
                    width: 0
                }
            ],
            imgBoxHeight: 290,
            basicBackground: '#cccccc',
            activeBackground: '#000000',
            plateId: '',
            isShowDot: 'true',
            direction: 'left'
        }
    },
    {
        id: 17,
        classify: 'component',
        type: 'screen',
        name: '筛选',
        categoryId: '17',
        categoryDesc: '商品类',
        config: {}
    }
    ],
    // 全局属性
    global: {
        // 背景颜色
        backgroundColor: '#ffffff',
        // 新旧活动标记
        isNew: true,
        // 导航数据
        navData: {
            type: '0',
            list: [{
                name: '楼层1',
                link: '',
                href: '',
                imgUrl: '',
                selectedImgUrl: ''
            },
            {
                name: '楼层2',
                link: '',
                href: '',
                imgUrl: '',
                selectedImgUrl: ''
            },
            {
                name: '楼层3',
                link: '',
                href: '',
                imgUrl: '',
                selectedImgUrl: ''
            }
            ],
            config: {
                basic: {
                    color: '#878a90',
                    backgroundColor: '#ffffff'
                },
                active: {
                    color: '#ffffff',
                    backgroundColor: '#3b9bff'
                },
                arrow: {
                    color: '#878a90',
                    backgroundColor: '#ffffff',
                    separatorColor: '#ededed'
                },
                cid: 'cid_1523608183132',
                type: 'text'
            }
        },
        countTimeData: {
            config: {
                startTime: '2017-10-09 00:00:00',
                endTime: '2019-10-09 00:00:00'
            }
        },
        floatingData: {
            isShow: '0',
            config: {
                imgUrl: '',
                link: '',
                width: '160',
                height: '160',
                cid: 'cid_1523608178598'
            }
        }
    },
    screenData: {
        type: 'screen',
        name: '筛选',
        isShow: '1',
        config: {
            topNavList: [
                {
                    name: '折扣',
                    showRankBtn: 1
                },
                {
                    name: '价格',
                    showRankBtn: 1
                },
                {
                    name: '分类',
                    showRankBtn: 0
                }
            ],
            cols: 1,
            plateId: '',
            topColor: '#FC263E'
        }
    }
};
