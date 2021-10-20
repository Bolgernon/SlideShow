const mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
let count = 1;
let URL;
function left(){
  thumbnailsElement.children[count-1].classList.remove('selected');
  count = count - 1;
  if (count == 0) {
    count = 19;
  }
  if (count <= 9) {
  URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0"+ count + ".jpg"
  }else {
  URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_"+ count + ".jpg"
  }
  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src',URL);
}
function right(){
  thumbnailsElement.children[count-1].classList.remove('selected');
  count = count + 1;
  if (count == 20) {
    count = 1;
  }
  if (count <= 9) {
  URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0"+ count + ".jpg"
  }else {
  URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_"+ count + ".jpg"
  }
  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src',URL);
}

function imgclick(x){
  thumbnailsElement.children[count-1].classList.remove('selected');
  count = x;
  if (count <= 9) {
  URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0"+ count + ".jpg"
  }else {
  URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_"+ count + ".jpg"
  }
  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src',URL);
}

let timer;
let nowPlaying = 0;
function play(){
  if(!nowPlaying){
    nowPlaying = 1;
    right();
    autoPlay();
  }
}
  function autoPlay(){
    timer = setTimeout(function(){
      right();
      autoPlay();
    }, 1000);
  }
  function stop(){
    clearTimeout(timer);
    nowPlaying = 0;
  }
  function reset(){
    stop();
    thumbnailsElement.children[count-1].classList.remove('selected');
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_01.jpg";
    count = 1;
    thumbnailsElement.children[count-1].classList.add('selected');
    mainElement.setAttribute('src',URL);
  }
