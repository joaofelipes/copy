function submitMessage() {
    const currentTime = firebase.firestore.FieldValue.serverTimestamp();
    db.collection("TextPieces").add({
        date: currentTime,
        text: $("#message").val()
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        notify("Text was save!");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        notify("Error saving text.")
    });
 }

function getMessage() {
    var resultData;
    try {
        db.collection("TextPieces").orderBy("date", "desc").limit(1).get().then(function(results) {
            results.forEach(function(doc) {
                $("#message").val(doc.data().text);
            });
        });;
        notify("Text was recovered.");
    }
    catch {
        notify("Error fetching data.");
    };
}

function copyMessage() {
    var copyText = document.getElementById("message");
    copyText.select();
    document.execCommand("copy");
    notify("Text was sent do clipboard.")
}


function notify (message) {
    var notification = document.querySelector('.mdl-js-snackbar');
    notification.MaterialSnackbar.showSnackbar(
      {
        message: message,
        timeout: 2000,
        actionHandler: function(event) {},
        actionText: 'Done'
      }
    );    

}

function dummie (){}

$( document ).ready(function(){
    $( "#btnsave" ).on( "click", submitMessage );
    $( "#btnget" ).on( "click", getMessage );
    $( "#btncopy" ).on( "click", copyMessage );
});



