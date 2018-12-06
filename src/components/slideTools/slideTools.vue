<style scoped lang="less" src='./slideTools.less'></style>
<template>
    <div class="tools-wrap">
        <h3 class="tools-item-title">布局</h3>
        <ul class="tools-layout">
            <drag-gable v-model="layoutList" :options="{group:{name:'layout', pull:'clone', put:false}, sort:false}" :clone="onCloneLayout">
                <li class="item" v-for="(item, index) in layoutList" :key="index">
                    <div class="item-cont">
                        <div>
                            <i :class="'layout-item-ico' + index"></i>
                            <p>{{item.name}}</p>
                        </div>
                    </div>
                </li>
            </drag-gable>
        </ul>

        <h3 class="tools-item-title">组件</h3>
        <ul class="tools-layout">
            <drag-gable v-model="componentsList" :options="{group:{name:'component', pull:'clone', put:false}, sort:false}" :clone="onCloneComponent">
                <li class="item component-hover-layout-hidden" v-for="(item, index) in componentsList" :key="index">
                    <div class="item-cont">
                        <div>
                            <i :class="'component-item-ico' + index"></i>
                            <p>{{item.componentName}}</p>
                        </div>
                    </div>
                </li>
            </drag-gable>
        </ul>
    </div>
</template>
<script>
import dragGable from 'vuedraggable';

export default {
    data () {
        return {};
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
        }
    }
};
</script>
