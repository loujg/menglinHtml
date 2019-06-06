// 常见问题
<template>
    <div class="common-bg">
        <div class="head-title">常见问题</div>
        
        <div class="question-title">常见问题一</div>
        <div class="question-desc">安装证书时 12.2系统 不会自动跳转，点击关闭  打开设置 通用 描述文件 找到应用点击安装双击编辑文本</div>

        <div class="question-title">常见问题二</div>
        <div class="question-desc">第一次下载安装的用户，请按下面正确设置才能打开！</div>

        <div class="question-img-bg" @click="gotoXinren">
            <img class="question-img" src="@/assets/222.png" alt="">
        </div>

        <div class="question-img-bg">
            <img class="question-img2" src="@/assets/放大镜.png" alt="">
            <img class="question-img-qr" src="@/assets/二维码.png" alt="">
        </div>
        <img src="@/assets/放大镜1.png" alt="">

        <div class="question-desc2">长按识别二维码联系我们</div>
    </div>
</template>

<script>
export default {
    name: "Question",
    data: function() {
        return {
            
        }
    },
    methods: {
        gotoXinren() {
            this.$router.push('/Xinren')
        }
    }
}
</script>

<style>

.common-bg{background-color: rgb(233, 237, 243);padding: 10px;}
.common-padding{padding-left: 10px;padding-right: 10px;}
a:link{text-decoration:none;} /* 去掉a标签文字下划线 */

.head-title{font-size: 20px;}

.question-title{margin-top: 20px;color: rgb(103, 103, 103);font-size: 18px;}
.question-desc{margin-top: 10px;font-size: 14px;}
.question-img-bg{margin-top: 30px;position: relative;display: flex;justify-content: center;align-items: center;}
.question-img{width: 150px;height: 64px;}
.question-img2{position: relative;;width: 200px;height: 200px;}
.question-img-qr{position: absolute;width: 10px;height: 10px;animation: qrAni 1s ease-in-out 0.1s 1 normal running forwards;}

.question-desc2{margin-top: 10px;font-size: 14px;text-align: center;}

/* 动画效果 */
@keyframes qrAni {
    100% {
        width: 100px;
        height: 100px;
    }
}

</style>