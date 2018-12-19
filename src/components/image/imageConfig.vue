<style scoped lang="less" src='./image.less'></style>
<template>
    <div>
        <div>显示组件配置</div>
        {{config.imgSrc}}
        <input v-model="config.imgSrc">
        <h3 class="config-t">点击上传图片</h3>
        <div class="upload-img">
            <upload-img :width="'100%'" :height="'80px'" :imgUrl="config.imgSrc" @uploadSuccess="uploadSuccess" :imgMaxSize="{jpeg: 200, png: 200, gif: 500}"></upload-img>
        </div>
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
