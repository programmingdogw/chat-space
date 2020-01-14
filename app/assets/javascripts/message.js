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
      $('.inputtext').val("");
      $('.newmessage').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  });
});
