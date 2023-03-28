// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 03/28/2023
// This file contains the JS functions for index.html

// This function calculates the area of a trapezoid
function calculateArea () {
  // Get the user input
  let height = parseFloat(document.getElementById("height").value);
  let sideA = parseFloat(document.getElementById("side-a").value);
  let sideB = parseFloat(document.getElementById("side-b").value);

  // Perform mathematical equations
  let area = ((sideA + sideB) * height) / 2
  
  //displaying calculations to screen
  document.getElementById("calculations").innerHTML = "The area of the trapezoid is " + area.toFixed(2) + " cm<sup>2</sup>."
}