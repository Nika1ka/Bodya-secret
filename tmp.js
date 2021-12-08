var i=0;
var sum=0;
  function show(){
   document.getElementById("bin_window").style.display = 'block';
   document.getElementById("gray").style.display = 'block';
  }
  function not_show(){
   document.getElementById("bin_window").style.display = 'none';
   document.getElementById("window").style.display = 'none';
   document.getElementById("gray").style.display = 'none';
  }
  function offer(){
  document.getElementById("bin_window").style.display = 'none';
  document.getElementById("window").style.display = 'block';
  for(var j=0;j<i;j++){
    if(document.getElementById(j) != undefined ){
      document.getElementById(j).remove();
    }
  }
   i=0;
   sum=0;
   document.getElementById("sum_costs").innerText ="Общая цена: " + sum + " UAH";
  }
  function buy(text, cost){
   var new_div=document.createElement('div');
   var new_img=document.createElement('img');
   var new_font=document.createElement('font');
   var old_elem=document.getElementById('bin_window_window');
   new_div.className='bin_label';
   new_div.id=i;
   new_div.dataset.cost=cost;
   new_img.src="Pictures/close.png";
   new_img.className='picture_to_right';
   new_img.width="50";
   new_img.height="50";
   i++;
   new_img.addEventListener('click', function(event) {
     var parent=document.getElementById(this.parentNode.id);
     let cost=parent.dataset.cost;
     document.getElementById(this.parentNode.id).remove();
     sum -= cost;
     document.getElementById("sum_costs").innerText ="Общая цена: " + sum + " UAH";
    });
  new_font.innerText=text;
  new_font.face="Times New Roman";
  new_font.size="5";
  new_div.appendChild(new_font);
  new_div.appendChild(new_img);
  old_elem.appendChild(new_div);
  document.getElementById("bin_window").style.display = 'block';
  document.getElementById("gray").style.display = 'block';
  sum += cost;
  document.getElementById("sum_costs").innerText ="Общая цена: " + sum + " UAH";
}
