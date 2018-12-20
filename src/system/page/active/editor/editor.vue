<style lang="less" src='./editor.less'></style>
<template>
    <div class="content-wrap">
        <!--[[ 组件工具栏 -->
        <slide-tools :layoutList="layoutList"
                     :componentsList="componentsList">
        </slide-tools>
        <!-- 组件工具栏 ]] -->
        <div class="right-cont">
            <img src="/static/page-editicon.png">
            <div class="btn-wrap">
                <a class="blue-btn middle-btn" href="javascript:;" @click="saveEveData">保存编辑</a>
                <a class="blue-btn middle-btn" href="javascript:;" @click="checkView">预览</a>
            </div>
            <div class="editor-wrap">
                <div class="editor-cont">
                    <!--[[ 编辑主要区域，拖拽布局和组件进入此区 -->
                    <div class="editor-page" ref="main_page">
                        <drag-gable class="drag-editor" v-model="editorList" :options="{group:{name:'editor', put:['layout','component']}}" @add="endDrop">
                            <div class="layout-item" v-for="(item, index) in editorList" :key="index">
                                <!-- item.layout > 0 这里加了个判断，用于防止直接拖组件进来的时，布局还没加的情况下就渲染布局组件 -->
                                <layout v-if="item.layout > 0" :layoutItem="item"
                                        :colNum="parseInt(item.layout, 10)"
                                        @showConfig="showConfig"
                                        :key="item.layoutId">
                                </layout>
                                <div class="del-layout" @click="delLayout(item)" title="删除布局">X</div>
                            </div>
                        </drag-gable>
                    </div>
                    <!-- 编辑主要区域，拖拽布局和组件进入此区 ]] -->
                </div>
                <!-- [[ 点击组件，对应显示组件的配置 -->
                <div class="conf-wrap">
                    <show-config :configName="configName" :componentConfig="componentConfig"></show-config>
                </div>
                <!-- 点击组件，对应显示组件的配置 ]] -->
            </div>
        </div>
    </div>
</template>
<script>

import slideTools from '@/components/slideTools/slideTools';
import dragGable from 'vuedraggable';
import layout from '@/components/layout/layout';
import showConfig from '@/components/showConfig/showConfig';
import test from '@/assets/config/slideTools/test';

export default {
    data () {
        return {
            // 编辑生成的最终数据
            editorList: [],

            // 组件名 componentName 字段
            configName: '',

            // 组件对应的配置数据
            componentConfig: {},

            // 布局数据
            layoutList: test.layoutList,

            // 组件数据
            componentsList: test.componentList,

            // activeId，从route获取
            activeEventId: ''
        };
    },

    components: {
        slideTools, dragGable, layout, showConfig
    },

    created () {
        this.activeEventId = this.$route.params.id;
        this.getEveData();
    },

    methods: {

        // 直接拉组件进来布局区域，给组件数据添加一层一行一列的布局，因为布局是基础，有布局才有组件，这里方便用户，对于一行一列的不用再拖布局
        endDrop () {
            let componentList = this.editorList.map((list) => {
                if (list['classify'] && list['classify'] === 'component') {
                    this.$set(this.layoutList[0], 'layoutId', 'layoutId_' + new Date().getTime());
                    let newLayout = JSON.parse(JSON.stringify(this.layoutList[0]));
                    newLayout.components.push(list);

                    return newLayout;
                } else {
                    return list;
                }
            });
            let componentArray = JSON.parse(JSON.stringify(componentList));

            this.editorList = componentArray;
        },

        // 接收子组件传过来的配置信息，对应显示配置文件
        showConfig (configObj) {
            this.configName = configObj.configName;
            // 对应组件的配置
            this.componentConfig = configObj.config;
        },

        // 删除布局
        delLayout (layoutItem) {
            let layoutIdList = this.editorList.map(e => e.layoutId);
            let delLayoutIndex = layoutIdList.indexOf(layoutItem.layoutId);
            this.editorList.splice(delLayoutIndex, 1);
        },

        // 获取数据
        getEveData () {
            this.$http.get('/active/get', { params: { id: this.activeEventId } }).then((ret) => {
                let data = ret.data;
                if (data.result === 0) {
                    let resultRows = data.result_row;
                    let list = resultRows.list;
                    let editorListJson = list[0].editorList;
                    if (editorListJson) {
                        this.editorList = JSON.parse(editorListJson);
                    }
                }
            });
        },

        // 保存数据
        saveEveData () {
            let editorListJson = JSON.stringify(this.editorList);
            this.$http.post('/active/save', { params: { eveId: this.activeEventId, editorList: editorListJson } }).then(function (ret) {
                let retData = ret.data;
                let msg = retData.msg;

                if (retData.result === 0) {
                    alert('保存成功');
                } else {
                    alert(msg);
                }
            });
        },

        //
        checkView () {
            let mainHTML = this.$refs.main_page.innerHTML;
            this.$http.post('/active/add_view', { params: { id: this.activeEventId, mainHTML: mainHTML } }).then((ret) => {

            });
        }
    }
};

</script>
