/* =========================================================
   FITZONE — MEMBER 4
   DIET & WORKOUT PLANS
========================================================= */


/* =========================================================
   DIET PLANS
========================================================= */

const dietPlans = {

    weightLoss: {

        title: "Weight Loss Diet",

        meals: [

            "Breakfast: 3 Eggs + Oats + 1 Banana",

            "Lunch: 150g Chicken + 150g Rice + Vegetables",

            "Snack: Greek Yogurt + Fruits",

            "Dinner: 150g Chicken/Fish + Salad + 100g Rice"

        ],

        tip: "Focus on a calorie deficit and high protein intake."

    },


    muscleGain: {

        title: "Muscle Gain Diet",

        meals: [

            "Breakfast: 4 Eggs + Oats + Banana + Milk",

            "Lunch: 200g Chicken + 200g Rice + Vegetables",

            "Snack: Peanut Butter Sandwich + Milk",

            "Dinner: 200g Chicken/Fish + Rice + Vegetables"

        ],

        tip: "Eat enough calories and protein to support muscle growth."

    },


    healthy: {

        title: "Healthy Lifestyle Diet",

        meals: [

            "Breakfast: Eggs + Oats + Fruits",

            "Lunch: Chicken/Fish + Rice + Vegetables",

            "Snack: Yogurt + Fruits + Nuts",

            "Dinner: Protein Source + Vegetables + Carbohydrates"

        ],

        tip: "Maintain a balanced diet and stay hydrated."

    }

};


/* =========================================================
   WORKOUT PLANS
========================================================= */

const workoutPlans = {

    beginner: {

        title: "Beginner Workout",

        exercises: [

            "Bodyweight Squats — 3 × 12",

            "Push-Ups — 3 × 10",

            "Lat Pulldown — 3 × 12",

            "Dumbbell Shoulder Press — 3 × 10",

            "Dumbbell Bicep Curl — 3 × 12",

            "Plank — 3 × 30 seconds"

        ]

    },


    push: {

        title: "Push Day",

        exercises: [

            "Barbell Bench Press — 4 × 8",

            "Incline Dumbbell Press — 3 × 10",

            "Shoulder Press — 3 × 10",

            "Lateral Raises — 3 × 15",

            "Tricep Pushdown — 3 × 12",

            "Overhead Tricep Extension — 3 × 12"

        ]

    },


    pull: {

        title: "Pull Day",

        exercises: [

            "Lat Pulldown — 4 × 10",

            "Barbell Row — 3 × 8",

            "Seated Cable Row — 3 × 12",

            "Face Pull — 3 × 15",

            "Barbell Curl — 3 × 10",

            "Hammer Curl — 3 × 12"

        ]

    },


    legs: {

        title: "Leg Day",

        exercises: [

            "Barbell Squat — 4 × 8",

            "Leg Press — 3 × 10",

            "Romanian Deadlift — 3 × 10",

            "Leg Extension — 3 × 12",

            "Leg Curl — 3 × 12",

            "Standing Calf Raise — 4 × 15"

        ]

    }

};


/* =========================================================
   FITNESS TIPS
========================================================= */

const fitnessTips = [

    "Stay consistent. Results take time.",

    "Protein is important for muscle recovery.",

    "Drink enough water throughout the day.",

    "Progressive overload helps build muscle.",

    "Sleep 7–9 hours for better recovery.",

    "Warm up before your workout.",

    "Focus on proper exercise technique.",

    "Don't compare your progress with others."

];


/* =========================================================
   SHOW DIET PLAN
========================================================= */

function showDietPlan(planName) {

    const plan = dietPlans[planName];

    if (!plan) {
        return;
    }


    console.log("Diet Plan:", plan.title);

    console.log("Meals:");

    plan.meals.forEach(function (meal) {

        console.log("• " + meal);

    });

    console.log("Tip:", plan.tip);

}


/* =========================================================
   SHOW WORKOUT PLAN
========================================================= */

function showWorkoutPlan(planName) {

    const plan = workoutPlans[planName];

    if (!plan) {
        return;
    }


    console.log("Workout Plan:", plan.title);

    console.log("Exercises:");

    plan.exercises.forEach(function (exercise) {

        console.log("• " + exercise);

    });

}


/* =========================================================
   RANDOM FITNESS TIP
========================================================= */

function getRandomFitnessTip() {

    const randomIndex =
        Math.floor(
            Math.random() * fitnessTips.length
        );


    return fitnessTips[randomIndex];

}


/* =========================================================
   DISPLAY RANDOM TIP IN CONSOLE
========================================================= */

console.log(
    "💪 Fitness Tip:",
    getRandomFitnessTip()
);


console.log(
    "🍎 Diet Plans Loaded:",
    Object.keys(dietPlans).length
);


console.log(
    "🏋️ Workout Plans Loaded:",
    Object.keys(workoutPlans).length
);