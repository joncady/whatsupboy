(function() {

    window.onload = function() {
        var snd = new Audio("whatsupboy.mp3");
        document.getElementById("boy").addEventListener("click", function() {
            snd.play();  
        });
    }

})();