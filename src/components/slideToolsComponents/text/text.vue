<style scoped lang="less" src='./text.less'></style>
<template>
    <div>

        <div class="ql-editor" v-if="config.text" v-html="config.text"></div>
        <div class="holder" v-else>
            点击组件编辑
        </div>
    </div>
</template>
<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    props: {
        config: {
            'type': Object
        }
    }
};
</script>
