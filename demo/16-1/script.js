// let dog = {
//   name: "Java",
//   sua: function () {
//     console.log("Gau gau gau");
//   },
// };

let array = [
    {
        name: "Tèo",
        email: "teopv1@fpr.edu.vn"
    },
    {
        name: "Tí",
        email: "típv1@fpr.edu.vn",
    }
]

Array.forEach(element => {
    let user = new User(element.name, element.email)
});

// console.log(dog);
// function User(name, email) {
//   this.name = name;
//   this.email = email;
// }
// let student = new User("Tèo", "teopv1@fpr.edu.vn");
// let teacher = new User("Tí", "típv1@fpr.edu.vn");

class UserInfo{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log(`${this.email} login success`);
    }
}

student = new UserInfo("Tèo", "teopv1@fpr.edu.vn");
teacher = new UserInfo("Tí", "típv1@fpr.edu.vn");

student.learning = function(){
    console.log(`${this.name} is learning`);
}

teacher.teaching = function(){
    console.log(`${this.name} is teaching`);
}

student.login();
student.learning();

teacher.login();
teacher.learning();

// console.log(student);
// console.log(teacher);


