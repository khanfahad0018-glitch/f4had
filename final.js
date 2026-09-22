/* =========================================================
   FITZONE — MEMBER 5
   FINAL INTEGRATION & TESTING
========================================================= */


/* =========================================================
   WEBSITE INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("=================================");
    console.log("🔥 FITZONE WEBSITE INITIALIZED");
    console.log("=================================");


    checkWebsite();


    updateFooterYear();


    setupNavigation();


    setupPlanCards();


    checkMobileDevice();

});


/* =========================================================
   WEBSITE TESTING
========================================================= */

function checkWebsite() {

    const requiredElements = [

        {
            name: "Home Section",
            selector: "#home"
        },

        {
            name: "BMI Calculator",
            selector: "#bmi"
        },

        {
            name: "Body Fat Calculator",
            selector: "#bodyfat"
        },

        {
            name: "Diet Section",
            selector: "#diet"
        },

        {
            name: "Workout Section",
            selector: "#workout"
        },

        {
            name: "Exercise Library",
            selector: "#exercises"
        },

        {
            name: "Nutrition Section",
            selector: "#nutrition"
        },

        {
            name: "About Section",
            selector: "#about"
        },

        {
            name: "Contact Section",
            selector: "#contact"
        }

    ];


    requiredElements.forEach(function (element) {

        const section =
            document.querySelector(
                element.selector
            );


        if (section) {

            console.log(
                "✅ " + element.name + " found"
            );

        } else {

            console.error(
                "❌ " + element.name + " missing"
            );

        }

    });

}


/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

    const links =
        document.querySelectorAll(
            ".nav-menu a"
        );


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                links.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add("active");

            }
        );

    });

}


/* =========================================================
   DIET & WORKOUT CARD INTERACTION
========================================================= */

function setupPlanCards() {

    const cards =
        document.querySelectorAll(
            ".plan-card"
        );


    cards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                cards.forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                this.classList.add(
                    "selected"
                );


                console.log(
                    "Selected plan:",
                    this.innerText
                );

            }
        );

    });

}


/* =========================================================
   FOOTER YEAR
========================================================= */

function updateFooterYear() {

    const year =
        new Date().getFullYear();


    const footer =
        document.querySelector(
            "footer"
        );


    if (footer) {

        const yearElement =
            footer.querySelector(
                ".current-year"
            );


        if (yearElement) {

            yearElement.textContent =
                year;

        }

    }

}


/* =========================================================
   DEVICE CHECK
========================================================= */

function checkMobileDevice() {

    const isMobile =
        window.innerWidth <= 768;


    if (isMobile) {

        console.log(
            "📱 Mobile device detected"
        );

    } else {

        console.log(
            "💻 Desktop device detected"
        );

    }

}


/* =========================================================
   WINDOW RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth <= 768) {

            console.log(
                "📱 Mobile layout active"
            );

        }

    }
);


/* =========================================================
   FINAL PROJECT MESSAGE
========================================================= */

console.log(
    "🚀 FitZone final integration loaded successfully!"
);