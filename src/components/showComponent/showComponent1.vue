<style lang="less" src='./showComponent.less'></style>
<template>
    <div class="component-box">
        <component :class="{'is-select': componentConfig.cId === checkSelectComId}" :is="componentList[componentName]['component']" :config="componentConfig.config" @click.native="showConfig(componentConfig.cId)"  :key="componentConfig.cId"></component>
        <div class="component-del" @click="delComponent(componentConfig.cId)">x</div>
    </div>
</template>
<script>
import { componentsList } from '@/components/slideToolsComponents/getComponents';
console.log(componentsList);
const vueImage = () => ({
    component: import(/* webpackChunkName: "vueImage" */ '@/components/image/image')
});
const vueText = () => ({
    component: import(/* webpackChunkName: "vueText" */ componentsList['text'])
});
// import image from '@/components/image/image';

export default {
    data () {
        return {
            // 组件对应的名称，这里重新定义了一下，以解决名称跟关键词有冲突，个人是这样认为的,因为我用image做为名称的时候，会不显示，名称改了就好了
            // vueImageConfig 对应showConfig里异步显示的配置组件，通过这个名字来加载对应的组件
            componentList: {
                'image': { component: 'vueImage', configName: 'vueImageConfig' },
                'text': { component: 'vueText', configName: 'vueTextConfig' }
            }
        };
    },

    props: {
        // 组件名
        componentName: {
            type: String
        },
        // 组件对应的配置
        componentConfig: {
            'type': Object,
            'default': function () {
                return {};
            }
        }
    },

    computed: {
        checkSelectComId () {
            return this.$store.state.selectComId;
        }
    },

    components: {
        vueImage, vueText
    },

    methods: {
        // 点击显示对应的配置文件,把数据传回父组件，再对应发给配置文件
        showConfig (cid) {
            // this.isSelection = cid;
            // 保存当前选中的组件cid，用于确定选中状态，这里通过vuex去管理
            this.$store.commit('changeSelectComId', cid);
            this.$emit('showConfig', { configName: this.componentList[this.componentName]['configName'], config: this.componentConfig.config });
        },

        // 删除组件
        delComponent (cid) {
            this.$emit('delComponent', cid);
        }
    }
};
</script>
