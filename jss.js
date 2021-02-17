
$(function () {
    $("#add").click(function () {
        var value = parseInt($(".myspan").text()) + 1;
        if (value <= 10) {
            $(".myspan").text(value);
            eod(value);
        }

    });
    $("#Subs").click(function () {

        var value = parseInt($(".myspan").text()) - 1;
        if (value >= 0) {
            $(".myspan").text(value);
            eod(value);
        }

    });
    $("#Reset").click(function () {
        var value = parseInt($(".myspan").text()) * 0;
        $(".myspan").text(value);
        eod(value);
    });

    function eod(value) {
        if (value % 2 == 0) {
            $(".content").css("background-color", "yellow");
            $(".myspan").css("color", "white");
        }
        else {
            $(".content").css("background-color", " grey");
            $(".myspan").css("color", "red");
        }
    }
});
