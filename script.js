// ==========================
// Part 1: Date Display
// ==========================

// Get Today's Date
var date = new Date();

// Extract month, day, and year
var month = date.getMonth() + 1; // compensate for 0-based month
if (month < 10) {
  month = "0" + month; // add leading zero
}

var day = date.getDate();
if (day < 10) {
  day = "0" + day; // add leading zero
}

var year = date.getFullYear();

// Format Date
var dateString = "<p>"
                    + "Today is " + "<span class='sbox'>" + month + "/" + day + "/" + year + "</span>" + 
                 "</p>";

// Display Result
document.getElementById("dateOutput").innerHTML = dateString;

// ==========================
// Part 2: Number Conversion
// ==========================

// Create 2 numeric strings, 1 decimal string, and 1 non-numeric string
var numStr1 = "10";
var numStr2 = "59";
var decStr = "9.99";
var nonNumStr = "See You Later";

// Convert values to Number
var num1 = Number(numStr1);
var num2 = Number(numStr2);
var decNum = Number(decStr);
var nonNum = Number(nonNumStr);

// Check if values are NaN
var isNum1NaN = Number.isNaN(num1);
var isNum2NaN = Number.isNaN(num2);
var isDecNumNaN = Number.isNaN(decNum);
var isNonNumNaN = Number.isNaN(nonNum);

// Check if values are integers
var isNum1Int = Number.isInteger(num1);
var isNum2Int = Number.isInteger(num2);
var isDecNumInt = Number.isInteger(decNum);
var isNonNumInt = Number.isInteger(nonNum);

// Format results for each variable
var result1 = "<p>" + 
                "Original: '" + numStr1 + "' -> Converted: " + num1 + " -> isNaN: " + isNum1NaN + " -> isInteger: " + isNum1Int + 
              "</p>";

var result2 = "<p>" + 
                "Original: '" + numStr2 + "' -> Converted: " + num2 + " -> isNaN: " + isNum2NaN + " -> isInteger: " + isNum2Int + 
              "</p>";

var result3 = "<p>" + 
                "Original: '" + decStr + "' -> Converted: " + decNum + " -> isNaN: " + isDecNumNaN + " -> isInteger: " + isDecNumInt + 
              "</p>";

var result4 = "<p>" + 
                "Original: '" + nonNumStr + "' -> Converted: " + nonNum + " -> isNaN: " + isNonNumNaN + " -> isInteger: " + isNonNumInt + 
              "</p>";

// Combine results into one string variable 
var finalResult = result1 + result2 + result3 + result4;

// Conditional Message for non-numeric string
if (isNonNumNaN) { 
  finalResult += "<aside> -> This value cannot be converted to a number.</aside>";
} else {
  finalResult += "<aside> -> This value was successfully converted to a number.</aside>";
}

// Display Final Result
document.getElementById("numberConversionOutput").innerHTML = finalResult;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Option A: Price Calculator 

// Values for price, tax rate, and shipping cost
var price1 = 19.99;
var taxRate = 0.07;
var shippingCost = 5.00;

// Calculations 
var subtotal = price1;
var taxAmount = subtotal * taxRate;
var total = subtotal + taxAmount + shippingCost;

// Format total to 2 decimal places
var formattedTotal = total.toFixed(2);

// Build result string
var priceResult = "<p class='sbox'>" + 
                    "Price: $" + price1.toLocaleString() + "<br>" +
                    "Tax Rate: " + (taxRate * 100).toLocaleString() + "%<br>" +
                    "Shipping Cost: $" + shippingCost.toLocaleString() + "<br>" +
                  "</p>";
                  
if (subtotal > 25) { // Conditional message if subtotal is more than $25
    priceResult += "<aside>" + 
                        "<strong>Note:</strong> Subtotal exceeds $25. Eligible for free shipping!" + 
                    "</aside>";

    total -= shippingCost; // Waive shipping cost
    formattedTotal = total.toFixed(2); // Reformat total after removing shipping cost
} 
else {
    priceResult += "<aside>" + 
                        "<strong>Note:</strong> Subtotal does not exceed $25. Not eligible for free shipping." + 
                    "</aside>";
}

priceResult += "<p class='sbox'>" + 
                    "Subtotal: $" + subtotal.toLocaleString() + "<br>" +
                    "Tax Amount: $" + taxAmount.toLocaleString() + "<br>" +
                    "Total: $" + formattedTotal +
                "</p>";

// Display result
document.getElementById("mathOutput").innerHTML = priceResult;