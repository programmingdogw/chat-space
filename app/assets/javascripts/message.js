$(function(){
  function buildHTML(comment){
    var html = `
    
    `
// 上のテンプレートリテラル部分に必要なHTML組み立てて置いて、後で、データ受け取ったdoneでまた組み立てて
// appendして、テキストの部分からにして、ボタン押せるようにして返す
// のかと思ったが、模範解答はappendしてないな、積み重なってうまくいくのか？？
// まぁそこは後で作るのかもしれんが、後はフォームからdataで受け取ったデータをメッセージ部分にレンダリングすればいいはず
// メインの部分とサイドの部分両方のデータが変わるかはよくわからんが、とにかくレンダリングできるようにならないと
// 解答は恐らくメインボディのメッセージ部分しかレンダリングしてないと思う
// まぁ続き読んでから実装した方が良さそうだ

    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data); 
      $('.comments').append(html);
      $('.textbox').val('');
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  });
});
