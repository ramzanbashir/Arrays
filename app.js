//----------------------Chapter no.14 - 15----------------------

//---------------------------Q1---------------------------
var studentName = [];
studentName.push("Muhammad Ramzan");
console.log(studentName);

//---------------------------Q2---------------------------

//---------------------------Q3---------------------------
var studentName = ["Ramzan","adeeb","shazaib","waleed","tamoor","Adnan"];
console.log(studentName);

//---------------------------Q4---------------------------
var num = [1,2,3,4,5];
console.log(num);

//---------------------------Q5---------------------------
var booleanArray = [true, false];
console.log(booleanArray);

//---------------------------Q6---------------------------
var mixedArray = [1, "Anas khan", true];
console.log(mixedArray);

//---------------------------Q7---------------------------
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write(
    `<h1>Qualification</h1>
     <ul>
    <li>
    ${qualification}
    </li>
    </ul>`
);
const qualifications = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M.Phil.",
    "PhD"
  ];

  // Function to display qualifications
  function displayQualifications() {
    document.write("<h2>Available Education Qualifications in Pakistan</h2>");
    document.write("<ul>");
    qualifications.forEach(qualification => {
      document.write(`<li>${qualification}</li>`);
    });
    document.write("</ul>");
  }

  // Call the display function
  displayQualifications();

//---------------------------Q8---------------------------
var studentName = ["Anas", "Areeb", "Shayan"];
var studentMarks = [320 , 230, 480];
var totalMarks = 500;
var studentPercent1 = studentMarks[0]/totalMarks*100;
var studentPercent2 = studentMarks[1]/totalMarks*100;
var studentPercent3 = studentMarks[2]/totalMarks*100;

document.write(`
    Score of ${studentName[0]} is ${studentMarks[0]}. Percentage: ${studentPercent1}%<br>
    Score of ${studentName[1]} is ${studentMarks[1]}. Percentage: ${studentPercent2}%<br>
    Score of ${studentName[2]} is ${studentMarks[2]}. Percentage: ${studentPercent3}%
`)

//---------------------------Q9---------------------------

//---------------------------Q10---------------------------
var score1 = [320,280,480,120];
// var score2 = [120,480,280.320];
score1.sort()
document.write(`
    Ordered Score of Students: ${score1}
`);

//---------------------------Q11---------------------------
var cities = [`Karachi`,"Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities = [];
selectedCities.push(...cities.slice(2,4));
console.log(selectedCities);

//---------------------------Q12---------------------------
var arr = ["This ", " is ", " my ", " cat"];
var arrJoin = arr.join("")
document.write(`
    Array:<br>
    ${arr}<br>
    <br>
    String:<br>
    ${arrJoin}
`)

//---------------------------Q13---------------------------