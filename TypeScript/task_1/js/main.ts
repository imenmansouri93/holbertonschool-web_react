interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

//const myTeacher: Teacher = {
  //  firstName: 'John',
  //  lastName: 'Doe',
  // fullTimeEmployee: true,
  //  yearsOfExperience: 5,
  //  location: 'New York',
  //  contract: true,
// additionalAttribute: 'some value'
//};

interface Directors extends Teacher {
    numberOfReports: number;
}

const director: Directors = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    location: 'Los Angeles',
    numberOfReports: 10,
  };

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = function (
    firstName: string, 
    lastName: string
): string {
    return `${firstName.charAt(0)}. ${lastName}`;
};

console.log("imen", "mansouri")