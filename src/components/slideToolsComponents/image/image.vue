<style scoped lang="less" src='./image.less'></style>
<template>
    <div>
        <div class="img-box">
            <img :src="imgSrc" class="imgauto" />
        </div>
    </div>
</template>
<script>
import defaultImg from '@/assets/img/active/def-img.svg';
export default {
    props: {
        config: {
            'type': Object,
            'default': {}
        }
    },

    computed: {
        imgSrc () {
            return this.config.imgSrc === '' ? defaultImg : this.config.imgSrc;
        }
    },

    methods: {

    }
};
</script>
