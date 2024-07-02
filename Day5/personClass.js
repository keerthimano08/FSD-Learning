class Person{
    constructor(firstName,lastName,age,gender,phoneNumber,placeOfResident){
       this.firstName=firstName;
       this.lastName=lastName;
       this.age=age;
       this.gender= gender;
       this.phoneNumber=phoneNumber;
       this.placeOfResident=placeOfResident;
    }
}

const person1 = new Person(
    "keerthi",
    "manohar",
    24,
    "female",
     "+91-8824672890",
     "Chennai"
)
console.log(person1);