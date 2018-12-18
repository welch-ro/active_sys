<style lang="less" src='./layout.less'></style>
<template>
    <div class="page-layout">
        <div class="layout-module" v-for="i in colNum" :key="i">
            <drag-gable v-model="list[i-1]" :options="{group:{name:'showLayout', put:controlLength(list[i-1]), pull:false}}" @add="addData">
                <div class="component-show" v-if="list[i-1].length > 0">
                    <show-component :componentName="list[i-1][0].componentName" :config="list[i-1][0].config" @showConfig="showConfig" :key="layoutItem.layoutId"></show-component>
                </div>
                <div class="component-empty-tips" v-else>
                    请拖组件进来
                </div>
            </drag-gable>
        </div>
    </div>
</template>
<script>
import dragGable from 'vuedraggable';
import showComponent from '@/components/showComponent/showComponent';

export default {
    data () {
        return {
            // list 缓存布局里的组件配置，后面将此数据合并到layout里
            list: []
        };
    },

    components: {
        dragGable, showComponent
    },

    props: {
        colNum: {
            'type': Number,
            'default': 1
        },
        layoutItem: {
            'type': Object,
            'default': {}
        }
    },

    // 在html模块渲染前调用
    created () {
        this.updateList(this.layoutItem);
    },

    methods: {
        // 将数据添加到对应的layout components里
        addData () {
            if (this.list && this.list.length > 0) {
                this.list.map((item, index) => {
                    let everyItem = item[0];
                    this.layoutItem.components[index] = everyItem;
                    return false;
                });
            }
        },

        // 控制每个布局里只能有一个组件
        controlLength (item) {
            return item.length > 0 ? 'false' : ['component'];
        },

        showConfig (configObj) {
            this.$emit('showConfig', configObj);
        },

        updateList (list) {
            if (list.layout) {
                let colsNum = parseInt(list.layout, 10);
                for (let i = 0; i < colsNum; i++) {
                    // 如果布局没有数据，那么插入一个空的数组来占位
                    let itemData = [];
                    if (list.components[i]) {
                        itemData.push(list.components[i]);
                    }
                    this.list[i] = itemData;
                }
            }
        }
    },

    // 深度监听editorList数据的变化，更新数据， 这里主要用于处理布局交换位置时数据的变化
    watch: {
        layoutItem: {
            deep: true,
            handler: function (list) {
                this.updateList(list);
            }
        }
    }
};
</script>
