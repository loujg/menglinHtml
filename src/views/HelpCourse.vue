// 新手教程
<template>
    <div class="common-bg">
        <div class="head-title">新手教程</div>

        <div class="video-bg">
            <video src="../assets/video/meng.mp4" controls></video>
        </div>
        
        <div class="info-title">APP试玩赚钱介绍</div>

        <div class="common-padding">
            <div class="info-desc">软件开发商付费推广他们开发应用，用户下载试玩他们的应用获得现金奖励</div>

            <div class="info-question-header">常见疑问解答</div>

            <div class="info-question-title-bg">
                <div class="info-question-title-number">1</div>
                <div class="info-question-title-text">下载应用试玩真的挣钱？</div>
            </div>
            <div class="info-question-answer">答：是真的，(无任何收费)</div>

            <div class="info-question-title-bg">
                <div class="info-question-title-number">2</div>
                <div class="info-question-title-text">钱从哪里来，谁出的钱？</div>
            </div>
            <div class="info-question-answer">答：软件开发商</div>

            <div class="info-question-title-bg">
                <div class="info-question-title-number">3</div>
                <div class="info-question-title-text">开发商为什么要花钱让我们试玩？</div>
            </div>
            <div class="info-question-answer">答：是为了刷软件在苹果应用商店(App Store)中的搜索排名(都想排在第一位，排名越往前，展现几率越大，被下载的几率就越大。毕竟没有谁会往下翻到第几百页下载个应用吧)</div>

            <div class="info-question-example">举个例子</div>
            <div class="info-question-example-desc">
                我们在App Store中搜索
                <div class="info-question-example-desc-1">“美女直播”</div>
                就会发现搜索结果有几百个关于美女直播的应用。软件开发商为了让应用在App Store排名靠前，就付费让用户下载试玩，来提升搜索排名。我们挣的奖励就是软件开发商付的试玩推广费。
            </div>
            <div class="info-question-example-img-bg">
                <img src="http://pic.96weixin.com/ueditor/20190415/1555260013265877.jpg" alt="">
            </div>

            <div class="info-question-title-bg">
                <div class="info-question-title-number">4</div>
                <div class="info-question-title-text">关于提现</div>
            </div>
            <div class="info-question-answer">答：支持微信/支付宝提现。一般10元起提，部分平台5元或者1元起提。到账时间秒到账或者1-2个工作日到账节假日顺延。</div>

            <div class="info-question-title-bg">
                <div class="info-question-title-number">5</div>
                <div class="info-question-title-text">平台保障</div>
            </div>
            <div class="info-question-answer">本网站所有试玩平台都是客服亲测的，平台不会以任何形式如何理由叫你交一分钱，请大家放心试玩。通过本网站加入试玩的用户，就算遇到平台无法正常提现。我们平台承诺免费协助处理。</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HelpCourse",
    data: function() {
        return {
            
        }
    },
    methods: {
        playVideo() {

        }
    }
}
</script>

<style>

.common-bg{background-color: white;padding: 10px;}
.common-padding{padding-left: 10px;padding-right: 10px;}
a:link{text-decoration:none;} /* 去掉a标签文字下划线 */

.head-title{font-size: 20px;text-align: center;}

.video-bg{position: relative;display: flex;justify-content: center;align-items: center;margin-top: 10px;margin-left: 20px;margin-right: 20px;height: 180px;overflow: hidden;}
video{position: relative;display: block;width: 100%;height: 100%;top: 0;left: 0;background: black;}
.video-play-btn{position: absolute;z-index: 5;width: 70px;height: 50px;overflow: hidden;background: rgba(23, 23, 23, 0.9);display: flex;justify-content: center;align-items: center;border: none;}
.video-play-img{width: 30px;height: 30px;}

.info-title{margin-top: 10px;text-align: center;color: crimson;font-size: 18px;word-wrap: break-word;}
.info-desc{margin-top: 10px;font-size: 15px;}
.info-question-header{margin-top: 30px;font-size: 16px;color: rgb(0, 191, 255);}
.info-question-title-bg{margin-top: 10px;display: flex;flex-direction: row;align-items: center;}
.info-question-title-number{background: #ef7060;width: 30px;height: 30px;line-height: 30px;color: white;font-size: 14px;border-radius: 100%;text-align: center;vertical-align: middle;}
.info-question-title-text{margin-left: 5px;color: #ef7060;font-size: 14px;}
.info-question-answer{margin-top: 10px;margin-bottom: 30px;font-size: 15px;}
.info-question-example{color: #ff4c41;font-size: 12px;text-decoration: underline;}
.info-question-example-desc{font-size: 14px;display: flex;flex-direction: row;}
.info-question-example-desc-1{font-size: 14px;text-decoration: underline;}
.info-question-example-img-bg{margin-top: 5px;margin-bottom: 30px;display: flex;flex-direction: row;justify-content: center;align-items: center;}

</style>
