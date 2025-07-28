// Problem 1 (Free Drinks)

let burger = 350;

if (burger > 500) {
  console.log("You will get free coke.");
} else {
  console.log("You have to pay 30tk for coke.");
}

// problem 2 (BMI Calculator)

let weight = 70; // weight in Kilograms(kg)

let height = 1.8; // height in meters(m)

let BMI = Number((weight / height ** 2).toFixed(1));

if (BMI < 18.5) {
  console.log("You are underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("You are normal.");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("You are overweight.");
} else {
  console.log("You are obese.");
}

// Problem 3 (Grade Calculator)

let score = 69;

if (score >= 0 && score <= 100) {
  if (score >= 90 && score <= 100) {
    console.log("A");
  } else if (score >= 80 && score <= 89) {
    console.log("B");
  } else if (score >= 70 && score <= 79) {
    console.log("C");
  } else if (score >= 60 && score <= 69) {
    console.log("D");
  }

  else 
  {
    console.log("F");
  }
}
