// // CODE here for your Lambda Classes

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   gender: 'male',
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

const testPerson = new Person({
    name: 'John', 
    age : 117, 
    location: 'Reach', 
    gender: 'M'
});

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor (attributes) {
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    points(student) {
        if (Math.random() > 0.5) {
            let tempHolder = Math.floor((Math.random() * 10) + 1);
            student.grade += tempHolder;
            if (student.grade > 70) {
                console.log(`${this.name} has given ${student.name} ${tempHolder} extra points!`);
                return student.graduate();
            } else {
                return `${this.name} has given ${student.name} ${tempHolder} extra points!`
            }
        }
        else {
            let tempHolder = Math.floor((Math.random() * 10) + 1);
            student.grade -= tempHolder;
            return `${this.name} has deducted ${student.name} ${tempHolder} points!`
        }
    }
}
const testInstructor = new Instructor({
    name: 'Kelly', 
    age : 58, 
    location: 'Earth', 
    gender: 'F',
    speciality: 'scouting',
    favLanguage: 'Esperanto',
    catchPhrase: 'Oly Oly Oxen-Free'
});


// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor (attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = Math.floor((Math.random() * 60) +1);
    }
    listsSubjects() {
        return (this.favSubjects.map((subject) => {
            console.log(subject);
        }))
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate () {
        return `${this.name} has gained sufficient credits to graduate from Lambda School! We wish them all the best in paying off their ISAs!`;
    }
}

const testStudent = new Student({
    name: 'Fred', 
    age : 087, 
    location: 'New Paris', 
    gender: 'M',
    previousBackground: 'Orphan',
    className: 'Spartan-II',
    favSubjects: 'Leadership'
});

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor { 
    constructor (attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp (slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const testProjectManager = new ProjectManager({
    name: 'Wings', 
    age : 'D339', 
    location: 'Earth', 
    gender: 'M',
    speciality: 'Leadership',
    favLanguage: 'Swedish',
    catchPhrase: 'For X',
    gradClassName: 'Delta Company',
    favInstructor: 'Ezekiel'
});