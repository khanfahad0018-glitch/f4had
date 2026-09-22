/* =========================================================
   FITZONE — MEMBER 3
   JAVASCRIPT / CALCULATORS / INTERACTIONS
========================================================= */


/* =========================================================
   BMI CALCULATOR
========================================================= */

const bmiButton = document.querySelector(
    "#bmi .calculator-box button"
);

if (bmiButton) {

    bmiButton.addEventListener("click", function () {

        const weight = parseFloat(
            document.getElementById("weight").value
        );

        const height = parseFloat(
            document.getElementById("height").value
        );

        const result =
            document.getElementById("bmiResult");


        if (
            isNaN(weight) ||
            isNaN(height) ||
            weight <= 0 ||
            height <= 0
        ) {

            result.innerHTML =
                "⚠️ Please enter a valid weight and height.";

            return;
        }


        const heightInMeters =
            height / 100;


        const bmi =
            weight /
            (heightInMeters * heightInMeters);


        const roundedBMI =
            bmi.toFixed(1);


        let category = "";


        if (bmi < 18.5) {

            category = "Underweight";

        }

        else if (bmi < 25) {

            category = "Normal Weight";

        }

        else if (bmi < 30) {

            category = "Overweight";

        }

        else {

            category = "Obesity";

        }


        result.innerHTML = `

            <strong>Your BMI: ${roundedBMI}</strong>

            <br><br>

            Category:
            <strong>${category}</strong>

        `;

    });

}


/* =========================================================
   BODY FAT CALCULATOR
========================================================= */

const bodyFatButton = document.querySelector(
    "#bodyfat .calculator-box button"
);

if (bodyFatButton) {

    bodyFatButton.addEventListener("click", function () {

        const age =
            parseFloat(
                document.getElementById("age").value
            );


        const gender =
            document.getElementById("gender").value;


        const weight =
            parseFloat(
                document.getElementById("bodyWeight").value
            );


        const height =
            parseFloat(
                document.getElementById("height").value
            );


        const result =
            document.getElementById("bodyFatResult");


        if (
            isNaN(age) ||
            isNaN(weight) ||
            isNaN(height) ||
            age <= 0 ||
            weight <= 0 ||
            height <= 0 ||
            gender === ""
        ) {

            result.innerHTML =
                "⚠️ Please enter all required information.";

            return;
        }


        const heightMeters =
            height / 100;


        const bmi =
            weight /
            (heightMeters * heightMeters);


        let sex;


        if (gender === "male") {

            sex = 1;

        } else {

            sex = 0;

        }


        /*
            Educational estimate based on
            BMI, age and sex.

            This is NOT a medical measurement.
        */

        const bodyFat =
            (1.20 * bmi) +
            (0.23 * age) -
            (10.8 * sex) -
            5.4;


        const rounded =
            bodyFat.toFixed(1);


        result.innerHTML = `

            <strong>
                Estimated Body Fat:
                ${rounded}%
            </strong>

            <br><br>

            <small>
                Educational estimate only.
            </small>

        `;

    });

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.querySelector(
        "#contact .contact-form form"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name")
                .value
                .trim();


            const email =
                document.getElementById("email")
                .value
                .trim();


            const message =
                document.getElementById("message")
                .value
                .trim();


            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                alert(
                    "⚠️ Please fill in all fields."
                );

                return;

            }


            alert(
                `Thank you, ${name}! Your message has been submitted.`
            );


            contactForm.reset();

        }
    );

}


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

const navigationLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navigationLinks.forEach(
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


/* =========================================================
   BUTTON CLICK EFFECT
========================================================= */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            this.style.transform =
                "scale(0.96)";


            setTimeout(
                () => {

                    this.style.transform =
                        "";

                },
                120
            );

        }
    );

});


/* =========================================================
   PAGE LOAD MESSAGE
========================================================= */

console.log(
    "🔥 FitZone JavaScript loaded successfully!"
);

console.log(
    "BMI Calculator: Ready"
);

console.log(
    "Body Fat Calculator: Ready"
);

console.log(
    "Contact Form: Ready"
);