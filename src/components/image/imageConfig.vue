<style lang="less" src='./image.less'></style>
<template>
    <div>
        <div>显示组件配置</div>
        {{config.imgSrc}}
        <input v-model="config.imgSrc">
    </div>
</template>
<script>
export default {
    props: {
        config: {
            'type': Object
        }
    }
};
</script>
