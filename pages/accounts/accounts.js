// pages/accounts/accounts.js
var wpUserInfo = getApp().globalData.userInfo;
Page({
  data:{
    hidden:'true',
    IDinfoUrl:'../other/other',
    user:{
        nickName:'',
        avatarUrl:'',
        gender:''
        
    },
    info:[{
      titleLeft:'手机帐号绑定',
      titleRight:'安全升级',
      url:'../other/other',
      cls:'mg'
    },{
      titleLeft:'我的优惠券',
      titleRight:'兑换优惠券',
      url:'../other/other',
      cls:'brd'
    },{
      titleLeft:'我的购物车',
      url:'../other/other',
      cls:'brd'
    },{
      titleLeft:'我的订单',
      url:'../other/other',
      cls:'mg'
    },{
      titleLeft:'意见反馈',
      url:'../other/other',
      cls:'brd'
    },{
      titleLeft:'设置',
      url:'../other/other'
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    that.setUserInfo();
    console.log(that.data);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  //读取并写入用户信息
  setUserInfo:function(){
    this.setData({
      user:{
          nickName:wpUserInfo.nickName,
          avatarUrl:wpUserInfo.avatarUrl,
          gender:wpUserInfo.gender==1?'男':'女'
      }
    });
  }
})