
import inquirer from "inquirer";

class student {
    id : string;
    name: string;
    coursesEnrolled: string[];
    feesAmount: number;

    constructor(id : string , name: string , coursesEnrolled: string[] , feesAmount: number){

        this.id = id
        this.name = name
        this.coursesEnrolled = coursesEnrolled
        this.feesAmount = feesAmount
    }
}
let std = new student("0001", "saba", ["typescript"], 30000)

let baseid = 10000

let studentid : string = ""

let continueEnrollment = true;

let students: student[] = []

do{

let action = await inquirer.prompt({
    type : 'list',
    name : 'ans',
    message: "Please select and action:\n",
    choices: ["Enrolled a student" , "Show student status"]
 })

 if(action.ans === "Enrolled a student" ){
    let studentName = await inquirer.prompt({
          type: "list",
          name: "ans",
          message: "Please enter your name:"
    })
    
    let trimedstudentName = (studentName.ans).trim().toLowerCase()
    let studentNameCheck = students.map(obj => obj.name)
    
    if(studentNameCheck.includes(trimedstudentName) === false){
        if(trimedstudentName !== ""){
        baseid ++
        studentid ="STID" + baseid
        console.log("\n\tYour account has been created.");
        console.log(`Welcome, ${trimedstudentName}!`);

        let course =await inquirer.prompt({
          type: "list",
          name: "ans",
          message: "Please select your course",
          choices: [" IT" , "English" , "Chemistry"]
        })

        let coursefees = 0
        switch(course.ans){

              case "IT" :
              coursefees = 5000
              break;

              case "English" :
              coursefees = 500
              break;

              case "Chemistry" :
              coursefees = 200
              break;
            }

         let courseConfirm = await inquirer.prompt({
            type : "confirm",
            name : "ans",
            message : "Do you want to enroll in this course"
         })

         if(courseConfirm.ans === true){
          let Student = new student(studentid, trimedstudentName ,[course.ans], coursefees)
         }

        students.push(std)
        console.log("You have enrolled in this course");

      }else{
        console.log("Invalid Name");
      }
    }else{
      console.log("This name is already exists");
      
    }

  }
  else if(action.ans === "Show students status"){
    if(students.length !== 0){
      let studentNamesCheck = students.map(e => e.name)

        let selectedStudent = await inquirer.prompt({
              type : "list",
              name : "ans",
              message : "Please select name",
              choices :  studentNamesCheck

        })

        let foundStudent = students.find(Student => Student === selectedStudent.ans)

        console.log("Student information");
        console.log(foundStudent);
        console.log("\n");

      }else{
        console.log("Record is empty");
      }
  }

    let userConfirm = await inquirer.prompt({
       type : "confirm",
       name : "ans",
       message : "Do you want to continue?"
    })

    if (userConfirm.ans === false){
      
    }

}while(true

)





















