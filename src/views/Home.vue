<template>
  <div class="common-bg">
    <div class="head-title">试玩大全</div>

    <div class="video-bg">
      <video src="../assets/video/meng2.mp4" controls></video>
    </div>

    <div class="safari-bg common-padding">
      <div class="safari-left">
        <img class="safari-left-img" src="../assets/喇叭.png" alt="">
        <div class="safari-left-text">请用Safari打开平台下载</div>
      </div>
      <router-link to="/HelpCourse">
        <div class="safari-right">新手必看</div>
      </router-link>
    </div>

    <li class="type-bg">
      <router-link to="/HelpCourse">
        <img src="../assets/hometype1.png" alt="">
      </router-link>
      <router-link to="/Question">
        <img src="../assets/hometype2.png" alt="">
      </router-link>
      <router-link to="/Attention">
        <img src="../assets/hometype3.png" alt="">
      </router-link>
      <router-link to="/Contact">
        <img src="../assets/hometype4.png" alt="">
      </router-link>
    </li>

    <div class="safari-left common-padding">
      <img class="safari-left-img" src="../assets/喇叭.png" alt="">
      <div class="safari-left-text-1">《需多台手机操作及推广 请联系客服》</div>
    </div>

    <div class="list-bg common-padding" v-for="item in listAry" :key="item.title">
      <a :href="item.hrefSrc">
        <div class="list-item-bg">
        <div class="list-item-left-bg">
          <img class="list-item-img" :src="item.img" alt="">
          <div class="list-item-mid-bg">
            <div class="list-item-mid-title">{{item.title}}</div>
            <div class="list-item-mid-desc">{{item.desc}}</div>
          </div>
        </div>
        <button class="list-item-btn">加 入</button>
      </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: function() {
    return {
      listAry:[
        {
          "img": require('@/assets/111.png'),
          "title": '平台名111',
          'desc': '平台描述111',
          'hrefSrc': 'https://chanshike.cn/?uid=1391872#/homeGuide?uid=1391872'
        },
        {
          "img": require('@/assets/111.png'),
          "title": '平台名222',
          'desc': '平台描述222',
          'hrefSrc': 'https://chanshike.cn/?uid=1391872#/homeGuide?uid=1391872'
        }
      ]
    }
  }
};
</script>

// style中添加 scoped，则css只对当前组件有用
<style>

.common-bg{background-color: rgb(233, 237, 243);padding: 10px;}
.common-padding{padding-left: 10px;padding-right: 10px;}
a:link{text-decoration:none;} /* 去掉a标签文字下划线 */

.head-title{font-size: 20px;text-align: center;}

.video-bg{position: relative;display: flex;justify-content: center;align-items: center;margin-top: 10px;margin-left: 20px;margin-right: 20px;height: 180px;overflow: hidden;}

.safari-bg{margin-top: 10px;display: flex;flex-direction: row;align-items: center;justify-content: space-between;}
.safari-left{display: flex;flex-direction: row;align-items: center;}
.safari-left-img{width: 20px;height: 20px;}
.safari-left-text{margin-left: 5px;font-size: 14px;}
.safari-right{width: 60px;height: 23px;line-height: 23px;font-size: 12px;text-align: center;color: white;background: rgb(252, 66, 74);border: 1px solid rgb(252, 66, 74);border-radius: 7px;}

.type-bg{margin-top: 10px;display: flex;flex-direction: row;align-items: center;justify-content: space-between;}
.type-bg img{width: 80px;height: 80px;}

.safari-left-text-1{margin-left: 5px;color: crimson;font-size: 14px;}

.list-bg{margin-top: 10px;}
.list-item-bg{display: flex;flex-direction: row;align-items: center;justify-content: space-between;background-color: white;border-color: white;border-radius: 8px;border-width: 1px;padding: 5px;}
.list-item-left-bg{display: flex;flex-direction: row;align-items: center;}
.list-item-img{width: 40px;height: 40px;}
.list-item-mid-bg{display: flex;flex-direction: column;margin-left: 10px;}
.list-item-mid-title{color: black;font-size: 18px;}
.list-item-mid-desc{color: black;font-size: 12px;text-align: left;}
.list-item-btn{padding: 0 10px;height: 30px;;color: crimson;font-size: 14px;background-color: white;border-color: crimson;border-radius: 15px;border-width: 1px;margin-right: 0;}

</style>
