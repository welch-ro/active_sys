<style lang="less" src="@/assets/css/global.less" ></style>
<template>
    <article>
        <vue-header></vue-header>
        <div class="main-wrap">
            <router-view></router-view>
        </div>
    </article>
</template>
<script>
import vueHeader from '@/system/inc/header/header';
export default {
    components: {
        vueHeader
    }
};
</script>
<style lang="less">
    .main-wrap{
        margin-top: 20px;
    }
</style>
