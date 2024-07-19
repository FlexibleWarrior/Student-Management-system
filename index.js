import inquirer from "inquirer";
class student {
    id;
    name;
    coursesEnrolled;
    feesamount;
    constructor(id, name, coursesEnrolled, feesamount) {
        this.id = id;
        this.name = name;
        this.coursesEnrolled = coursesEnrolled;
        this.feesamount = feesamount;
    }
}
let baseid = 10000;
let studentid = "";
let continueenrollment = true;
let students = [];
do {
    let action = await inquirer.prompt({
        type: 'list',
        name: 'ans',
        message: "Please select and action:\n",
        choices: ["Enrolled a student", "Show student status"]
    });
    if (action.ans === "Enrolled a student") {
        let studentName = await inquirer.prompt({
            type: "list",
            name: "ans",
            message: "Please enter your name:"
        });
        let trimedstudentName = (studentName.ans).trim().lowerCase();
        let studentNameCheck = students.map(obj => obj.name);
        if (trimedstudentName !== "") {
            baseid++;
            studentid = "STID" + baseid;
            console.log("\n\tYour account has been created.");
            console.log(`Welcome, ${trimedstudentName}!`);
        }
    }
} while (true);
