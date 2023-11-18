import { addRecipe, changePage } from "./model.js"; 

 

var initialDescCount = 3; 

var initialInstrCount = 3; 

 

function initListeners() { 

$("nav a").on("click", (e) => { 

e.preventDefault(); 

let btnID = e.currentTarget.id; 

changePage(btnID); 

}); 

} 

 

export function addFormListener() { 

$(".descAddBtn").on("click", (e) => { 

initialDescCount++; 

$(".formDesc").append( 

`<input type="text" placeholder="Ingredient #${initialDescCount}" id="desc${ 

initialDescCount - 1 

}" />` 

); 

}); 

 

$(".instrAddBtn").on("click", (e) => { 

initialInstrCount++; 

$(".formInstr").append( 

`<input type="text" placeholder="Instruction #${initialInstrCount}" id="desc${ 

initialInstrCount - 1 

}" />` 

); 

}); 

 

$(".submit").on("click", (e) => { 

let newItemObj = {}; 

 

let imagePath = $("#imagePath").val(); 

let itemName = $("#itemName").val(); 

newItemObj.imagePath = imagePath; 

newItemObj.itemName = itemName; 

 

newItemObj.descriptions = []; 

 

console.log("newItemObj ", newItemObj); 

$(".formDesc input").each(function (index, data) { 

var value = $(this).val(); 

if (value != "") { 

let keyName = "description" + index; 

let descObj = {}; 

descObj[keyName] = value; 

 

newItemObj.descriptions.push(descObj); 

} 

}); 

 

newItemObj.instructions = []; 

 

$(".formInstr input").each(function (index, data) { 

var value = $(this).val(); 

 

if (value != "") { 

let keyName = "instruction" + index; 

let instrucObj = {}; 

instrucObj[keyName] = value; 

 

newItemObj.instructions.push(instrucObj); 

} 

}); 

 

addRecipe(newItemObj); 

}); 

} 

 

$(document).ready(function () { 

// changePage("addRecipe"); 

changePage("addRecipe"); 

initListeners(); 

}); 