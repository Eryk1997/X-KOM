const ValidationInput = (numberOfSets) => {
  let reg = /^\d+$/;

  const errorInput = document.querySelector(".errorInput");
  let status = true;
  let statusBox = window.localStorage.getItem("statusCheckbox")

  if (!reg.test(numberOfSets)) {
    errorInput.innerHTML = "Nieprawidłowe znaki";
    status = false;
  } 
  else if (Number.parseInt(numberOfSets) <= 0) {
    errorInput.innerHTML = "Nieprawidłowy przedział";
    status = false;
  }
  else if(Number.parseInt(numberOfSets) >= 6 && statusBox === 'true'){
    errorInput.innerHTML = "Maksymalnie 5 osób obok siebie"
    status = false;
  } 
  else {
    errorInput.innerHTML = "";
    status = true;
  }

  return status;
};

export default ValidationInput;
