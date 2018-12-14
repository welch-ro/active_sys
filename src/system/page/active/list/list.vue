<style scoped lang="less" src='./list.less'></style>
<template>
    <div>
        <div class="add-btn-box"><router-link :to="'/detail'" class="blue-btn middle-btn">添加</router-link></div>
        <ul class="list">
            <li class="list-item" v-for="(item, index) in list" :key="index">
                <div class="item-name">
                    {{item.eveId}}
                </div>
                <div class="tools">
                    <a href="javascript:;" @click="jumpEditor(item.eveId)" class="tools-item">编辑</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            list: []
        };
    },

    created () {
        this.getList();
    },

    methods: {
        getList () {
            this.$http.get('/active/list').then((ret) => {
                let data = ret.data;
                if (data.result === 0) {
                    this.list = data.result_row.list;
                } else {
                    alert('查询错误：' + data.msg);
                }
            });
        },

        // 点击编辑转跳，通过router去跳,结构已经使用router-link取代
        jumpEditor (eventId) {
            this.$router.push({ path: `/detail/${eventId}` });
        }
    }
};
</script>
