/**
 * Created by fabriceaissah on 5/22/17.
 */
$( document ).ready(function() {

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    $( "#loginbutton" ).click(function() {
        $.getJSON("http://localhost:8181/context.json", {
            sessionId:  "session"+guid()})
            .done(function (data) {
                console.log( "success" );
                alert("Data Loaded: " + data.toString());
            });
    })


    $( "#loginbutton2" ).click(function() {
        $.getJSON("http://localhost:8181/context.json?sessionId=" + "session"+guid(), {
            events : [{
                eventType : "login",
                properties : { },
                source : null,
                target : {
                    itemId : "example-user-id",
                    itemType : "exampleUser",
                    properties : {
                        preferredLanguage : "en",
                        email :  $('#email').val(),
                        firstName : $('#firstname').val(),
                        lastName : $('#lastname').val(),
                        }
                    }
                }]
        })
        .done(function (data) {
            console.log( "success" );
            alert("Data Loaded: " + data.toString());
        });
    })

});