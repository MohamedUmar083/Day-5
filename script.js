var resume = {
  name: "Umar",
  age: "23",
  mobile: "9786534201",
  email: "abcd@example.com",
  languages: ["Tamil", "English"],
  skills: ["python", "html", "javascript"],
  location: {
    state: "tamilnadu",
    district: "Ramanathapuram",
    country: "india",
  },
};

var Sres = JSON.stringify(resume);
var Pres = JSON.parse(Sres);

// For Loop

for (var i = 0; i < Pres.languages.length; i++) {
  console.log(Pres.languages[i]);
}
for (var i = 0; i < Pres.skills.length; i++) {
  console.log(Pres.skills[i]);
}

//For In Loop

for (var key in Pres.location) {
  console.log(Pres.location[key]);
}

// For OF Loop
var resume1 = Object.entries(Pres);
for (var [key, value] of resume1) {
  console.log(value);
}

//ForEach Loop

resume1.forEach(([key, value]) => console.log(key, value));

// console.log(Sres);
// console.log(Pres);
