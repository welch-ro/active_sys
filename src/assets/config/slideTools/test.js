/**
 * Created by roluo on 2018/11/29.
 */

let test = {
    layoutList: [
        {
            'name': '一行一列',
            'classify': 'layout',
            'isShow': '0',
            'type': 'oneLayout',
            'layout': '1',
            'components': [],
            // 可以使用的组件， 也就是componentList里的组件可以在这种布局里面使用， 通过type去认证
            'componentControl': ['image', 'text', 'hotImage']
        },
        {
            'name': '一行两列',
            'layout': '2',
            'classify': 'layout',
            'isShow': '1',
            'type': 'twoLayout',
            'components': [],
            // 可以使用的组件， 也就是componentList里的组件可以用到这种布局里面， 通过type去认证
            'componentControl': ['image', 'text']
        },
        {
            'name': '一行三列',
            'layout': '3',
            'classify': 'layout',
            'isShow': '1',
            'type': 'threeLayout',
            'components': [],
            // 可以使用的组件， 也就是componentList里的组件可以用到这种布局里面， 通过type去认证
            'componentControl': ['image', 'text']
        }
    ],
    componentList: [
        {
            'componentName': 'image',
            'show': 1,
            'type': 'image',
            'componentCNName': '图片',
            'categoryId': '1',
            'categoryDesc': '图文类',
            'classify': 'component',
            'id': 0,
            'config': {
                'imgSrc': '',
                'link': ''
            }
        },
        {
            'componentName': 'text',
            'show': 1,
            'type': 'text',
            'componentCNName': '文本',
            'categoryId': '1',
            'categoryDesc': '图文类',
            'classify': 'component',
            'id': 2,
            'config': {
                'text': ''
            }
        },
        {
            'componentName': 'hotImage',
            'show': 1,
            'type': 'hotImage',
            'componentCNName': '热区',
            'categoryId': '1',
            'categoryDesc': '图文类',
            'classify': 'component',
            'id': 3,
            'config': {
                'imgSrc': '',
                'hotData': []
            }
        }
    ]
};

export default test;
