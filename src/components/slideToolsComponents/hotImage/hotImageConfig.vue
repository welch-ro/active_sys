<style scoped lang="less" src='./hotImage.less'></style>
<template>
    <div>
        <div>图片热区配置</div>
        <h3 class="config-t">点击上传图片</h3>
        <div class="upload-img">
            <upload-img :width="'100%'" :height="'80px'" :imgUrl="config.imgSrc" @uploadSuccess="uploadSuccess" :imgMaxSize="{jpeg: 200, png: 200, gif: 500}"></upload-img>
        </div>
        <h3 class="config-t">配置热区链接</h3>
        <ul class="hot-config">
            <li v-for="(item, index) in config.hotData" :key="index">
                <p><a href="javascript:;" @click="del(index)">删除</a>热区{{index}}输入链接</p>
                <input type="text" v-model="item.link">
            </li>
        </ul>
    </div>
</template>
<script>
import uploadImg from '@/components/uploadImg/uploadImg';

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
        },

        del (index) {
            console.log(index);
            this.config.hotData.splice(index, 1);
        }
    }
};
</script>
