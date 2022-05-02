$(document).ready(function(){
    $("#screen").load("page1.html")

    $(document).on("click", '#page1_button', function(event) { 
        $("#screen").load("page2.html")
    });

    $(document).on("click", '#page2_button', function(event) { 
        $("#screen").load("page1.html")
    });
});