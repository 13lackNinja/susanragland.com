
const artContainers = Array.from(document.getElementsByClassName('art-container'));

for (i = 0; i < artContainers.length; i++) {
  const imageFrame = artContainers[i].children[0];
  const downArrow = imageFrame.children[4];
  downArrow.id = i;
  downArrow.addEventListener('click', scrollDown);
}

function scrollDown(event) {
  //get the next button down
  const buttonBelow = document.getElementById(parseInt(event.target.id) + 1);
  const containerBelow = buttonBelow.parentNode.parentNode;
  const scrollIntoViewOptions = {
    behavior: 'smooth'
  }
  containerBelow.scrollIntoView(scrollIntoViewOptions);
}
