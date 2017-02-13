function submitMessage() {
          jQuery.support.cors = true;
          $.ajax({
            url: "http://localhost/api/copy/send_message",
            crossDomain: true,
            type: "POST",
            //data: JSON.stringify(message),
            data: { message: $("#message").val() },
            dataType: "application/x-www-form-urlencoded",
            success: function (response) {
                var resp = JSON.parse(response)
                console.log(resp.status);
            },
            error: function (xhr, status) {
                console.log("Error: " + xhr.status);
            }
        });
}

$( document ).ready(function(){
    $( ".btnok" ).on( "click", submitMessage );

    jQuery.ajax({
            url: "http://localhost/api/copy/get_message",
            type: "GET",

            contentType: 'application/json; charset=utf-8',
            success: function(resultData) {
                    $("#message").val(resultData)
            },
            error : function(jqXHR, textStatus, errorThrown) {
            },

            timeout: 120000,
    });


});



