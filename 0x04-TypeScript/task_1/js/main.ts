interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location:string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    firstName: string;
    lastName: string;
}

const printTeacher = (firstName:string, lastName:string) => {
    const firstLetter = firstName.charAt(0);
    const fullLastName = lastName;
    return `${firstLetter} ${fullLastName}`
};

interface classInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements classInterface{
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName;
      this.lastName;
    }
  
    workOnHomework():string{
      return "Currently working";
    }
    displayName():string{
      return this.firstName;
    }
  }
  interface StudentConstructor {
    (firstName: string, lastName: string): classInterface;
  }