function calculateTriangleArea() {
   const triangleBaseInput = document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseInput.value;
   const base = parseFloat(triangleBaseText);
   
   
   const triangleHeightInput = document.getElementById('triangle-height');
   const triangleHeightText = triangleHeightInput.value;
   const height = parseFloat(triangleHeightText);
   
   // calculate triangle area
   const area = 0.5 * base * height;
   console.log(area);

   // display triangle area
   const triangleAreaSpan = document.getElementById('triangle-area');
   triangleAreaSpan.innerText = area;
}