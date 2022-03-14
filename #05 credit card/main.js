const cardWrapper = document.querySelector('.cardWrapper');
const card = document.querySelector('.card');
const highlight = document.querySelector('.highlight');

//higest value for angle
const mostX = 10; //10 or -10
const mostY = 10;

cardWrapper.addEventListener('mousemove', (e) => {
  //remove transition
  card.style.transition = 'none';
  highlight.style.transition = 'none';

  const x = e.offsetX;
  const y = e.offsetY;
  const {width, height} = cardWrapper.getBoundingClientRect();
  const halfHeight = height/2;
  const halfWidth = width/2;

  //calulate angle
  const rotationY = ((x - halfWidth) / halfHeight) * mostX;
  const rotationX = ((y - halfWidth) / halfHeight) * mostY;
  
  
  //set the rotation
  card.style.transform = `rotateY(${rotationY}deg) rotate(${rotationX}deg)`;
  highlight.style.left = `${(rotationY / mostY * 30) * -1}%`;
  highlight.style.top = `${(rotationX / mostX * 30) * -1}%`;
})

cardWrapper.addEventListener('mouseleave', () => {
  //add transition back
  card.style.transition = `transform .5s ease-in-out`;
  highlight.style.transition = `left .5s ease-in-out, top .ease-in-out`;

  //add default position back
  card.style.transform = `rotate(0)`;
  highlight.style.left = '-20%';
  highlight.style.top = '-13%';
})
