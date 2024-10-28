// WithOut Coma , 
// let firstName = ["A", "B", "C", "D", "E"];
// let lastName = ["Zzz", "Burp", "Dogbone", "Droop"];
// let fullName = [];

// for (let i = 0; i < firstName.length; i++) {
//     for (let j = 0; j < lastName.length; j++) {
//         fullName.push(firstName[i] + lastName[j], "<br>");
//     }  
// }
// for (let k = 0; k < fullName.length; k++) {
//     document.write(fullName[k] + "<br>");
// }


// With coma , 
// let firstName = ["A", "B", "C", "D", "E"];
// let lastName = ["Zzz", "Burp", "Dogbone", "Droop"];
// let fullName = [];

// for (let i = 0; i < firstName.length; i++) {
//     for (let j = 0; j < lastName.length; j++) {
//         fullName.push(firstName[i] + lastName[j], "<br>");
//     }  
// }
// document.write(fullName);



// jo bhi ("") isme  me likhyge start me aaye ga
// let firstName = ["A", "B", "C", "D", "E"];
// let lastName = ["Zzz", "Burp", "Dogbone", "Droop"];
// let fullName = [];

// for (let i = 0; i < firstName.length; i++) {
//     for (let j = 0; j < lastName.length; j++) {
//         fullName.push(firstName[i] + lastName[j], "<br>");
//     }  
// }
//     document.write(fullName.join(""));


// let fruits = ["Mango" , "grapes" , "Watermelon"];
// document.write(fruits.join("") , "<br>"); // Without coma ,
// document.write(fruits.join()); // with coma ,



// let items = ["butter", "sliced Cheese", "Milk", "Sour Cream", "Greek Yoghurt", "Salt"];
// let price = ['170', '50', '150', '70', '30', '90'];
// let discount = ['50%' , '10%'];
// for (let i = 0; i < items.length; i++) {
//     for (let j = 0; j < price.length; j++) {
//         discount.push(items[i] + price[j] , "<br>");
//     }
// }
// document.write(discount);


//Practice
// let items = ["butter", "sliced Cheese", "Milk", "Sour Cream", "Greek Yoghurt", "Salt", "<br>"];
// let price = [ 170, 50, 150, 70, 30, 90, "<br>"];
// let discount = ['50%', '10%', "<br>"];

// for (let i = 0; i < items.length; i++){
//     let itemprice = items[i] + ":" + price[i]
//      discount.push(itemprice)
// }
// document.write(discount.join("<br>"));



// let items = ["butter", "Cheese", "Milk", "Cream", "Yoghurt", "Salt"];
// let price = [ 170, 50, 150, 70, 30, 90];
// let discount = ['50%', '10%'];
// document.write("Item  " +   ":"   + "  Price" , "<br>");
// document.write("========");
// document.write("<br>" , items[0] +   "   :   " );
// document.write(price[0]);
// document.write("<br>" , items[1] +   "   :   " );
// document.write(price[1]);
// document.write("<br>" , items[2] +   "   :   " );
// document.write(price[2]);
// document.write("<br>" , items[3] +   "   :   " );
// document.write(price[3]);
// document.write("<br>" , items[4] +   "   :   " );
// document.write(price[4]);
// document.write("<br>" , items[5] +   "   :   " );
// document.write(price[5]);
//sum += price[0] , price[1] , price[2] , price[3] , price[4] , price[5];
//document.write("<br>" + "Total Bill  : " + sum);


// let items = ["butter", "Cheese", "Milk", "Cream", "Yoghurt", "Salt"];
// let price = [170, 50, 150, 70, 30, 90];
// let discount = ['50%', '10%'];
// document.write("Item  " + ":" + "  Price", "<br>");
// document.write("========");
// document.write("<br>", items[0] + "   :   " + price[0]);

// document.write("<br>", items[1] + "   :   " + price[1]);

// document.write("<br>", items[2] + "   :   " + price[2]);

// document.write("<br>", items[3] + "   :   " + price[3]);

// document.write("<br>", items[4] + "   :   " + price[4]);

// document.write("<br>", items[5] + "   :   " + price[5]);

// sum = price[0] + price[1] + price[2] + price[3] + price[4] + price[5];
// document.write("<br>" + "Total Bill  : " + sum);



let items = ["butter", "Cheese", "Milk", "Cream", "Yoghurt", "Salt"];
let price = [170, 50, 150, 70, 30, 90];
let discount = ['50%', '10%'];

for(let i = 0; i < items.length; i++){
    document.write(items[i] , "<br>");
}
for(let k = 0; k < price.length; k++){
    document.write(price[k] , "<br>");
}