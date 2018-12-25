<style scoped lang="less" src='./text.less'></style>
<template>
    <div>
        <h3 class="config-t">编辑文案</h3>
        <quill-editor v-model="config.text"
                      ref="myQuillEditor"
                      :key="config.cId"
                      :options="editorOption">
        </quill-editor>
    </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
    data () {
        return {
            editorOption: {}
        };
    },

    props: {
        config: {
            'type': Object
        }
    },

    computed: {
        editor () {
            return this.$refs.myQuillEditor.quill;
        }
    },

    components: {
        quillEditor
    }
};
</script>
