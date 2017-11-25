function Vineria(){
  this.scrollerCounter = 0;
  this.scrollContentLength = $(".scrollContent > div").length;
  this.init = function(){
    $('.modal').modal();
    this.scroller();
    this.checkout();
  };
  this.scroller = function(){
    var self = this;
    var options = [
      {selector: '.gallery', offset: 100, callback: function() {
        $('.gallery').addClass("animated slideInLeft")
      } },
      {selector: '.address', offset: 100, callback: function() {
        $('.address').addClass("animated slideInLeft")
      } }
    ];
    Materialize.scrollFire(options);
  }
  this.checkout = function(){
    $("#modal1 .dec").click(function(event){
      event.stopPropagation();
      event.stopImmediatePropagation();
      var val = $(this).next('.count').val();
      var price = $(this).next('.count').data('price');
      val = (Number(val) > 1) ? --val : 1;
      $(this).next('.count').val(val);
      $(this).parent().find(".price").html((val * price) + " <span class='gel'>A</span>");
      var allCount = getAllCount();
      var sum = getSum();
      $("#count").html(allCount);
      $("#sum").html(sum);
    });

    $("#modal1 .enc").click(function(event){
      event.stopPropagation();
      event.stopImmediatePropagation();
      var val = $(this).prev('.count').val();
      var price = $(this).prev('.count').data('price');
      ++val;
      $(this).prev('.count').val(val);
      $(this).parent().find(".price").html((val * price) + " <span class='gel'>A</span>");
      var allCount = getAllCount();
      var sum = getSum();
      $("#count").html(allCount);
      $("#sum").html(sum);
    });

    function getAllCount(){
      var count = 0;
      $("#modal1 .count").each(function(){
        count += Number($(this).val());
      });
      return count;
    }
    function getSum(){
      var sum = 0;
      $("#modal1 .price").each(function(){
        sum += parseFloat($(this).html());
      });
      return sum;
    }
  }
}



$().ready(function(){
  var vineria = new Vineria();
  vineria.init();
});


function decreese(input){
  var val = $(input).val();
  val = (Number(val) > 1) ? --val : 1;
  $(input).val(val);
}

function encreese(input){
  var val = $(input).val();
  $(input).val(++val);
}
