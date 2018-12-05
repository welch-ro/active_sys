<style lang="less" src='./showComponent.less'></style>
<template>
    <component :is="componentList[componentName]['component']" :config="config" @click.native="showConfig"  :key="new Date().getTime()"></component>
</template>
<script>
const vueImage = () => import('@/components/image/image');
// import image from '@/components/image/image';

export default {
    data () {
        return {
            // 组件对应的名称，这里重新定义了一下，以解决名称跟关键词有冲突，个人是这样认为的,因为我用image做为名称的时候，会不显示，名称改了就好了
            componentList: {
                'image': { component: 'vueImage', configName: 'vueImageConfig' }
            }
        };
    },

    props: {
        // 组件名
        componentName: {
            type: String
        },
        // 组件对应的配置
        config: {
            'type': Object,
            'default': function () {
                return {};
            }
        }
    },

    components: {
        vueImage
    },

    methods: {
        // 点击显示对应的配置文件,把数据传回父组件，再对应发给配置文件
        showConfig () {
            this.$emit('showConfig', { configName: this.componentList[this.componentName]['configName'], config: this.config });
        }
    }
};
</script>
