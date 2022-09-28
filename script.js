const content = document.querySelectorAll('.js-content');
function eventload(){
  content.forEach((event)=>{
  event.classList.add('ativo');
  })
}
window.addEventListener('load', function(){
  eventload();
});
const scrollContent = document.querySelectorAll('.js-scroll')
const windowMetade = window.innerHeight * 0.6;
function animaScroll(){
  scrollContent.forEach((item)=>{
  const scrollTop = item.getBoundingClientRect().top
  const isContentVisible = (scrollTop - windowMetade ) <0;
  if(isContentVisible){
    item.classList.add('ativo');
  }
  })
}
window.addEventListener('scroll', function(){
  animaScroll();
})