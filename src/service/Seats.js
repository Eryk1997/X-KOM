import axios from "axios";

const Seats = {
  getAllSeats,
  selectPlaceFalseCheckbox,
  selectPlaceTrueCheckbox,
};

async function getAllSeats() {
  const response = axios.get("http://localhost:3000/seats");
  return response;
}

async function selectPlaceFalseCheckbox() {
  const numberOfSets = window.localStorage.getItem("numberOfSets");
  const arraySeats = [];
  let i = numberOfSets;


  const response = await getAllSeats();
  while (i > 0) {
    const positionY = Math.floor(Math.random() * 15);
    const positionX = Math.floor(Math.random() * 11);


    response.data.map((item) => {
      if (item.cords.x === positionX && item.cords.y === positionY) {
        let field = document.querySelector(`.${item.id}`);
        if (field && item.reserved === false) {
          const newObject = { id: item.id, x: item.cords.x, y: item.cords.y };
          arraySeats.push(newObject);
          field.style.background = "chocolate";
          i--;
        }
      }
    });
  }

  window.localStorage.setItem("incrementValue", arraySeats.length);
  window.localStorage.setItem("places", JSON.stringify(arraySeats));
}

const getIndexPlace = async () => {
  let statusIndex = false;
  let positionY = Math.floor(Math.random() * 15);
  let positionX = Math.floor(Math.random() * 11);
  const response = await getAllSeats();
  let indexFirst;

  while (statusIndex !== true) {
    response.data.forEach((item, index) => {
      if (
        item.cords.y === positionY &&
        item.reserved === false &&
        item.cords.x === positionX
      ) {
        indexFirst = index;
        statusIndex = true;
      } else {
        positionX = Math.floor(Math.random() * 11);
        positionY = Math.floor(Math.random() * 15);
      }
    });
  }
  return indexFirst;
};

async function selectPlaceTrueCheckbox() {
  let statusFinish = false;
  let indexPlace = await getIndexPlace();
  let numberOfSets = Number.parseInt(
    window.localStorage.getItem("numberOfSets")
  );
  const response = await getAllSeats();
  let positionYFirstElement;
  let positionYNextElement;
  let sum;
  let incrementValue = 0;
  let arraySeats = [];
  let whileFindIndex = false;

  while (statusFinish !== true) {
    while (whileFindIndex !== true) {
      if (Number.parseInt(indexPlace + numberOfSets) >= response.data.length) {
        indexPlace = await getIndexPlace();
      } else {
        whileFindIndex = true;
      }
    }
    whileFindIndex = false;

    for (let i = indexPlace; i < indexPlace + numberOfSets; i++) {
      positionYFirstElement = Number.parseInt(response.data[i].cords.y);
      positionYNextElement = Number.parseInt(response.data[i + 1].cords.y);
      if (i < indexPlace + numberOfSets - 1)
        sum = positionYNextElement - positionYFirstElement;
      else sum = 1;
      if (response.data[i].reserved === false && sum === 1) {
        const newObject = {
          id: response.data[i].id,
          x: response.data[i].cords.x,
          y: response.data[i].cords.y,
        };
        arraySeats.push(newObject);
        incrementValue += 1;
      }
    }
    if (incrementValue === numberOfSets) {
      statusFinish = true;
    } else {
      arraySeats = [];
      indexPlace = await getIndexPlace();
      incrementValue = 0;
      statusFinish = false;
    }
  }

  arraySeats.forEach((e) => {
    const field = document.querySelector(`.${e.id}`);
    field.style.background = "chocolate";
  });

  window.localStorage.setItem("incrementValue", arraySeats.length);
  window.localStorage.setItem("places", JSON.stringify(arraySeats));
}

export default Seats;
