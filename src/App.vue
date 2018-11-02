<template>
  <div style="height:100%;">
    <drawer
      width="200px;"
      :show.sync="drawerVisibility"
      :show-mode="showModeValue"
      :placement="showPlacementValue"
      :drawer-style="{'background-color':'#e20d3e', width: '300px'}">
      <view-box ref="viewBox" :body-padding-top="isShowNav ? '46px' : '0'" body-padding-bottom="55px">
        <x-header
          v-if="isShowNav"
          style="width:100%;position:absolute;left:0;top:0;z-index:100;"
          :right-options="{showMore: true}"
          @on-click-more="onClickMore">
          <span slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span>
          <!-- 中部tab -->
          <tab>
            <tab-item style="background-color:#e20d3e;" @on-item-click="onItemClick">
              <img ref='music' src="@/assets/music.svg" class="icon_2">
            </tab-item>
            <tab-item style="background-color:#e20d3e;" active-class='select' @on-item-click="onItemClick">
              <img ref='cd' src="@/assets/cd_g.svg" class="icon_2">
            </tab-item>
            <tab-item style="background-color:#e20d3e;" @on-item-click="onItemClick">
              <img ref='mv' src="@/assets/mv.svg" class="icon_2">
            </tab-item>
          </tab>
        </x-header>
        <!-- 页面占位 -->
        <router-view/>
        <div v-transfer-dom>
          <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
        </div>
      </view-box>
      <!--左侧菜单内容start-->
      <div slot='drawer'>
        <scroller :lock-x='true' height="-40">
          <div class="scroll_box">
            <group style="border-bottom:5px solid #f3305d;">
              <cell class='cellStyl' style="padding-top:1em;" value-align='left'>
                <img src="@/assets/head.jpeg" alt="头像" class='headImg'>
              </cell>
              <cell :title='username' class='cellStyl' style="border-bottom:1px solid #fb1334;">
                <i slot='after-title' class='ltIcon' style="padding:0 4px;font-size:12px;">V1</i>
                <slot>
                  <img class='rtIcon' style='padding:0 6px;width: 2em;height: 1.5em;vertical-align: middle;margin-top: -2px;' src='@/assets/money.svg'/>
                  <span style="color:#fff;">签到</span>
                </slot>
              </cell>
              <cell title='我的消息' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/email.svg" />
              </cell>
              <cell title='会员中心' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/vip.svg" />
              </cell>
              <cell title='商城' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/shop.svg" />
              </cell>
              <cell title='游戏推荐Beta' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/game.svg" />
              </cell>
              <cell title='在线听歌免流量' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/freewifi.svg" />
              </cell>
            </group>
            <group style="border-bottom:5px solid #f3305d;">
              <cell title='我的好友' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/person.svg" />
              </cell>
              <cell title='附近的人' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/nearby.svg" />
              </cell>
            </group>
            <group>
              <cell title='个性换肤' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/clothes.svg" />
              </cell>
              <cell title='听歌识曲' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/song.svg" />
              </cell>
              <cell title='定时停止播放' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/time.svg" />
              </cell>
              <cell title='扫一扫' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/scan.svg" />
              </cell>
              <cell title='音乐闹钟' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/clock.svg" />
              </cell>
              <cell title='驾驶模式' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/car.svg" />
              </cell>
              <cell title='亲子频道' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/child.svg" />
              </cell>
              <cell title='音乐云盘' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/cloud.svg" />
              </cell>
              <cell title='优惠券' class='cellStyl cell_font'>
                <img slot='icon' class='icon_l' src="@/assets/coupon.svg" />
              </cell>
            </group>
          </div>
        </scroller>
        <group style="border-top:1px solid #fff;height:46px;margin-top:0;">
          <cell style="height:100%;margin-top:0;" :title='mode' class='cellStyl cell_font'>
            <img slot='icon' class='icon_l' src="@/assets/moon.svg" style='margin-right:0.5em;' />
            <slot>
              <span style="position:absolute;left:50%;margin-left:-25px;width:60px;">
                <img src="@/assets/setting.svg" style='margin-right:0.5em;' class='icon_l'>
                <span style="color:#fff;">设置</span>
              </span>
            </slot>
            <slot>
              <img src="@/assets/logout.svg" style='margin-right:0.5em;' class='icon_l'>
              <span style="color:#fff;">退出</span>
            </slot>
          </cell>
        </group>
      </div>
      <!--左侧菜单内容end-->
    </drawer>
  </div>
</template>

<script>
import { Group, Scroller,Drawer, Cell, ViewBox, XHeader,TransferDom,Actionsheet,Tab, TabItem} from 'vux'
var $ = require('jquery')
import music from './assets/music_g.svg'
import cd from './assets/cd_g.svg'
import mv from './assets/mv_g.svg'
import w_music from './assets/music.svg'
import w_cd from './assets/cd.svg'
import w_mv from './assets/mv.svg'
export default {
  directives: {
    TransferDom
  },
  components: {
    Drawer,//左侧展开
    Scroller,//滑动
    XHeader,//头部
    Actionsheet,
    Group,
    Cell,
    ViewBox,
    Tab,
    TabItem
  },
  methods: {
    onClickMore () {
      this.showMenus = true
    },
    onItemClick(index){
      //console.log(index);
      if(index==0){
        this.$refs.music.src=music;
        this.$router.push({name:'localmusic',params:{id:1}});
        //还原另外两个图标
        this.$refs.cd.src=w_cd;
        this.$refs.mv.src=w_mv;
      };
      if(index==1){
        this.$refs.cd.src=cd;
        this.$router.push({name:'HomeIndex',params:{id:2}});
        //还原另外两个图标
        this.$refs.music.src=w_music;
        this.$refs.mv.src=w_mv;
      }
      if(index==2){
        this.$refs.mv.src=mv;
        this.$router.push('/MoreList');
        //还原另外两个图标
        this.$refs.cd.src=w_cd;
        this.$refs.music.src=w_music;
      }
    },
  },
  mounted () {
    
  },
  created() {
    
  },
  computed: {

  },
  data () {
    return {
      //是否显示导航
      isShowNav:true,
      //控制左侧菜单展开闭合
      drawerVisibility: false,
      //左侧菜单展开方式(push,overlay)
      showModeValue: 'overlay',
      //左侧菜单展开方向
      showPlacementValue: 'left',
      //控制右侧菜单显示隐藏
      showMenus: false,
      //右侧菜单内容
      menus: {
        menu1: '拍照',
        menu2: '从相册选择'
      },
      username:"VIP用户",
      mode:'夜间模式',
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
body {
  background-color: #fbf9fe;
}
div,p,ul,li,span,i,b,dl,dt,dd,a,img,html,body{
  box-sizing: border-box;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color: rgb(226, 13, 62);
}
.vux-header{
  background-color: #e20d3e!important;
}
.weui-cells{
  margin-top:0!important;
}
.vux-header-more{
  color:#fff!important;
}
.weui-cell:before,.weui-cells:after{
  border-bottom:none!important;
  border-top:none!important;
}
.cellStyl {
  background-color:#e20d3e;
  color:#fff;
}
.ltIcon,.rtIcon {
  border: 1px solid #fff;
  border-radius: 12px;
  font-style:normal;
  font-size:12px;
  color:#fff;
}
.headImg {
  width: 3em;
  height:3em;
  border-radius: 50%;
  border:1px solid #ddd;
}
.cell_font{
  font-size: 14px;
}
.icon_l{
  width: 1.4em;
  height: 1.4em;
  vertical-align: middle;
  margin-right: 1em;
}
.icon_2{
  width: 1.6em;
  height: 1.6em;
  vertical-align: middle;
}
.black{
  background-color: blue;
}
/*WE-VUE样式修改*/
.wv-tabs--line,.wv-tabs__nav,.wv-tab{
  background-color: #e20d3e!important;
}
.wv-tabs--line .wv-tabs__wrap{
  border:none!important;
  height:34px!important;
}
.wv-tab--active,.wv-tab--active span{
  color:#8af799!important;
}
.wv-tabs__line{
  background-color: #8af799!important;
}
.wv-tab {
  color:#fff!important;
}
/*VUX样式修改*/
.weui-grid__label{
  color:#fff!important;
  margin-top: 14px!important;
  font-size: 13px!important;
}
.clearfix:before,.clearfix:after{
  content: ".";
  display: block;
  height:0;
  width:0;
  visibility: hidden;
  clear: both;
}
.clearfix:before,.clearfix:after{
  *zoom:1;
}
</style>