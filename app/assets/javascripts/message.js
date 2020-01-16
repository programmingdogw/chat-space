$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
      `<div class="message" data-message-id=${message.id}>
        <div class="message__upperside">
          <div class="username">
            ${message.user_name}
          </div>
          <div class="timestamp">
            ${message.created_at}
          </div>
        </div>
        <div class="message__lowerside">
            ${message.content}
        </div>
        <img src=${message.image} >
       </div>`
      return html;
    } else {
      var html =
      `<div class="message" data-message-id=${message.id}>
        <div class="message__upperside">
          <div class="username">
            ${message.user_name}
          </div>
          <div class="timestamp">
            ${message.created_at}
          </div>
        </div>
        <div class="message__lowerside">
            ${message.content}
        </div>`
        return html;
    };
  };

  var reloadMessages = function(){
    last_message_id = $('.message:last').data("message-id");
    $.ajax({ 
      url: "api/messages",
      type: 'get',
      dataType: 'json',  
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        var insertHTML = ''; 
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.main__body').append(insertHTML);
        $('.main__body').animate({ scrollTop: $('.main__body')[0].scrollHeight});
        $("newmessage")[0].reset();
        $(".newmessage__submitbtn").prop("disabled", false);
      }
    })
    .fail(function() {
      console.log('error');
    });
  };

  $('.newmessage').on('submit', function(e){
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
      $('.main__body').append(html); 
      $('.main__body').animate({ scrollTop: $('.main__body')[0].scrollHeight});     
      $('.newmessage')[0].reset();
      $('.newmessage__submitbtn').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    })
  });
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});
