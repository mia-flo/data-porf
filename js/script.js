// hamburger menu for tablet/mobile
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// scroll back to top

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let topbutton = document.getElementsByClassName("to-top");
  if (document.body.scrollTop > 20 || documentElement.scrollTop > 20) {
    topbutton.classList.add("show");
    console.log("show");
  } else {
    topbutton.classList.remove("show");
    console.log("don't show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //Chrome, Firefox, Internet Explorer
}

// filtering projects based on tags

filterElements("all");

function filterElements(selected) {
  var cards, i;
  cards = document.getElementsByClassName("project-card-filt");
  filters = document.getElementsByClassName("filter");

  // default selection of 'all'
  if (selected == "all") {
    selected = "";
    filters[0].classList.add("selected");
  } else {
    filters[0].classList.remove("selected");
  }

  for (i = 0; i < cards.length; i++) {
    removeFilter(cards[i], "show");
    if (cards[i].className.indexOf(selected) > -1) addFilter(cards[i], "show");
  }
}

// adding a filter - adds 'show' class to the cards
function addFilter(tag, name) {
  var i, tagClasses, newClasses;
  tagClasses = tag.className.split(" ");
  newClasses = name.split(" ");
  for (i = 0; i < newClasses.length; i++) {
    if (tagClasses.indexOf(newClasses[i]) == -1) {
      tag.className += " " + newClasses[i];
    }
  }
}

// removing a filter
function removeFilter(element, name) {
  var i, cardClasses, classesRemoved;
  cardClasses = element.className.split(" ");
  classesRemoved = name.split(" ");
  for (i = 0; i < classesRemoved.length; i++) {
    while (cardClasses.indexOf(classesRemoved[i]) > -1) {
      cardClasses.splice(cardClasses.indexOf(classesRemoved[i]), 1);
    }
  }
  element;
  element.className = cardClasses.join(" ");
}
