class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstname = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  static whoIsOlder = function (user1, user2) {
    if (user1.age > user2.age)
      console.log(
        user1.firstname +
          " " +
          user1.lastName +
          " is older than" +
          " " +
          user2.firstname +
          " " +
          user2.lastName
      );
    else
      console.log(
        user2.firstname +
          " " +
          user2.lastName +
          " is older than" +
          " " +
          user1.firstname +
          " " +
          user1.lastName
      );
  };
}

const user1 = new User("Giuseppe", "Cifarelli", 27, "Matera");
const user2 = new User("Stefano", "Casasola", 32, "Gorizia");
User.whoIsOlder(user1, user2);

// PETS LIST

const petName = document.getElementById("pet-name");
const ownerName = document.getElementById("owner-name");
const species = document.getElementById("specie");
const breed = document.getElementById("breed");

const petList = [];

class Pets {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  static IsTheSameOwner = function (pet1, pet2) {
    if (pet1.ownerName === pet2.ownerName) console.log(true);
    else console.log(false);
  };
}

const createList = function () {
  const List = document.querySelector("ul");
  List.innerText = "";
  petList.forEach((el) => {
    const newLi = document.createElement("li");
    newLi.innerText = `${el.petName}, ${el.ownerName}, ${el.species}, ${el.breed}`;
    List.appendChild(newLi);
  });
};

const formReference = document.querySelector("form");
formReference.addEventListener("submit", (e) => {
  e.preventDefault();
  const pet1 = new Pets(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );
  petList.push(pet1);
  petName.value = "";
  ownerName.value = "";
  species.value = "";
  breed.value = "";

  createList();
  //   Pets.IsTheSameOwner(petList[0], petList[1]);
});
