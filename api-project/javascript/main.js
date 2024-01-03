import { Domselectors } from "./dom";
import "../css/style.css";

const URL = `http://universities.hipolabs.com/search?country=United States`
//American cards when site is opened
function Insert(arr){
    arr.forEach((School) => {
         document.querySelector(".Flex-container").insertAdjacentHTML("afterbegin",
     `<div class="card">
     <h1 class="Uname">${School.name}</h1>
     <h2 class="Ulink">${School.web_pages}</h2>
     </div>`)
     });
 }

 async function getData(URL){
    try{
        const response= await fetch (URL);
        if (response.status !=200){
            throw new Error(response.statusText);
        }
        console.log(response);
        const data= await response.json();
        console.log(data);
        Insert(data)
    } catch (error){}
    document.querySelectorAll("h1").textContent = error;
}
getData(URL);

const CURL=  `http://universities.hipolabs.com/search?country=Canada`
async function getCData(CURL){
    try{
        const response= await fetch (CURL);
        if (response.status !=200){
            throw new Error(response.statusText);
        }
        console.log(response);
        const data= await response.json();
        console.log(data);
        Insert(data)
    } catch (error){}
    document.querySelectorAll("h1").textContent = error;
}
getData(CURL);

//search bar 
Domselectors.Form.addEventListener("submit", (event) => {
    event.preventDefault()
})

