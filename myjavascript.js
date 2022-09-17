



// const items = '{"name":"tv","price":200,"model":"sony"}'
// console.log(items)

// const itemsObj = JSON.parse(items)

// console.log(itemsObj)
// console.log(itemsObj.name)


// for(let x in items ){
//     console.log(x)
// }

// const items2 = '["pc","remote","pen","something"]'

// console.log(items2[1])
// const items3 = JSON.parse(items2);
// console.log(items3[1])

// for(let x in items3){
//     console.log(items3[x])
// }

// for(let i = 0; i<items3.length; i++){
//     console.log(items3[i])
// }
    

// const text = `[
//     {
//       "userId": 1,
//       "firstName": "Krish",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "StartupistanLogo.png"
//     },
//     {
//       "userId": 2,
//       "firstName": "fayaz",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "StartupistanLogo.png"
//     },
//     {
//       "userId": 2,
//       "firstName": "asee",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "StartupistanLogo.png"
//     },
//     {
//       "userId": 2,
//       "firstName": "narati",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "StartupistanLogo.png"
//     },
//     {
//       "userId": 3,
//       "firstName": "rabin ",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "StartupistanLogo.png"
//     } 
//   ]`;
  

//   const textobj = JSON.parse(text)
  
//   const plc = document.getElementById('data_out');
//   var out = '';

//   var i =0;

//   while(i<textobj.length){
//       out += `<tr>
//       <td>${textobj[i].userId}</td>
//       <td>${textobj[i].firstName}</td>
//       <td>${textobj[i].lastName}</td>
//       <td>${textobj[i].phoneNumber}</td>
//       <td>${textobj[i].emailAddress}</td>
//       <td> <img src ="${textobj[i].photo}" style="height: 100px; width: 150px"> </td>
//       </tr>
//       `
//       i++
//       plc.innerHTML=out;

    
//   }


fetch("products.json")
.then(function(Response){
    return Response.json();
})

.then(function(products){
    var plc = document.querySelector('#data_out');
    var out = '';

    for (let pro of products){
        out +=`<tr>
        <td>${pro.id}</td>
        <td><img src='${pro.image}'style="hight:100px;width:150px;" alt=""> </td>
        <td>${pro.name}</td>
        <td>${pro.price}</td>
        <td>${pro.inventroy}</td>
        <td>${pro.code}</td>`
        
    }
    plc.innerHTML = out;
})