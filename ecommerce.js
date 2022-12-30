let category= window.prompt("Welcome to our Store, What would you like???\n \nSelect a category you\'ll like to buy from, by typing in the the number attached to the category listed below. \n1. Shoes\n2. Clothes\n3. groceries\n\n")
if(category==1){
        shoeGender
}else if(category==2){
    clothes
}else if (category==3){
    groceries
}else{
    oops
}
let shoeGender= window.prompt("Select the gender...\n\n1. Male\n2. Female\n3. Unisex")
if(shoeGender>0||shoeGender<4){
        shoeCat
}else{
    oops
}
let shoeCat= window.prompt("Select what kind of shoe...\n1. Italian\n2. Snickers\n3. Boots")

if(shoeCat==1){
        shoeAmount
}else{
    oops
}
let shoeAmount= prompt("How many pairs are you buying???")
if(shoeAmount>0){
    windowprompt("Your purchase was successful")
}
let oops= prompt("Oops... You selected an invalid option.");
let clothesGender = window.prompt("Select the gender...\n\n1. Male\n2. Female\n3. Unisex")
if(clothesGender===1){
    clothesMale

}else if(clothesGender===2){
    clothesFemale
}
 else{
    window.prompt("Oops... You selected an invalid option.")
}
let clothesMale= window.prompt("Select clothes you\'re buying... \n\n1. T-shirt\n2. Trousers\n3. Polo")
if(clothesMale>0 || clothesMale <4){
    window.prompt("Your purchase was successful")
}else{
    window.prompt("Oops... You selected an invalid option.")
}
let clothesFemale= window.prompt("Select clothes you\'re buying... \n\n1. Gown\n2. skirt\n3. belt")
if(clothesFemale>0 || clothesFemale <4){
    window.prompt("Your purchase was successful")
}else{
    prompt("Oops... You selected an invalid option.")
}
let groceries= window.prompt("Select the grocery you\'re  buying... \n\n1. Rice\n2. Beans\n3. onions")
if (groceries>0 || groceries <4) {
    window.prompt("Your purchase was successful")
} else {
    window.prompt("Oops... You selected an invalid option.")
}