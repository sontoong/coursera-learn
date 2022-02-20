    $(function() {
        
        function sayHello(event) {
            this.textContent = "ouch";
            var name = document.getElementById("name").value;
            var message = "<h2>Hello " + name + ".</h2>";

            document.getElementById("content").innerHTML = message;
            
            if (name === "vo minh thang") {
                var title = document.querySelector("h1").innerHTML;
                title = "Hi boss";
                document.querySelector("h1").innerHTML = title;
            }

            else {
                var title2 = document.querySelector("h1").innerHTML;
                title2 = "Hi fdafsagrsgsrg"
                document.querySelector("h1").innerHTML = title2;
            } 
        }
        document.querySelector("#nameinput").addEventListener("click", sayHello);

        document.querySelector("body").addEventListener("mousemove", 
            function(event) {
                if (event.shiftKey === true) {
                    console.log("x= " + event.clientX);
                    console.log("y= " + event.clientY);
                }
            }
        );
        $("#button1").blur(function (event) {
            var screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                $("#navbarSupportedContent").collapse('hide');
            }
        });
    }
);