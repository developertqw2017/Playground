//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    status: 0,
    currentPosition: "order0",
    imgUrls: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508935678153&di=1a0d967b8bff6cdb6ac045c9c4c659c2&imgtype=0&src=http%3A%2F%2Fpic.lvmama.com%2Fpics%2Fsuper%2F2014%2F06%2FX5YDK.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508935665171&di=9098cd40c214a0720f746635e1c499d4&imgtype=0&src=http%3A%2F%2Fpic3.40017.cn%2Fscenery%2Fdestination%2F2015%2F08%2F05%2F18%2F0BB0jX.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508901491100&di=182706eb086c22f0b3039890b7d7036c&imgtype=0&src=http%3A%2F%2Fm2.tuniucdn.com%2Ffb2%2Ft1%2FG2%2FM00%2F75%2FD7%2FCii-TFhbx5eII3hrAATcRSxGoLcAAF5OgCpt6UABNxd444.JPG"
    ]
  },
  changeMenu: function (e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      status: index,
      currentPosition: "order" + index
    })
  },
  scrollBottom: function () {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    setTimeout(function () {
      wx.hideLoading();
    }, 1000)
  },
  previewImages: function () {
    wx.previewImage({
      current: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508901491100&di=182706eb086c22f0b3039890b7d7036c&imgtype=0&src=http%3A%2F%2Fm2.tuniucdn.com%2Ffb2%2Ft1%2FG2%2FM00%2F75%2FD7%2FCii-TFhbx5eII3hrAATcRSxGoLcAAF5OgCpt6UABNxd444.JPG',
      urls: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508901491100&di=182706eb086c22f0b3039890b7d7036c&imgtype=0&src=http%3A%2F%2Fm2.tuniucdn.com%2Ffb2%2Ft1%2FG2%2FM00%2F75%2FD7%2FCii-TFhbx5eII3hrAATcRSxGoLcAAF5OgCpt6UABNxd444.JPG',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508901491100&di=182706eb086c22f0b3039890b7d7036c&imgtype=0&src=http%3A%2F%2Fm2.tuniucdn.com%2Ffb2%2Ft1%2FG2%2FM00%2F75%2FD7%2FCii-TFhbx5eII3hrAATcRSxGoLcAAF5OgCpt6UABNxd444.JPG',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508901491100&di=182706eb086c22f0b3039890b7d7036c&imgtype=0&src=http%3A%2F%2Fm2.tuniucdn.com%2Ffb2%2Ft1%2FG2%2FM00%2F75%2FD7%2FCii-TFhbx5eII3hrAATcRSxGoLcAAF5OgCpt6UABNxd444.JPG',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508901491100&di=182706eb086c22f0b3039890b7d7036c&imgtype=0&src=http%3A%2F%2Fm2.tuniucdn.com%2Ffb2%2Ft1%2FG2%2FM00%2F75%2FD7%2FCii-TFhbx5eII3hrAATcRSxGoLcAAF5OgCpt6UABNxd444.JPG'
      ],
    })
  }
})