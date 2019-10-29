$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: false
        };
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger

        }).then(function() {
            console.log("New Burger Added!")
            location.reload();
        })
    });
});