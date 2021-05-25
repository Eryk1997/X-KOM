import setColor from "./setColor";

const selectPlace = (item, e) => {
  let indexItemToDelete;
  let statusInclude = false;

  e.preventDefault();
  let arrayPlaces = [];

  let objectLocal = { id: item.id, x: item.cords.x, y: item.cords.y };

  const localObject = JSON.parse(window.localStorage.getItem("places"));

  if (localObject !== null) {
    const found = localObject.findIndex((e) => e.id === item.id);
    
    localObject.map((i) => {
      arrayPlaces.push(i);
    });

    arrayPlaces.forEach((e, index) => {
      if (e.id === item.id) {
        indexItemToDelete = index;
        statusInclude = true;
      }

    });
    if (statusInclude) {
      arrayPlaces.splice(indexItemToDelete, 1);
      window.localStorage.setItem("incrementValue", arrayPlaces.length)
      setColor(item.id);
    } else {
      if(window.localStorage.getItem("incrementValue") >= window.localStorage.getItem("numberOfSets"))
        alert(`Możesz wybrać tylko ${window.localStorage.getItem("numberOfSets")} miejsca`)
        else{
      arrayPlaces.push(objectLocal);
      window.localStorage.setItem("incrementValue", arrayPlaces.length)
      setColor(item.id);

    }
    }

    window.localStorage.setItem("places", JSON.stringify(arrayPlaces));
  } else {
    arrayPlaces.push(objectLocal);
    window.localStorage.setItem("places", JSON.stringify(arrayPlaces));
  }
};

export default selectPlace;
