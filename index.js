

var parent = document.getElementById("parent");
var item = document.getElementById("itemm");
var alert = document.querySelector('.alert');
 

var test = document.getElementById("test");
var num = document.querySelector("#num");
let button = document.getElementById('button');

let generate = document.getElementById("generate");
let itemsNum = document.getElementById('items_num') ;

generate.onclick = () => {
  if(itemsNum.value <0 || itemsNum.value == "")
  {
    this.alert.style.opacity='1';
    
    return false
    
  }

  else{
    // console.log(itemsNum.value);

    item.style.display = "none";
    button.innerHTML= `  <button class="btn btn-info">submit</button>`;
    this.alert.style.opacity='0';
    var cartoona = ''
      for (var i = 1; i <= itemsNum.value; i++) {
        cartoona+= `        <div id="test" class="w-100 row">
        <div class=" col-lg-6 col-md-6">
            <div class="d-flex">
                <div class="divsp d-flex justify-content-center align-items-center">
                    <span id="num">${i}</span>
                </div>
                <input type="text" class="form-control w-50 leedoy " placeholder="Company name.." name="" id="">
            </div>
        </div>
        <div class=" col-lg-6 col-md-6 leedin">
            <div class="d-flex">
                <p class="text-black fw-bolder d-inline-block w-50 pposi">No of Leads</p>
                <input type="text" placeholder="#" class="form-control" name="" id="">
            </div>
        </div>
    </div>
    

  
  `;



        // parent.appendChild(n);
    
        // num.innerHTML = i;
        console.log(i);
      }

      parent.innerHTML = cartoona ; 
      // button.innerHTML = button;

  }






};
