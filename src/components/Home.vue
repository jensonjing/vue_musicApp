<template>
    <div class="cont_page">
        <!-- 导航 -->
        <wv-tabs v-model="active">
            <!-- 第一页 -->
            <wv-tab class='tabs' title='推荐'>
                <!-- 轮播 -->
                <div class="swiper_wrap">
                    <wv-swipe :height="130" :autoplay="4000">
                        <wv-swipe-item v-for="(item,i) in imgs" :key=i>
                            <img style="width:100%;height:100%;" :src='item'>
                        </wv-swipe-item>
                    </wv-swipe>
                </div>
                <!-- 跳转导航 -->
                <grid :show-lr-borders='false' :show-vertical-dividers='false'>
                    <grid-item :label="item.tile" v-for="(item,i) in icons" :key=i>
                        <img style="background-color:#f37979;padding:5px;vertical-align:middle;margin-left:-4px;border-radius:50%;" slot="icon" :src='item.src'>
                    </grid-item>
                </grid>
                <div class="swiper_wrap">
                    <router-link to="/MusicList" style="color:#fff;">推荐歌单<i style="font-size: 20px;font-style: normal;margin-left: 0.4em;">></i></router-link>
                    <ul class="pic_box clearfix">
                        <li v-for="(item,i) in datas" :key=i>
                            <img :src="item.src">
                            <div class="icon_tip">
                                <img :src="item.song"><i>{{item.num}}</i>
                            </div>
                            <span class="ell">{{item.title}}</span>
                        </li>
                    </ul>
                </div>
                <div class="swiper_wrap">
                    <router-link to="/MusicList" style="color:#fff;">最新音乐<i style="font-size: 20px;font-style: normal;margin-left: 0.4em;">></i></router-link>
                    <ul class="pic_box clearfix">
                        <li v-for="(item,i) in newdatas" :key=i>
                            <img :src="item.src">
                            <div class="icon_tip">
                                <img :src="item.song"><i>{{item.num}}</i>
                            </div>
                            <span class="ell ell1">{{item.title}}</span>
                            <span class="ell explain">{{item.tip}}</span>
                        </li>
                    </ul>
                </div>
            </wv-tab>
            <!-- 第二页 -->
            <wv-tab class='tabs' title='朋友'>
                <div>
                    <ul class="friend_page">
                        <li v-for="(item,i) in f_datas" :key='i'>
                            <h4 class="f_haead">
                                <img class="wy_icon" :src='item.src'>
                                <span class='fh_right'>
                                    <b>{{item.autor}}</b>
                                    <i>{{item.time}}</i>
                                </span>
                            </h4>
                            <p class='main_page'>{{item.content}}</p>
                            <div class='page_img'>
                                <img :src='item.pic'>
                            </div>
                            <span class="song_play">
                                <img :src='item.tip'>
                                <div class='fh_right'>
                                    <b>{{item.name}}</b>
                                    <i>{{item.c_name}}</i>
                                </div>
                            </span>
                            <div class="mes_box">
                                <span>
                                    <img :src='item.icon_1'>
                                    <b>{{item.num1}}</b>
                                </span>
                                <span>
                                    <img :src="item.icon_2">
                                    <b>{{item.num2}}</b>
                                </span>
                                <span>
                                    <img :src="item.icon_3">
                                    <b>{{item.num3}}</b>
                                </span>
                                <span style="width:20%;text-align:right;">
                                    <img :src="item.share">
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </wv-tab>
            <!-- 第三页 -->
            <wv-tab class='tabs' title='电台'>
                
            </wv-tab>
        </wv-tabs>
    </div>
</template>

<script>
import { Grid,GridItem } from 'vux';
export default {
    name:'HomeIndex',
    components:{
        Grid,
        GridItem
    },
    data(){
        return{
            active:0,
            imgs:[
                require('../img/1.jpg'),
                require('../img/2.jpg'),
                require('../img/3.jpg'),
                require('../img/4.jpg'),
                require('../img/5.jpg'),
                require('../img/6.jpg'),
                require('../img/7.jpg')
            ],
            icons:[
                { tile:'私人FM',src:require('../assets/sound.svg') },
                { tile:'每日推荐',src:require('../assets/date_book.svg') },
                { tile:'歌单',src:require('../assets/music_list.svg') },
                { tile:'排行榜',src:require('../assets/play_list.svg') },
            ],
            datas:[
                {title:'金庸之后，已无江湖',src:require('../img/001.jpg'),song:require('../assets/headset.svg'),num:'215万'},
                {title:'身前哪管身后事，浪得几日是几日',src:require('../img/002.jpg'),song:require('../assets/headset.svg'),num:'32万'},
                {title:'90后的回忆杀-[持续更新]',src:require('../img/003.jpg'),song:require('../assets/headset.svg'),num:'55万'},
                {title:'怀旧向11时时光流转从前，人生如寄',src:require('../img/004.jpg'),song:require('../assets/headset.svg'),num:'45万'},
                {title:'写在民谣中的岁月缓缓流淌',src:require('../img/005.jpg'),song:require('../assets/headset.svg'),num:'34万'},
                {title:'剑网三剧情歌（史上最全版本）',src:require('../img/006.jpg'),song:require('../assets/headset.svg'),num:'48万'}
            ],
            newdatas:[
                {title:'根据你的口味推荐',tip:'推荐合口味的新歌',src:require('../img/new_1.jpg'),song:require('../assets/headset.svg'),num:'22万'},
                {title:'别BB',tip:'CNBALLER',src:require('../img/new_2.jpg'),song:require('../assets/headset.svg'),num:'28万'},
                {title:'遇情怀',tip:'变奏的梦想',src:require('../img/new_3.jpg'),song:require('../assets/headset.svg'),num:'27万'},
                {title:'Chain Reaction',tip:'崔开潮',src:require('../img/new_4.jpg'),song:require('../assets/headset.svg'),num:'39万'},
                {title:'为你写诗',tip:'汪苏泷/周杰琼',src:require('../img/new_5.jpg'),song:require('../assets/headset.svg'),num:'55万'},
                {title:'PlanB',tip:'徐圣恩',src:require('../img/new_6.jpg'),song:require('../assets/headset.svg'),num:'64万'}
            ],
            f_datas:[
                { 
                    src:require('../assets/wyy.jpg'),
                    autor:'网易云音乐转发：',
                    time:'34分钟前',
                    content:'忘了什么时候开始'+
                    '到清晨才能入睡，'+
                    '也忘了什么叫做结尾'+
                    '又有谁在乎呢，'+
                    '凌晨三点的窗前'+
                    '播放着那段时光，'+
                    '有一个骄傲的少年'+
                    '隐藏他的青春，'+
                    '嗯……'+
                    '不如让我忘了自己'+
                    '你觉得怎么样呢，'+
                    '在每个向往的地方'+
                    '释然一个遗憾，'+
                    '躺在我怀里的吉他'+
                    '好像厌倦了我，'+
                    '复最熟悉的段落'+
                    '好像无话可说，'+
                    '这生命正值春光'+
                    '别装作刀枪不入的模样，'+
                    '别错过年轻的疯狂'+
                    '时光很匆忙，'+
                    '别错过日落和夕阳'+
                    '不论在哪里呀，'+
                    '来不及认真的年轻过'+
                    '就认真的老去，'+
                    '又一次和你擦肩而过'+
                    '一毫米的距离，'+
                    '请你（让我）再次抱起吉他'+
                    '为你唱那一首歌，'+
                    '重复最熟悉的段落'+
                    '就当明天不在，'+
                    '没有永远的年轻'+
                    '没有唱不完的歌，'+
                    '当所有人都离去'+
                    '我也将要离去，'+
                    '这生命正值春光'+
                    '别装作刀枪不入的模样'+
                    '别错过年轻的疯狂，'+
                    '时光很匆忙'+
                    '别错过日落和夕阳'+
                    '不论在哪里呀'+
                    '来不及认真的年轻过'+
                    '就认真的老去'+
                    '又一次和你擦肩而过'+
                    '一毫米的距离'+
                    '别错过年轻的疯狂'+
                    '时光很匆忙'+
                    '别错过日落和夕阳'+
                    '不论在哪里呀'+
                    '来不及认真的年轻过'+
                    '就认真的老去'+
                    '又一次和你无话不说'+
                    '开始对话以前',
                    pic:require('../img/rzlq.jpg'),
                    tip:require('../assets/t1.jpg'),
                    name:'认真的老去',
                    c_name:'张希/曹方',
                    icon_1:require('../assets/nice.svg'),
                    icon_2:require('../assets/message.svg'),
                    icon_3:require('../assets/share.svg'),
                    share:require('../assets/ells.png'),
                    num1:'236',
                    num2:'28',
                    num3:'547'
                },
                { 
                    src:require('../assets/wyy.jpg'),
                    autor:'网易云音乐转发：',
                    time:'20分钟前',
                    content:'可惜在遇见我那天你并不快乐，可能是因为我们相遇的太晚了，'+
                    '可是我要走了 可温暖要走了，可否有另一个我在你身后给予快乐，'+
                    '可当我牵着你的手傻乎乎的乐，渴望的爱情终于在我生命出现了，'+
                    '可时间倒数了 ，可你的答案停住了，'+
                    '可想到你的脸我还是很快乐，可能你不快乐 ，可惜你不快乐，'+
                    '可能是我的爱情它来的太晚了，可它给了你些什么， 你是不是真快乐，'+
                    '可要听我的话别再为它犯傻了，可能你不快乐 ，可我要你快乐，'+
                    '可能是我的爱情它来的太晚了，可我只想对你说 ，我绝对不退出了，'+
                    '可以让你快乐是我的快乐，'+
                    '可当我牵着你的手傻乎乎的乐，渴望的爱情终于在我生命出现了，'+
                    '可时间倒数了 ，可你的答案停住了，'+
                    '可想到你的脸我还是很快乐，可能你不快乐 ，可惜你不快乐，'+
                    '可能是我的爱情它来的太晚了，可它给了你些什么  你是不是真快乐，'+
                    '可要听我的话别再为它犯傻了，可能你不快乐， 可我要你快乐，'+
                    '可能是我的爱情它来的太晚了，可我只想对你说 ，我绝对不退出了，'+
                    '可以让你快乐是我的快乐，可能你不快乐，可惜你不快乐，'+
                    '可能是我的爱情它来的太晚了，可它给了你些什么 ，你是不是真快乐，'+
                    '可要听我的话别再为它犯傻了，可能你不快乐 ，可我要你快乐，'+
                    '可能是我的爱情它来的太晚了,'+
                    '可我只想对你说 我绝对不退出了，'+
                    '可以让你快乐是我的快乐',
                    pic:require('../img/cocke.jpg'),
                    tip:require('../assets/t1.jpg'),
                    name:'可乐',
                    c_name:'赵紫骅',
                    icon_1:require('../assets/nice.svg'),
                    icon_2:require('../assets/message.svg'),
                    icon_3:require('../assets/share.svg'),
                    share:require('../assets/ells.png'),
                    num1:'236',
                    num2:'2800',
                    num3:'547'
                },
                { 
                    src:require('../assets/wyy.jpg'),
                    autor:'网易云音乐转发：',
                    time:'34分钟前',
                    content:'DNF撒大苏打领卡点击啊离开是快乐的就是快乐到家啊肯定卡桑德拉是的撒大苏打卡死了肯德基阿斯利康的教科书的',
                    pic:require('../img/006.jpg'),
                    tip:require('../assets/t1.jpg'),
                    name:'The Fire',
                    c_name:'吉克隽逸',
                    icon_1:require('../assets/nice.svg'),
                    icon_2:require('../assets/message.svg'),
                    icon_3:require('../assets/share.svg'),
                    share:require('../assets/ells.png'),
                    num1:'236',
                    num2:'28',
                    num3:'547'
                }
            ]
        }
    },
    created() {
        
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>

<style scoped>
    ul,li{
        list-style: none;
    }
    i,b{
        font-style: normal;
        font-weight: 400;
    }
    .swiper_wrap{
        padding:0 8px;
        padding-top: 10px;
    }
    .weui-grids:before{
        border:none!important;
    }
    .pic_box>li {
        width:32%;
        float:left;
        margin:10px 2px;
        position: relative;
    }
    .pic_box>li>img{
        width:100%;
        height:100%;
    }
    .pic_box>li>span{
        width:100%;
        display: inline-block;
        color:#fff;
        font-size: 12px;
    }
    .pic_box .ell{
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .pic_box .ell1 {
        white-space: nowrap;
    }
    .pic_box .icon_tip{
        position: absolute;
        top:0;
        right:4px;
        color:#fff;
        font-size: 12px;
    }
    .pic_box .icon_tip>img{
        width:16px;
        display: inline-block;
        vertical-align: middle;
        margin-right:5px;
    }
    .pic_box .explain {
        font-size: 12px;
        color:rgba(252, 252, 252, 0.5);
        margin-top:-6px;
        display: block;
    }
    .friend_page>li{
        padding:15px 8px;
    }
    .friend_page .wy_icon{
        width:35px;
        height:35px;
        border-radius: 50%;
    }
    .friend_page .f_haead{
        font-size: 14px;
        color:#fff;
    }
    .friend_page .f_haead .fh_right{
        display: inline-block;
    }
    .friend_page .f_haead .fh_right b,.friend_page .f_haead .fh_right i{
        display: block;
    }
    .friend_page .f_haead .fh_right i{
        font-size: 12px;
        color: rgba(255,255,255,0.5);
    }
    .friend_page .main_page{
        padding-left: 40px;
        color: #fff;
        font-size: 14px;
    }
    .friend_page .page_img{
        width:100%;
        box-sizing: border-box;
        padding-left: 36px;
    }
    .friend_page .page_img>img{
        max-width: 32%;
        margin: 2px 5px;
    }
    .friend_page>li{
        border-bottom: 1px solid rgba(252, 252, 252, 0.5);
    }
    .friend_page .song_play {
        display: block;
        margin-left: 38px;
        background-color: rgba(226, 43, 68, 0.5);
    }
    .friend_page .song_play>img{
        width: 40px;
        height: 40px;
        border-radius: 5px;
        vertical-align: middle;
    }
    .friend_page .song_play .fh_right{
        display: inline-block;
        vertical-align: middle;
    }
    .friend_page .song_play .fh_right b,.friend_page .song_play .fh_right i{
        color: #fff;
        display: block;
    }
    .friend_page .song_play .fh_right i{
        font-size: 12px;
        color: rgba(252, 252, 252, 0.5);
    }
    .friend_page .mes_box{
        padding-left: 40px;
    }
    .friend_page .mes_box span{
        display: inline-block;
        color: #fff;
        width: 25%;
    }
    .friend_page .mes_box span>img{
        width:22px;
        vertical-align: middle;
    }
    .friend_page .mes_box span>b{
        font-size: 12px;
    }
</style>