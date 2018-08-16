const words = require('categorized-words');
const nouns = words.N;

function randomNoun() {
  return nouns[Math.floor(Math.random()*nouns.length)];
}

console.log(randomNoun());
console.log(randomNoun());
console.log(randomNoun());


class QUser {
  constructor({ name, school, classroom}) {
    if (checkIfUserUniqueInSchoolClass()) {
      this.userUnique=true;
      this.name=name;
      this.school=school;
      this.classroom=classroom;
    } else {
      this.unique=false;
    }
  }
}

function checkSecretCode(code) {
  return (code==="HAYLEYsecret")
}

class Teacher extends QUser {
  constructor(props) {
    checkIfTeacherUserNameAlreadyExists();
    if (checkSecretCode()) {
      super(props);
      this.validTeacher= true;
      this.room=randomNoun()+randomNoun()+randomNoun();
    } else {
      this.validTeacher= false;
    }
  }
}

class Student extends QUser {
  constructor(props) {
    super(props);
  }
}

export {Student, Teacher};
