<style lang="less" src='./image.less'></style>
<template>
    <div>
        <div>显示组件内容</div>
        {{config.imgSrc}}
    </div>
</template>
<script>
export default {
    props: {
        config: {
            'type': Object,
            'default': {}
        }
    },
    methods: {
        show () {
            alert(0);
        }
    }
};
</script>
