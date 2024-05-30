const body = document.querySelector("body");

body.addEventListener(
    "mousemove",
    function(event) {
        let xPos = event.offsetX;
        let yPos = event.offsetY;
        let span = document.createElement("span");
        let size = Math.random() * 100 + 1;

        span.style.height = size + "px";
        span.style.width = size + "px";
        span.style.left = xPos + "px";
        span.style.top = yPos + "px";
        body.appendChild(span);

        setTimeout(
            function() {
                span.remove();
            }, 
            3000
        );
    }
);