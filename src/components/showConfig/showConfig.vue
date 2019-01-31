<style lang="less" src='./showConfig.less'></style>
<template>
    <component :is="configName" :config="componentConfig" :isEdit="false"></component>
</template>
<script>
import { componentsConfigList } from '@/components/slideToolsComponents/getComponents';

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

    components: componentsConfigList,

    methods: {}
};
</script>
