$(function(){

});

function clearText(){
    $('#result').empty();
}

function send(){
    $.ajax({
        url: "/getAll",
        type: "get", //send it through get method
        data:{delay:$('#delay').val(),data:$('#data').val()},
        success: function(data) {
            //Do Something
            $('#result').append(data);
        },
        error: function(xhr) {
            //Do Something to handle error
        }
    });
}
