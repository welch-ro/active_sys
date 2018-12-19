<style scoped lang="less" src='./uploadImg.less'></style>
<template>
    <div class="upload-img-btn" :style="{'backgroundImage': 'url(' + imgUrl + ')', 'width': width, 'height': height}">
        <input class="input-file-btn" type="file" value="" @change="uploadImg" />
    </div>
</template>
<script>
export default {
    data () {
        return {
            imgSrc: ''
        };
    },

    props: {
        imgUrl: {
            'type': [String],
            'default': ''
        },
        width: {
            'type': [String, Number],
            'default': '100%'
        },
        height: {
            'type': [String, Number],
            'default': '80px'
        },
        imgMaxSize: {
            'type': Object,
            'default': function () {
                return {
                    jpeg: 120,
                    png: 120,
                    gif: 200
                };
            }
        }
    },

    created () {
        this.imgSrc = this.imgUrl === '' ? '' : this.imgUrl;
    },

    methods: {
        uploadImg (e) {
            var _this = this;
            // e.currentTarget相当于$(this)
            let thisInput = e.currentTarget;
            let imgObj = thisInput.files[0];

            let type = imgObj.type.split('/')[1];
            let size = imgObj.size / 1024;

            // 验证图片大小
            if (_this.imgMaxSize[type] && size > _this.imgMaxSize[type]) {
                alert(`上传的${type}图片过大，请压缩到小于${_this.imgMaxSize[type]}K`);
                thisInput.value = '';
                return false;
            }

            // 通过base64上传图片
            let reader = new FileReader();
            reader.readAsDataURL(imgObj);
            reader.onload = function () {
                _this.$http.post('/active/upload_img', { params: { imgSrc: this.result, imgType: type } }).then((ret) => {
                    let data = ret.data;
                    if (data.result === 0) {
                        // _this.config.imgSrc = data.result_row.imgSrc;
                        _this.imgSrc = data.result_row.imgSrc;
                        thisInput.value = '';
                        _this.$emit('uploadSuccess', _this.imgSrc);
                    }
                });
            };
        }
    }
};
</script>
