function submitMessage() {
    const currentTime = firebase.firestore.FieldValue.serverTimestamp();
    db.collection("TextPieces").add({
        date: currentTime,
        text: $("#message").val()
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
 }

function getMessage() {
    var resultData;
    db.collection("TextPieces").orderBy("date", "desc").limit(1).get().then(function(results) {
        results.forEach(function(doc) {
            $("#message").val(doc.data().text);
        });
    });;
}

$( document ).ready(function(){
    $( ".btnok" ).on( "click", submitMessage );
    $( ".btnget" ).on( "click", getMessage );
});



