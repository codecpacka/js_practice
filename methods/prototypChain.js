// problem: modify the below code so that each object has functions as a prototype
const userMethods = {
    about() {
      return `${this.firstName} is ${this.age} years old`;
    },
    is18() {
      return this.age >= 18;
    },
  };
  function creatUser(firstName, lastName, email, age, address) {
    const user = Object.create(userMethods);// note: this line creates {} empty object & adds userMethods objects  as prototype to each object created using creatUser
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

 
    return user;
  }
  
  const user1 = creatUser(
    "ramprasad",
    "sarkar",
    "ramprasad.r2600@gmail.com",
    22,
    "porbandar"
  );
  const user2 = creatUser(
    "sarkar",
    "sarkar",
    "ramprasad.r2600@gmail.com",
    22,
    "porbandar"
  );
  const user3 = creatUser(
    "kutu",
    "sarkar",
    "ramprasad.r2600@gmail.com",
    22,
    "porbandar"
  );
  // console.log(user1);
  console.log(user1);
