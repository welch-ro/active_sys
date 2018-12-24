/**
 * Created by roluo on 2018/11/29.
 */

let test = {
    layoutList: [
        {
            'name': '一行一列',
            'classify': 'layout',
            'isShow': '1',
            'type': 'oneLayout',
            'layout': '1',
            'components': []
        },
        {
            'name': '一行两列',
            'layout': '2',
            'classify': 'layout',
            'isShow': '1',
            'type': 'twoLayout',
            'components': []
        },
        {
            'name': '一行三列',
            'layout': '3',
            'classify': 'layout',
            'isShow': '1',
            'type': 'threeLayout',
            'components': []
        }
    ],
    componentList: [
        {
            'componentName': 'image',
            'classify': 'component',
            'id': 0,
            'config': {
                'imgSrc': ''
            }
        },
        {
            'componentName': 'text',
            'classify': 'component',
            'id': 1,
            'config': {
                'text': ''
            }
        }
    ]
};

export default test;
