class UserModel {

  constructor({id, firstName, lastName, description}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
  }
  getName(){
    const f = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1);
    const l = this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1);
    return `${f} ${l}`;
  }
}

module.exports = UserModel;
