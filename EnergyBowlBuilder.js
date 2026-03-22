// Specifing the string for the order description
const orderDescriptionPlate = document.querySelector('p#orderDescription');


// Creating EnergyBowl Constructor
function EnergyBowl(base, fruit, topping, protein, sweetener, size){
    this.base = base;
    this.fruit = fruit;
    this.topping = topping;
    this.protein = protein;
    this.sweetener = sweetener;
    this.size = size;        
}


// Input validation method
EnergyBowl.prototype.isValidBowl = function(){
    let isValid = true;
    
    if (!this.base) {
        console.log('Validation failed: No base selected');
        isValid = false;
    }
    if (!this.fruit) {
        console.log('Validation failed: No fruit selected');
        isValid = false;
    }
    if (!this.topping) {
        console.log('Validation failed: No topping selected');
        isValid = false;
    }
    if (!this.protein) {
        console.log('Validation failed: No protein selected');
        isValid = false;
    }
    if (!this.sweetener) {
        console.log('Validation failed: No sweetener selected');
        isValid = false;
    }
    if (!this.size) {
        console.log('Validation failed: No size selected');
        isValid = false;
    }
    return isValid;
}


// Description method/outPut for EnergyBowl 
EnergyBowl.prototype.getDescription = function(){

    if(!this.isValidBowl()){
        // if at least one item is unselected, this will appear
        return 'You are missing items, please select at least one item from each catagory.'
    }
    else{
        let descriptionString = 'Your order is: ';
        descriptionString += `${this.base} with ${this.fruit} fruit, ${this.topping}, ${this.protein} and ${this.sweetener}, ${this.size} size`;
        return descriptionString;
    }
}


// Connecting Button to JS
let finishOrderButton = document.querySelector('button#finishOrderButton');


// Event listener for "Finish Order" button
finishOrderButton.addEventListener('click',finishOrder);


// Gathering form elements
const baseSelect = document.querySelectorAll('input[name="base"]');
const fruitSelect = document.querySelectorAll('input[name="fruit"]');
const toppingSelect = document.querySelectorAll('input[name="topping"]');
const proteinSelect = document.getElementById('protein');
const sweetenerSelect = document.getElementById('sweetener');
const sizeSelect = document.getElementById('size');


// Function to change order based on selected options
function finishOrder(){
    
    // Sets base as null and checks the selected item based on the Id then assigns the variable based on the selected option
    let base = null;
    if (document.getElementById('WildRice').checked) base = 'Wild Rice';
    if (document.getElementById('SweetPotato').checked) base = 'Sweet Potato';
    if (document.getElementById('BrownRice').checked) base = 'Brown Rice';

    let fruit = null;
    if (document.getElementById('Strawberries').checked) fruit = 'Strawberries';
    if (document.getElementById('Blueberries').checked) fruit = 'Blueberries';
    if (document.getElementById('Pineapple').checked) fruit = 'Pineapple';

    let topping = null;
    if (document.getElementById('Avacado').checked) topping = 'Avacado';
    if (document.getElementById('ToastedWalnuts').checked) topping = 'ToastedWalnuts';
    if (document.getElementById('FetaCheese').checked) topping = 'FetaCheese';

    const protein = proteinSelect.value;
    const sweetener = sweetenerSelect.value;
    const size = sizeSelect.value;

    const order = new EnergyBowl(base, fruit, topping, protein, sweetener, size);
    orderDescriptionPlate.textContent = order.getDescription()
}


// Sets the default output text
orderDescriptionPlate.textContent = 'Select your bowl options and click the button above, your order will appear here';