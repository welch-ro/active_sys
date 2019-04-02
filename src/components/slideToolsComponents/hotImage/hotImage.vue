<style scoped lang="less" src='./hotImage.less'></style>
<template>
    <section class="hot-image">
        <div @mousedown="drowHotArea($event)" class="hot-image-box" ref="hotImage">
            <img :src="imgSrc" class="imgauto" />
            <div class="area-box" @mousedown="drag($event, index)" v-for="(item, index) in config.hotData" :key="index" :style="{'left': item.x + 'px', 'top': item.y + 'px', 'width': item.width + 'px', 'height': item.height + 'px'}">
                <span @mousedown="scaleHot($event, index)"></span>
            </div>
        </div>
    </section>
</template>
<script>
import defaultImg from '@/assets/img/active/def-img.svg';
export default {
    data () {
        return {
            imageLeft: 0, // 图片左边距屏幕左边距
            imageTop: 0, // 图片上边距屏幕上边距
            imageBottom: 0, // 图片底边距屏幕上边距
            imageRight: 0, // 图片右边距屏幕左边距
            hotLeft: 0, // 用于保存当前热区的x轴距离图片左上角的位置
            hotTop: 0, // 用于保存当前热区的Y轴距离图片左上角的位置
            hotHeight: 0, // 用于保存当前热区的高度，新画热区的时候，要把值设置为0
            hotWidth: 0 // 用于保存当前热区的宽度，新画热区的时候，要把值设置为0
        };
    },
    props: {
        config: {
            'type': Object,
            'default': {}
        }
    },

    computed: {
        imgSrc () {
            return this.config.imgSrc === '' ? defaultImg : this.config.imgSrc;
        },
        hotImageIsSelect () {
            return this.config.imgSrc && this.$store.state.selectComId === this.$parent.$props.componentConfig.cId;
        }
    },

    mounted () {
    },

    methods: {
        updateImageInfo () {
            let imageInfo = this.$refs.hotImage.getBoundingClientRect();
            this.imageLeft = imageInfo.left;
            this.imageTop = imageInfo.top;
            this.imageBottom = imageInfo.bottom;
            this.imageRight = imageInfo.right;
        },

        drowHotArea (ev) {
            this.updateImageInfo();
            if (!this.hotImageIsSelect) {
                return;
            }
            let oEvent = ev || event;
            oEvent.preventDefault();
            oEvent.stopPropagation();
            // 点击的时候，当前鼠标所在的位置
            let {pageX: downPageX, pageY: downPageY} = oEvent;

            // 获取当前鼠标点击点相对图片的左边距和上边距，对应所画热区的左上角位置
            let disLeft = downPageX - this.imageLeft;
            let disTop = downPageY - this.imageTop;
            // 清除上次拖拽产生的缓存数据，新画热区的宽高一开始是没有的
            this.hotHeight = 0;
            this.hotWidth = 0;
            // 建立一条热区数据，插入配置config里面
            let hotAreaData = {'x': disLeft, 'y': disTop, 'width': 0, 'height': 0, 'link': ''};
            this.config.hotData.push(hotAreaData);

            // 当前所画热区对象在数组里的索引，用于下面更新数据用
            let nowHotAreaIndex = this.config.hotData.length - 1;

            this.changeFn(downPageX, downPageY, nowHotAreaIndex, 0);
        },

        changeFn (downPageX, downPageY, nowHotAreaIndex, type = 0) {
            // 实时更新当前所画热区的宽高
            let moveFn = () => {
                this.hotChange(downPageX, downPageY, nowHotAreaIndex, type);
            };
            document.addEventListener('mousemove', moveFn, false);

            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', moveFn);
            }, false);
        },

        /**
         * params boxX [number] 当前所画热区左上角位置X轴
         * params boxY [number] 当前所画热区左上角位置Y轴
         * params nowHotAreaIndex [number] 当前所画热区在数据里的索引
         * params type [number] 处理类型 0-改宽高，1-改x,y
         */
        hotChange (downPageX, downPageY, nowHotAreaIndex, type = 0) {
            let mEvent = window.event || arguments[0];
            let {pageX: movePageX, pageY: movePageY} = mEvent;
            let disMoveX = movePageX - downPageX;
            let disMoveY = movePageY - downPageY;

            switch (type) {
            case 0:
                // 如果当前鼠标位置已经超过图片的底部位置，那以图片底部位置来计算盒子的极限高度
                if (movePageY >= this.imageBottom) {
                    disMoveY = this.imageBottom - downPageY;
                }
                // 如果当前鼠标位置已经超过图片的右边位置，那以图片底部位置来计算盒子的极限宽度
                if (movePageX >= this.imageRight) {
                    disMoveX = this.imageRight - downPageX;
                }

                let nowWidth = this.hotWidth + disMoveX;
                let nowHeight = this.hotHeight + disMoveY;
                this.$set(this.config.hotData[nowHotAreaIndex], 'width', nowWidth);
                this.$set(this.config.hotData[nowHotAreaIndex], 'height', nowHeight);
                break;
            case 1:
                let nowX = this.hotLeft + disMoveX;
                let nowY = this.hotTop + disMoveY;

                if (nowX >= this.imageRight - this.imageLeft - this.config.hotData[nowHotAreaIndex].width) {
                    nowX = this.imageRight - this.imageLeft - this.config.hotData[nowHotAreaIndex].width;
                }
                if (nowX <= 0) {
                    nowX = 0;
                }

                if (nowY >= this.imageBottom - this.imageTop - this.config.hotData[nowHotAreaIndex].height) {
                    nowY = this.imageBottom - this.imageTop - this.config.hotData[nowHotAreaIndex].height;
                }
                if (nowY <= 0) {
                    nowY = 0;
                }

                this.$set(this.config.hotData[nowHotAreaIndex], 'x', nowX);
                this.$set(this.config.hotData[nowHotAreaIndex], 'y', nowY);
                break;
            };
        },

        // 热区拖拽
        drag (ev, index) {
            this.updateImageInfo();
            if (!this.hotImageIsSelect) {
                return;
            }
            let hotIndex = index;
            let oEvent = ev || event;
            oEvent.preventDefault();
            oEvent.stopPropagation();
            // 保存当前热区的x,y轴的值
            this.hotLeft = this.config.hotData[index].x;
            this.hotTop = this.config.hotData[index].y;
            // 点击的时候，当前鼠标所在的位置
            let {pageX: downPageX, pageY: downPageY} = oEvent;
            // 更新当前所画热区位置

            this.changeFn(downPageX, downPageY, hotIndex, 1);
        },

        // 热区缩放
        scaleHot (ev, index) {
            this.updateImageInfo();
            if (!this.hotImageIsSelect) {
                return;
            }
            let hotIndex = index;
            let oEvent = ev || event;
            oEvent.preventDefault();
            oEvent.stopPropagation();
            // 保存当前热区的x,y轴的值
            this.hotWidth = this.config.hotData[index].width;
            this.hotHeight = this.config.hotData[index].height;
            // 点击的时候，当前鼠标所在的位置
            let {pageX: downPageX, pageY: downPageY} = oEvent;
            // 实时更新当前所画热区的宽高
            this.changeFn(downPageX, downPageY, hotIndex, 0);
        }
    }
};
</script>
