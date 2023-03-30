interface Student{
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}

const StudentOne: Student = {
    firstName:"Israel",
    lastName:"Oluwatimilehin",
    age:22,
    location:"Abuja",
}

const StudentTwo: Student = {
    firstName:"John",
    lastName:"Sekoni",
    age:23,
    location:"Gwagwalada"
}

const studentsList: Student[] = [StudentOne, StudentTwo];

const table = document.createElement('table');

for (const student of studentsList) {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  }
  
  document.body.appendChild(table);