//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    status: 0,
    currentPosition: "order0",
    imgUrls: [
      "/images/1.jpg",
      "/images/1.jpg",
      "/images/1.jpg"
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