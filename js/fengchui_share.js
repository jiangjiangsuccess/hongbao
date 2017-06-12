
var wx_appId = "wxdac530b00df7a38c";
var wx_nonceStr = "fengchuikeji";
var wx_timestamp = Math.round(new Date().getTime() / 1000);
var wx_ShareURL = document.URL;
var wx_signStr = "";

loadWXSDK();

function loadWXSDK() {
    $.ajax({
        type: "POST",
        url: "http://wei.fengchui.com.cn/wxshare/api.aspx",
        data: {
            "appId": wx_appId,
            "timestamp": wx_timestamp,
            "nonceStr": wx_nonceStr,
            "url": wx_ShareURL
        },
        success: function (data) {
            wx_signStr = data.signStr;
        },
        error: function (e) {
            //alert("请求分享接口失败，请稍后再试！");
        },
        dataType: "json",
        async: false
    });

    wx.config({
        debug: false,
        appId: wx_appId,
        timestamp: wx_timestamp,
        nonceStr: wx_nonceStr,
        signature: wx_signStr,
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'hideMenuItems',
            'previewImage'
        ]
    });

    wx.ready(function () {

        var shareData = {
            title: wx_ShareTitle,
            desc: wx_ShareDesc,
            link: wx_RealShareURL,
            imgUrl: wx_SharePic
        };

        var shareTimelineData = {
            title: wx_Timeline_ShareTitle,
            desc: wx_ShareDesc,
            link: wx_RealShareURL,
            imgUrl: wx_SharePic
        };

        // 分享给朋友
        wx.onMenuShareAppMessage({
            title: shareData.title,
            desc: shareData.desc,
            link: shareData.link,
            imgUrl: shareData.imgUrl,
            trigger: function (res) {
                //shareData.link = wx_RealShareURL;
                //alert('用户点击发送给朋友');
            },
            success: function (res) {
                //alert('已分享');
            },
            cancel: function (res) {
                //alert('已取消');
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
            }
        });

        // 分享到朋友圈
        wx.onMenuShareTimeline({
            title: shareTimelineData.title,
            link: shareTimelineData.link,
            imgUrl: shareTimelineData.imgUrl,
            trigger: function (res) {
                //shareTimelineData.link = wx_RealShareURL;
                //alert('用户点击分享到朋友圈');
            },
            success: function (res) {
                //alert('已分享');
            },
            cancel: function (res) {
                //alert('已取消');
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
            }
        });

        //分享到QQ
        wx.onMenuShareQQ({
            title: shareData.title,
            desc: shareData.desc,
            link: shareData.link,
            imgUrl: shareData.imgUrl,
            trigger: function (res) {
                //shareData.link = wx_RealShareURL;
                //alert('用户点击分享到QQ');
            },
            complete: function (res) {
                //alert(JSON.stringify(res));
            },
            success: function (res) {
                //alert('已分享');
            },
            cancel: function (res) {
                //alert('已取消');
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
            }
        });

        // 分享到微博
        wx.onMenuShareWeibo({
            title: shareData.title,
            desc: shareData.desc,
            link: shareData.link,
            imgUrl: shareData.imgUrl,
            trigger: function (res) {
                //shareData.link = wx_RealShareURL;
                //alert('用户点击分享到微博');
            },
            complete: function (res) {
                //alert(JSON.stringify(res));
            },
            success: function (res) {
                //alert('已分享');
            },
            cancel: function (res) {
                //alert('已取消');
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
            }
        });

        //wx.onMenuShareAppMessage(shareData);
        //wx.onMenuShareTimeline(shareTimelineData);
        //wx.onMenuShareQQ(shareData);
        //wx.onMenuShareWeibo(shareData);

        wx.hideMenuItems({
            menuList: ["menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:facebook", "menuItem:share:QZone", "menuItem:copyUrl", "menuItem:openWithQQBrowser", "menuItem:openWithSafari", "menuItem:share:email"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        });
    });
    wx.error(function (res) {
        //alert("分享接口繁忙，请稍后再试！");
    });
}

//图片预览接口
function previewImg(cimg) {
    wx.previewImage({
        current: cimg,
        urls: ['http://wei.fengchui.com.cn/shangyao/third/images/fm.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_1.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_2.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_3.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_4.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_5.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_6.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_7.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_8.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_9.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_10.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_11.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_12.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_13.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_14.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_15.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_16.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_17.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_18.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_19.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_20.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_21.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_22.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_23.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_24.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_25.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_26.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_27.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_28.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_29.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_30.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_31.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_32.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_33.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_34.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_35.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_36.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_37.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_38.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_39.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_40.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_41.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_42.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_43.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/pic_44.jpg',
			'http://wei.fengchui.com.cn/shangyao/third/images/fd.jpg']
    });
}