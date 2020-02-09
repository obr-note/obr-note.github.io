
var $j = jQuery.noConflict(true);


//ふわっと出現する
$j('.animated').waypoint({
  handler: function(direction) {
    if(direction === 'down') {
      $j(this.element).addClass('fadeInUp');
      this.destroy();
    }
  },
  offset: '100%',
});

//ナビバーをクリックしたら移動
$j(.nav-link).on("click", (e) => {
  e.preventDefault();

  const tabId = $j(e.currentTarget).attr('href');
  const contentsTop = $j(tabId).offset().top;
  $j('html, body').animate({ scrollTop: contentsTop }, 600);
});