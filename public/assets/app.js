$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger

        }).then(function() {
            console.log("New Burger Added!")
            location.reload();
        })
    });

    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
    
        var devChange = {
            devoured: true
        };
    
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devChange
        }).then(function() {
            location.reload();
        })
    })
});

