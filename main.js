"use strict";
//variable
var a = "Islamic Istitute Of Education";
var sname = "musfira";
var $sfathername = "junaid";
var ulocation = "karachi";
var b = "Mid-TermExamresult";
var subj1 = 50;
var subj2 = 45;
var subj3 = 48;
var subj4 = 49;
var t = 200;
var c = t;
var sumofmarks = subj1 + subj2 + subj3 + subj4;
var obtainmarks = sumofmarks;
var grade = "A-1";
console.log(a);
console.log("Name:", sname);
console.log("father name:", $sfathername);
console.log("location:", ulocation);
console.log(b);
console.log("islamiat", subj1);
console.log("English poem", subj2);
console.log("urdu oral", subj3);
console.log("Math", subj4);
console.log("Total Marks", c);
console.log("obtain marks", obtainmarks);
console.log("Grade", grade);
//block scoping
if (obtainmarks > 100) {
    let e = "passed";
    console.log(e);
}
if (obtainmarks < 100) {
    let d = "failed";
    console.log(d);
}
