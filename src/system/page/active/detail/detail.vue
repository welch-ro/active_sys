<style scoped lang="less" src='./detail.less'></style>
<template>
    <div>
        <form>
            <label v-if="activeData.activeId">
                ID:
                <input v-model="activeData.activeId" value="" disabled type="text">
            </label>
            <label>
                TITLE:
                <input v-model="activeData.title" value="" type="text">
            </label>
            <label>
                START_TIME:
                <input v-model="activeData.startTime" value="" type="text">
            </label>
            <label>
                END_TIME:
                <input v-model="activeData.endTime" value="" type="text">
            </label>
        </form>
        <div>
            <a class="blue-btn middle-btn" href="javascript:;" @click="addActive">保存</a>
        </div>
    </div>
</template>
<script>

export default {
    data () {
        return {
            activeData: {
                activeId: '',
                title: '',
                startTime: '',
                endTime: ''
            }
        };
    },

    created () {
        this.activeData.activeId = this.$route.params.id;
        this.activeData.activeId && this.getInfo();
    },

    methods: {
        addActive () {
            this.$http.post('/active/add_active', { params: this.activeData }).then((ret) => {
                let data = ret.data;
                let resultRow = data.result_rows;
                let status = resultRow.status;
                let eveId = resultRow.eveId;
                this.activeData.activeId = eveId;
                if (status === 10) {
                    this.$router.push({ 'path': '/editor/' + this.activeData.activeId });
                }
            });
        },

        getInfo () {
            this.$http.get('/active/get', { params: { id: this.activeData.activeId } }).then((ret) => {
                let data = ret.data;
                if (data.result === 0) {
                    let resultRows = data.result_row;
                    let list = resultRows.list;
                    let title = list[0].title;
                    this.activeData.title = title;
                }
            });
        }
    }
};

</script>
