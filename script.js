var data = [
{number:-30
},
  {
    number: 14,
  },
  {
    number: 66,
  },
  { number: 21,
  },
  { number:72,
  },
  {number: -4} 
];
var numero=[];
function tap(number) {
  var that= this;
  this.number = number;
  this.ele=document.createElement("div");
   if (this.number < 0) {
 this.ele.innerHTML ="The number is "+  this.number + " and "+  " Is less then 0"; 
}
 else if (this.number > 50) {
 this.ele.innerHTML ="The number is "+  this.number + " and "+  " Is greater than 50"; 
}   else if (this.number = 14) {
 this.ele.innerHTML ="The number is "+  this.number + " and "+  " Is equal to 14"; 
} 




  this.ele.addEventListener("click", function(){
    that.increaseNumber();
  })
    document.body.appendChild(this.ele);
}
tap.prototype.increaseNumber = function(){
  this.number=this.number+1;
}


for(var i=0; i<data.length; i++){
  numero.push(new tap(data[i].number))
}

numero[0].increaseNumber();