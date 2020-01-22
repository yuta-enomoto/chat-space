$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html = 
        `<div class="main-chat__messages__message" data-message-id=${message.id}>
           <div class="main-chat__messages__message__upper-message">
             <div class="main-chat__messages__message__upper-message__user-name">
               ${message.user_name}
             </div>
             <div class="main-chat__messages__message__upper-message__date">
               ${message.created_at}
             </div>
           </div>
           <div class="main-chat__messages__message__lower-message">
             <p class="lower-message__content">
               ${message.content}
             </p>
           </div>
           <img src=${message.image} >
         </div>`
    } else {
      var html =
        `<div class="main-chat__messages__message" data-message-id=${message.id}>
           <div class="main-chat__messages__message__upper-message">
             <div class="main-chat__messages__message__upper-message__user-name">
               ${message.user_name}
             </div>
             <div class="main-chat__messages__message__upper-message__date">
               ${message.created_at}
             </div>
           </div>
           <div class="main-chat__messages__message__lower-message">
             <p class="lower-message__content">
               ${message.content}
             </p>
           </div>
         </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
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
        $('.main-chat__messages').append(html);      
        $('form')[0].reset();
        $('.main-chat__messages').animate({ scrollTop: $('.main-chat__messages')[0].scrollHeight});
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
      })
      .always(() => {
        $(".main-chat__form__submit").removeAttr("disabled");
      });
  })
});