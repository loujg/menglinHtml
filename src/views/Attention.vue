// 注意事项
<template>
    <div class="common-bg">
        <div class="head-title">注意事项</div>
        
        <br>
        <div class="attention-desc">一、 注册平台的手机号要实名制的</div>
        <div class="attention-desc">二 、提现的微信支付宝要实名制的</div>
        <div class="attention-desc">三 、下载好的任务app 不用去注册</div>
        <div class="attention-desc">四、 有其他疑问，联系客服微信</div>

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
    name: "Attention",
    data: function() {
        return {
            
        }
    }
}
</script>

<style>

.common-bg{background-color: rgb(233, 237, 243);padding: 10px;}
.common-padding{padding-left: 10px;padding-right: 10px;}
a:link{text-decoration:none;} /* 去掉a标签文字下划线 */

.head-title{font-size: 20px;}

.attention-desc{margin-top: 5px;color: red;font-size: 14px;}

/* 引用question.vue的css样式及动画效果 */

</style>