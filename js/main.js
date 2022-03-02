document.oncopy = (event) => {
  event.preventDefault();
  event.clipboardData.setData(
    `text/plain`,
    `No puedes copiar ningun texto de FormuFisic. \n`
  );
};
