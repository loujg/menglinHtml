<template>
  <div class="common-bg">
    <div class="head-title">试玩大全</div>

    <img class="head-img" src="http://res1.eqh5.com/o_1db261i30ehq1pdgmbbpn3b9.png?imageMogr2/auto-orient/thumbnail/688x344%3E/format/webp" alt="">

    <div class="safari-bg common-padding">
      <div class="safari-left">
        <img class="safari-left-img" src="http://res1.eqh5.com/o_1d82ugd2gmm4l871lc5ju24r6g.jpg?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!650x568a0a0%7CimageMogr2/auto-orient/thumbnail/46x40%3E/format/webp" alt="">
        <div class="safari-left-text">请用Safari打开平台下载</div>
      </div>
      <router-link to="/HelpCourse">
        <img class="safari-right" src="http://res1.eqh5.com/o_1dc3nnats1j44q7q1eu516aq60ug.png?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!3035x1179a0a0%7CimageMogr2/auto-orient/thumbnail/118x46%3E/format/webp" alt="">
      </router-link>
    </div>

    <li class="type-bg">
      <router-link to="/HelpCourse">
        <img src="http://res1.eqh5.com/o_1davrkt6f1voa12l61eis1sc0cgp1e.png?imageMogr2/auto-orient/thumbnail/204x204%3E/format/webp" alt="">
      </router-link>
      <router-link to="/Question">
        <img src="http://res1.eqh5.com/o_1davromed1m7hdub1uspefeuqp1j.png?imageMogr2/auto-orient/thumbnail/204x204%3E/format/webp" alt="">
      </router-link>
      <router-link to="/Attention">
        <img src="http://res1.eqh5.com/o_1davrq7at1h721l3i1e831bs2h6o1o.png?imageMogr2/auto-orient/thumbnail/204x204%3E/format/webp" alt="">
      </router-link>
      <router-link to="/Contact">
        <img src="http://res1.eqh5.com/o_1davru5er1vu3tqf1dft1bqqujh1t.png?imageMogr2/auto-orient/thumbnail/204x204%3E/format/webp" alt="">
      </router-link>
    </li>

    <div class="safari-left common-padding">
      <img class="safari-left-img" src="http://res1.eqh5.com/o_1d82ugd2gmm4l871lc5ju24r6g.jpg?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!650x568a0a0%7CimageMogr2/auto-orient/thumbnail/46x40%3E/format/webp" alt="">
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

.head-img{margin-top: 10px;width: 100%;}

.safari-bg{margin-top: 10px;display: flex;flex-direction: row;align-items: center;justify-content: space-between;}
.safari-left{display: flex;flex-direction: row;align-items: center;}
.safari-left-img{width: 24px;height: 21px;}
.safari-left-text{margin-left: 5px;font-size: 14px;}
.safari-right{width: 60px;height: 23px;}

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
.list-item-btn{width: 60px;height: 30px;;color: crimson;font-size: 14px;background-color: white;border-color: crimson;border-radius: 15px;border-width: 1px;margin-right: 0;}

</style>
