$("a[href='#home']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


$("a[href='#sobre']").click(function() {
  $("html, body").animate({ scrollTop: $("#sobre").offset().top }, "slow");
  return false;
});

$("a[href='#solucoes']").click(function() {
  $("html, body").animate({ scrollTop: $("#solucoes").offset().top }, "slow");
  return true;
});

$("a[href='#clientes']").click(function() {
  $("html, body").animate({ scrollTop: $("#clientes").offset().top }, "slow");
  return true;
});

$("a[href='#contatos']").click(function() {
  $("html, body").animate({ scrollTop: $("#contatos").offset().top }, "slow");
  return true;
});