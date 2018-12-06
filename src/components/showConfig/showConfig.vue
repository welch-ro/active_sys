<style scoped lang="less" src='./showConfig.less'></style>
<template>
    <component :is="configName" :config="componentConfig" :isEdit="false"></component>
</template>
<script>
const vueImageConfig = () => import('@/components/image/imageConfig');
// import image from '@/components/image/image';

export default {
    data () {
        return {};
    },

    props: {
        configName: {
            'type': String
        },
        componentConfig: {
            'type': Object,
            'default': function () {
                return {};
            }
        }
    },

    components: {
        vueImageConfig
    },

    methods: {}
};
</script>
