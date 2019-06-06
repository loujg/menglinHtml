// 信任设置
<template>
    <div class="common-bg">
        <div class="head-title">信任设置</div>
        
        <div class="xinren-desc">第一次下载安装的用户，请按下面正确设置才能打开！</div>
        
        <div class="xinren-title">1：点开APP记住证书名</div>
        <div class="xinren-img-bg">
            <img class="xinren-img" src="@/assets/xinren1.jpg" alt="">
        </div>

        <div class="xinren-title">2.在【设置】->【通用】->【描述文件与设备管理】找到对应证书</div>
        <div class="xinren-img-bg">
            <img class="xinren-img" src="@/assets/xinren2.jpg" alt="">
        </div>

        <div class="xinren-title">3.信任证书</div>
        <div class="xinren-img-bg">
            <img class="xinren-img" src="@/assets/xinren3.jpg" alt="">
            <img class="xinren-img" src="@/assets/xinren4.jpg" alt="">
        </div>

        <div class="xinren-desc">安装使用一段时间出现：“闪退”、“打不开”、“信任不了”，请卸载重新安装信任即可！</div>
        <div class="xinren-title">这个情况是ios证书掉了，卸载重新安装一下开发商更换之后的ios证书后的APP应用包即可！</div>

    </div>
</template>

<script>
export default {
    name: "Xinren",
    data: function() {
        return {
            
        }
    }
}
</script>

<style>

.common-bg{background-color: white;padding: 10px;}
.common-padding{padding-left: 10px;padding-right: 10px;}
a:link{text-decoration:none;} /* 去掉a标签文字下划线 */

.head-title{font-size: 20px;}

.xinren-desc{margin-top: 20px;font-size: 14px;}
.xinren-title{margin-top: 10px;font-size: 14px;color: red;}
.xinren-img-bg{display: flex;flex-direction: column;justify-content: center;align-items: center;}
.xinren-img{margin-top: 10px;width: 70%;}

</style>
