// const btnEl = document.querySelector(".btn");

// btnEl.addEventListener("mouseover", (event)=>{
//    const x = (event.pageX - btnEl.offsetLeft);
//    const y = (event.pageX - btnEl.offsetRight);

//    btnEl.style.setProperty("--xPos",x +"px");
//    btnEl.style.setProperty("--yPos",y+"px");
// })

// MAP
// const arr = [1,3,2,4];
// console.log(arr);

// const res = arr.map((ele)=>ele*2);
// console.log(res);

// FILTER

// const arr = [2,5,8,3];
// const res = arr.filter((x)=> x%2);
// console.log(res);

// REDUCE

// const arr = [4,2,1,5];
// const firstElement = arr[0];

// const res = arr.reduce(function(acc,curr){
//    if (curr < acc){
//       acc = curr
//    }
//    return acc

// },firstElement);

// console.log(res);

const res = users.filter((data)=>{
   if (data.age < 30){
      return data.firstName;
   }
})
