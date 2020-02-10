
//ふわっと出現する
$('.animated').waypoint({
  handler: function(direction) {
    if(direction === 'down') {
      $(this.element).addClass('fadeInUp');
      this.destroy();
    }
  },
  offset: '100%',
});

//ナビバーをクリックしたら移動
$('.nav-link').on("click", (e) => {
  e.preventDefault();
  
  const tabId = $(e.currentTarget).attr('href');
  const contentsTop = $(tabId).offset().top;
  $('html, body').animate({ scrollTop: contentsTop }, 600);

  // ハンバーガーメニューを閉じる
  $('.navbar-collapse').collapse('hide');
});
