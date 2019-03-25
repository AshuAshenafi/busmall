// declare empty array
let selectionArray = []

let elImageRow = document.getElementsByClassName('imageRow')
let elReload = document.getElementsByClassName('reload')
let BusMall = function (name, filePath, className){
  this.name = name;
  this.filePath = filePath;
  this.className = className;
  this.clicked = 0;
  this.shown = 0
}

if(localStorage.length > 0){
  let getData = localStorage.getItem('BusMallStorage');
  
}