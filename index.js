let sub =document.getElementById("submit");
let fname=document.getElementById("first-name");
let lname=document.getElementById("last-name");
let address=document.getElementById("address");
let pincode=document.getElementById("pincode");
let gender=document.getElementById("gender");
let healthydrinks=document.getElementById("healthydrinks");
let state=document.getElementById("state");
let country=document.getElementById("country");

sub.addEventListener("click",foo)

function foo(page){
    let address=document.getElementById("address")
    let gender=document.getElementsByName("gender")

    //getting value of gender

    let genderValue='';
    gender.forEach((gender)=>{
        if(gender.checked){
            genderValue = gender.value
        }
    })
    //getting value of healthydrinks and list of healthydrinks
    let healthydrinks = document.getElementsByName("healthydrinks")
    let listofHealthyDrinks = [];
    healthydrinks.forEach((healthydrinks)=>{
        if(healthydrinks.checked) {
         listofHealthyDrinks.push(healthydrinks.value)


        }
    })
if(2<=listofHealthyDrinks.length){
    show=(listofHealthyDrinks.join(","))
}else{
    show=alert("Must choose atleast 2 out of 5 options in food")
}
//create table,using function
table(fname.value,lname.value,address.value,pincode.value,gender.value,healthydrinks,state.value,country.value)
fname.value=""
lname.value=""
address.value=""
pincode.value=""
gender.value=""
listofHealthyDrinks=[];
state.value=""
country.value=""
page.preventDefault();
}
//function


function table(fname,lname,address,pincode,gender,healthydrinks,state,country){
    let tbody =document.getElementById("tbody")

let tr=document.createElement("tr")

let td1=document.createElement("td")
td1.innerHTML=fname;

let td2=document.createElement("td")
td2.innerHTML=lname;

let td3=document.createElement("td")
td3.innerHTML=address;

let td4=document.createElement("td")
td4.innerHTML=pincode;

let td5=document.createElement("td")
td5.innerHTML=gender;

let td6=document.createElement("td");
td6.innerHTML=healthydrinks;

let td7=document.createElement("td");
td7.innerHTML=state;


let td8=document.createElement("td");
td8.innerHTML= country;

tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
tbody.append(tr)
}



