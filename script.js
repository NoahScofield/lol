var data = [
  {
    color: "pink",
    number: -1
  },
  {
    color: "red",
    number: 0
  },
  {
    color:"blue",
    number: 0
  },
  
];
var colors=[];
function tap(color,number) {
  var that= this;
  this.color = color;
  this.number = number;
  this.ele=document.createElement("div");
  this.ele.style.fontsize = "18px";
  this.ele.style.height = "100px";
  this.ele.style.width = "200px";
  this.ele.style.justifyContent = "center";
  this.ele.style.display = "flex";
  this.ele.style.alignItems = "center";
  this.ele.style.borderRadius = "10px";
  this.ele.innerHTML = this.color + " " + this.number;



  this.ele.addEventListener("click", function(){
    that.increaseNumber();
  })
    document.body.appendChild(this.ele);
}
tap.prototype.increaseNumber = function(){
  this.number=this.number+1,
 
  this.ele.innerHTML=this.number+" "+this.color;
}


for(var i=0; i<data.length; i++){
  colors.push(new tap(data[i].color, data[i].number))
}

colors[0].increaseNumber();