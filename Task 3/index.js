const mernStackDevelopers = [];

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

console.log(mernStackDevelopers);

const newUsers = { ...users };
newUsers.YourName = {
  email: 'yourname@example.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 25,
  isLoggedIn: true,
  points: 0
};

console.log(newUsers);

const keys = Object.keys(users);
console.log(keys);

const values = Object.values(users);
console.log(values);

let maxSkills = 0;
let skillfulPerson = '';

for (const user in users) {
  const skillsCount = users[user].skills.length;
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    skillfulPerson = user;
  }
}

console.log(skillfulPerson);