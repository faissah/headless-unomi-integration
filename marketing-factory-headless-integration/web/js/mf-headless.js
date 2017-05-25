/**
 * Created by fabriceaissah on 5/22/17.
 */
$( document ).ready(function() {
    $( "#loginbutton" ).click(function() {
        $.getJSON("http://localhost:8181/context.json", {
            sessionId: "test123",
            profileId: "test123",
            time: "2pm"})
            .done(function (data) {
                console.log( "success" );
                alert("Data Loaded: " + data);
            });
    })


    $( "#loginbutton2" ).click(function() {
        $.getJSON("http://localhost:8181/context.json?sessionId=" + "asd", {
            events : [{
                eventType : "login",
                timeStamp : "2017-05-11T15:26:55Z",
                properties : { },
                source : null,
                target : {
                    itemId : "example-user-id",
                    itemType : "exampleUser",
                    properties : {
                        preferredLanguage : "en",
                        email : "shuber@jahia.com",
                        firstName : $('#firstname').val(),
                        lastName : $('#lastname').val(),
                        }
                    }
                }]
        })
        .done(function (data) {
            console.log( "success" );
            alert("Data Loaded: " + data);
        });
    })
});