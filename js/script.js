function submitMessage() {
          jQuery.support.cors = true;
          $.ajax({
            url: "http://joaofelipes.duckdns.org/api/copy/send_message",
            crossDomain: true,
            type: "POST",
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

function getMessage() {
    jQuery.ajax({
            url: "http://joaofelipes.duckdns.org/api/copy/get_message",
            crossDomain: true,
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            success: function(resultData) {
                    $("#message").val(resultData);
                    //console.log(resultData);
            },
            error : function(jqXHR, textStatus, errorThrown) {
            },
            timeout: 120000,
    });
}

$( document ).ready(function(){
    $( ".btnok" ).on( "click", submitMessage );
    $( ".btnget" ).on( "click", getMessage );
});



