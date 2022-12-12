function changelogoAndColor() {
  let body = document.querySelector(`body`);
  let cards = document.querySelector(`.card-1`);
  let card2 = document.querySelector(`.card-2`);
  let card3 = document.querySelector(`.card-3`);
  body.style.background = "#23283e";
  cards.style.background = "#23283e";
  card2.style.background = "#23283e";
  card3.style.background = "#23283e";
  cards.style.boxShadow = "5px 8px 10px 10px #2a2f4c";
  card2.style.boxShadow = "5px 8px 10px 10px #2a2f4c";
  card3.style.boxShadow = "5px 8px 10px 10px #2a2f4c";
}
