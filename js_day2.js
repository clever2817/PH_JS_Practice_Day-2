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


// Problem 4 (Nested Friend)

let myScore = 61;

let friendScore = 35;

if(myScore > 80)
{
    if(friendScore > 80)
    {
        console.log("Go for a lunch.");
    }

    else if(friendScore < 80 && friendScore >= 60)
    {
        console.log("Good luck next time.");
    }

    else if(friendScore < 60 && friendScore >= 40)
    {
        console.log("Keep your friend's message unseen.");
    }

    else if(friendScore < 40)
    {
        console.log("Block your friend.");
    }
}

else if(myScore < 80)
{
    console.log("Go to home and sleep and act sad.");
}


// Problem 5 (Ternary Number)

let num1 = 10;

let num2 = 20;

let result;

if(num1 > num2)
{
    result = num1 * 2;
}

else
{
    result = num1 + num2;
}


(num1 > num2) ? result = num1 * 2 : result = num1 + num2;

console.log(result);