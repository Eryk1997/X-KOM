const setColor = (id) => {
  const field = document.querySelector(`.${id}`);
  if (field.style.backgroundColor === "chocolate") {
    field.style.background = "white";
  } else {
    field.style.background = "chocolate";
  }
};

export default setColor;
