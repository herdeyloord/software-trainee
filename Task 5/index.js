const emptyArray = [];

const arrayWithElements = [1, 2, 3, ‘boy’, ‘girl’, ‘man’, ‘woman’];

const lengthOfArray = countries.length;
console.log(lengthOfArray);

const firstItem = countries[0];
const middleItem = countries[Math.floor(countries.length / 2)];
const lastItem = countries[countries.length - 1];
console.log(firstItem, middleItem, lastItem);

const mixedDataTypes = [1, 'two', 4, 5, 6, true, null, { name: 'John' }];
const lengthOfMixedArray = mixedDataTypes.length;
console.log(lengthOfMixedArray);

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies);

console.log(itCompanies.length);

const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastCompany = itCompanies[itCompanies.length - 1];
console.log(firstCompany, middleCompany, lastCompany);

itCompanies.forEach((company) => {
  console.log(company);
});

itCompanies.forEach((company) => {
  console.log(company.toUpperCase());
});

const sentence = itCompanies.join(', ') + ' are big IT companies.';
console.log(sentence);

const companyToFind = 'Microsoft';
const companyFound = itCompanies.includes(companyToFind) ? companyToFind : 'Company not found';
console.log(companyFound);

const filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i];
  if (company.toLowerCase().split('o').length - 1 > 1) {
    filteredCompanies.push(company);
  }
}
console.log(filteredCompanies);

countries.sort();
console.log(countries);

 countries.reverse();
console.log(countries);

const firstThreeCompanies = countries.slice(0, 3);
console.log(firstThreeCompanies);

const lastThreeCompanies = countries.slice(-3);
console.log(lastThreeCompanies);

const middleIndex = Math.floor(countries.length / 2);
const middleCompanies = countries.slice(middleIndex, middleIndex + 1);
console.log(middleCompanies);

countries.shift();
console.log(countries);

const middleIndex = Math.floor(countries.length / 2);
countries.splice(middleIndex, 1);
console.log(countries);

countries.pop();
console.log(countries);

const nonITCompanies = countries.filter(country => !webTechs.includes(country));
console.log(nonITCompanies);




