import ValidationInput from "../../validators/ValidationInput"

const Send = (numberOfSets, statusCheckbox) => {
  const statusValidationInput = ValidationInput(numberOfSets);
  if (statusValidationInput) {
    window.localStorage.setItem("numberOfSets",numberOfSets)
    window.localStorage.setItem("statusCheckbox",statusCheckbox)
    window.localStorage.setItem("incrementValue",0)
    window.location.href = "/room";
  }
};

export default Send;
