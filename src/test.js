jQuery.noConflict(); //将变量$的控件权移交给别的类库，避免冲突
(function($) {
  //定义匿名函数并设置形参为$
  $(function() {
    //匿名函数内部的$均为jQuery, 可以继续使用$()方法了
    $('*').on('click', function(e) {
      e.stopPropagation();
      var $vm = $(this);
      $vm.addClass('text-danger');
      setTimeout(() => {
        $vm.removeClass('text-danger');
      }, 1000);
    });
  });
})(jQuery); //使用匿名函数且传递实参jQUery
