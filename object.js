const students = [
    {id: 21, name: 'Rana'},
    {id: 31, name: 'Akhi'},
];

const names = students.map(s => s.name);
const ids = students.filter(s => s.id>21);
const bigger = students.find(s => s.id > 20);
console.log(bigger);