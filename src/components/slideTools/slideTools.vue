<style scoped lang="less" src='./slideTools.less'></style>
<template>
    <div class="tools-wrap">
        <!-- 页面布局 -->
        <dt :title="openIndexList.includes('bj')?'点击关闭':'点击展开'" @click="dtOpen('bj')" :class="{'is-open': openIndexList.includes('bj')}">布局类</dt>
        <dd>
            <ul class="tools-layout" :class="{'content-open': openIndexList.includes('bj')}">
                <drag-gable v-model="layoutList" :options="{group:{name:'layout', pull:'clone', put:false}, sort:false}" :clone="onCloneLayout">
                    <li class="item" v-for="(item, index) in layoutList" :key="index" v-if="item.isShow == 1">
                        <div class="item-cont">
                            <div>
                                <i :class="'layout-item-ico' + index"></i>
                                <p>{{item.name}}</p>
                            </div>
                        </div>
                    </li>
                </drag-gable>
            </ul>
        </dd>

        <!-- 组件库 -->
        <template v-for="(item, index) in newComponentList" >
            <dt :title="openIndexList.includes(index)?'点击关闭':'点击展开'"
                :class="{'is-open': openIndexList.includes(index)}"
                :key="'component' + index"
                @click="dtOpen(index)">
                {{item.category_name}}
            </dt>
            <dd :key="'component_dd' + index">
                <ul class="tools-layout" :class="{'content-open':  openIndexList.includes(index)}">
                    <drag-gable v-model="item.category_item_list" :options="{group:{name:'component', pull:'clone', put:false}, sort:false}" :clone="onCloneComponent">
                        <li class="item component-hover-layout-hidden" v-for="(item, index) in item.category_item_list" :key="index">
                            <div class="item-cont">
                                <div>
                                    <i :class="'component-item-ico' + item.id"></i>
                                    <p>{{item.componentCNName}}</p>
                                </div>
                            </div>
                        </li>
                    </drag-gable>
                </ul>
            </dd>
        </template>

        <!--<h3 class="tools-item-title">布局</h3>-->
        <!--<ul class="tools-layout">-->
            <!--<drag-gable v-model="layoutList" :options="{group:{name:'layout', pull:'clone', put:false}, sort:false}" :clone="onCloneLayout">-->
                <!--<li class="item" v-for="(item, index) in layoutList" :key="index">-->
                    <!--<div class="item-cont">-->
                        <!--<div>-->
                            <!--<i :class="'layout-item-ico' + index"></i>-->
                            <!--<p>{{item.name}}</p>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</li>-->
            <!--</drag-gable>-->
        <!--</ul>-->

        <!--<h3 class="tools-item-title">组件</h3>-->
        <!--<ul class="tools-layout">-->
            <!--<drag-gable v-model="componentsList" :options="{group:{name:'component', pull:'clone', put:false}, sort:false}" :clone="onCloneComponent">-->
                <!--<li class="item component-hover-layout-hidden" v-for="(item, index) in componentsList" :key="index">-->
                    <!--<div class="item-cont">-->
                        <!--<div>-->
                            <!--<i :class="'component-item-ico' + item.id"></i>-->
                            <!--<p>{{item.componentName}}</p>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</li>-->
            <!--</drag-gable>-->
        <!--</ul>-->
    </div>
</template>
<script>
import dragGable from 'vuedraggable';

export default {
    data () {
        return {
            newComponentList: null,
            openIndexList: ['bj', 1]
        };
    },
    props: {
        layoutList: {
            'type': Array,
            'default': []
        },
        componentsList: {
            'type': Array,
            'default': []
        }
    },

    created () {
        this.newComponentList = this.categoryClass(this.componentsList, 'categoryDesc');
    },

    beforeMount () {
    },

    mounted () {
    },

    components: {
        dragGable
    },

    methods: {
        // 克隆布局
        onCloneLayout (original) {
            this.$set(original, 'layoutId', 'layoutId_' + new Date().getTime());
            return JSON.parse(JSON.stringify(original));
        },

        // 组件数据
        onCloneComponent (original) {
            this.$set(original, 'cId', 'cId_' + new Date().getTime());
            return JSON.parse(JSON.stringify(original));
        },

        /*
         * 将组件进行分类 拥有相同categoryName的对象会归成一类
         * param obj [Array]               所要分类的数组对象
         * param category_name ['string']   以哪个字段进行分页
         * return Array
         *
         * [{category_name : 'a', category_item_list:[{},{},{}]}, {category_name : 'b', category_item_list:[{},{},{}]}......]
         */
        categoryClass (obj, categoryName) {
            let categoryList = obj.map(e => e[categoryName]);
            let newCategoryList = [];
            // 获取总共的分类，并去重
            categoryList = [...new Set(categoryList)];

            // 将分类相同的组件归类成一个对象，合并类名输出
            categoryList.forEach(function (val) {
                let newItem = obj.filter(e => e[categoryName] === val);
                let categoryObj = {};

                categoryObj['category_name'] = val;
                categoryObj['category_item_list'] = newItem;
                newCategoryList.push(categoryObj);
            });

            return newCategoryList;
        },

        dtOpen (index) {
            // 如果已经存在index,说明此组件类已经展开，点击后就会去掉这个值，关闭组件，否则插入值
            if (this.openIndexList.includes(index)) {
                let indexIndex = this.openIndexList.indexOf(index);
                this.openIndexList.splice(indexIndex, 1);
            } else {
                this.openIndexList.push(index);
            }
        }
    }
};
</script>
