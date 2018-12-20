<style scoped lang="less" src='./text.less'></style>
<template>
    <div>
        <div>显示组件配置</div>
        {{config.imgSrc}}
        <input v-model="config.imgSrc">
    </div>
</template>
<script>
import uploadImg from '../uploadImg/uploadImg';

export default {
    props: {
        config: {
            'type': Object
        }
    },

    components: {
        uploadImg
    },

    methods: {
        uploadSuccess (imgSrc) {
            this.config.imgSrc = imgSrc;
        }
    }
};
</script>
