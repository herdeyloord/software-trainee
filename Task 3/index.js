const mernStackDevelopers = [];

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

for (const user in users) {
  const skills = users[user].skills;
  if (
    skills.includes('MongoDB') &&
    skills.includes('Express') &&
    skills.includes('React') &&
    skills.includes('Node')
  ) {
    mernStackDevelopers.push(user);
  }
}

console.log("mern stack users: ",mernStackDevelopers);

const newUsers = { ...users };
newUsers.YourName = {
  email: 'yourname@example.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 25,
  isLoggedIn: true,
  points: 0
};

console.log("new users: ",newUsers);

const keys = Object.keys(users);
console.log("keys of users: ", keys);

const values = Object.values(users);
console.log("values of all key users: ", values);

let maxSkills = 0;
let skillfulPerson = '';

for (const user in users) {
  const skillsCount = users[user].skills.length;
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    skillfulPerson = user;
  }
}

console.log("most skillfull person is: ",skillfulPerson);