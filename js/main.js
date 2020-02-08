
//ナビバーをクリックしたら移動
$(.nav-link).on("click", (e) => {
  e.preventDefault();

  const tabId = $(e.currentTarget).attr('href');
  const contentsTop = $(tabId).offset().top;
  $('html, body').animate({ scrollTop: contentsTop }, 1000);
});