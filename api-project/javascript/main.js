import { Domselectors } from "./dom";
const URL = `http://universities.hipolabs.com/search?country=United States`
async function getData(URL){
    try{
        const response= await fetch (URL);
        if (response.status !=200){
            throw new Error(response.statusText);
        }
        console.log(response);
        const data= await response.json();
        console.log(data);
        document.querySelector("h1").textContent = data.content;
    } catch (error){}
    document.querySelectorAll("h1").textContent = error;
}
getData(URL);
const CURL=  `http://universities.hipolabs.com/search?country=Canada`
getData(CURL);
//search bar 
Domselectors.Form.addEventListener("submit", (event) => {
    event.preventDefault()
})
