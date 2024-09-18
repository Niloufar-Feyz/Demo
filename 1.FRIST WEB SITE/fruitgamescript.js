var playing = false;
var score;
var trialsleft;
var fruits = ["8531", "8532", "8535", "8536", "8537", "8538", "12999", "24328", "27364", "174097", "267379"];

$(function () {
    $("#startreset").click(function () {
        if (playing == true) {
            location.reload();
        } else {
            playing = true;
            score = 0;
            $("#scorevalue").html(score);
            $("#trialsleft").show();
            trialsleft = 3;
            addHeart();
            $("#startreset").html("Reset Game");
            startAction();
        }
    });
});
//functions

function addHeart() {
    for (i = 0; i < trialsleft; i++) {
        $("#trialsleft").append('<img class="life" src="images/heart.png "> ');
    }
}

function startAction() {
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({ left: 300, top: -100 });
}

function chooseFruit() {
    $("#fruit1").attr("src", "images/" + fruits[Math.round(10 * Math.random())] + ".png");
}
