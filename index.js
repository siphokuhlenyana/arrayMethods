// let class2 =['Chloe','Gwiba','Marcus','Oyintada']
// class2.push('Taahir')
// class2.pop()
// class2.shift()

// class2.forEach(person =>{
//     // console.log(person);
// })

// class2.slice()
// let updateClass2 =['Akhona','Yolanda','Lebu']
// let update =class2.concat(updateClass2)
// let fil=update.filter(person => person !== 'Gwiba')
// update.map((key ,value)=>{
// console.log(key,value);
// })

// let nums=[1,2,3,4,5,6]
// let reduced=nums.reduce((total,num) =>{
//     return num +total
// },0)
 
// let moreStud=['Zen','Lihle']
// let variable=update.splice(1,0, ...moreStud)
// console.log(update.reverse() );

// let name="power"
// console.log(name .reverse());

//Creates buttons then disables button 5,6,7
// let buttons =document.querySelectorAll('button')
// buttons.forEach(button =>{
//     if(button.innerText ==5 || button.innerText ==6 || button.innerText ==7 ){
//         button.setAttribute('disabled',"")
   
    
//     } else {
//         button.addEventListener('Click',()=>{
//         alert(button.innerText)

//     } )
// }
        
// })
// Create a function that takes in 2 arguments and adds  the first one to the array and removes the second 
// // argument, if the second argument is empty the function should only add the item to the array.
//  let class2 =['Jayden','Elvin','Zen','Mohamad']
// //  let updateClass2=['Taahir','Chandre']
// //  let variable =class2(updateClass2.splice(2,1... updateClass2))
// //  console.log(variable);

// //  function add(name1,name2){
// //     class2.push(name1)
// //  }
// //  add('Yonela')
// //  console.log(class2);
 
//  function remove(nam1,nam2){
//     class2.push(nam2)
//     if(nam2 !== undefined ){
//         class2.splice(class2.indexOf(nam2),1)
//     }
//  }
//  remove('',"Zen")
// console.log(class2);

// //Access obj using for in loop .

// let person_1 ={firstName:'Asanda',favColor:'Beige'}
// let person_2 ={firstName:'Olwethu',favColor:'Black'}
// let person_3 ={firstName:'Siphokuhle',favColor:'Turquoise'}

// let people =[
//     {firstName:'Asanda',favColor:'Beige'},
//     {firstName:'Olwethu',favColor:'Black'},
//     {firstName:'Siphokuhle',favColor:'Turquoise'}
// ]
// for(const person of people){
// for(const item in person){
//     console.log(person[item]);
// }

// }

//Write a function that calculates the area of a circle and it takes in an argument of the radius 

// function calculate(radius){
//     return Math.PI *radius *radius

// }
// let area =calculate(4)
// console.log(area);

//Write a function that returns the date of today 
// function dateToday(){
// // const today =new date()
// const dd= String(today.getDate()).padStart(2,'0')
// const mm= String(today.getMonth())+1 .padStart(2,'0')
// const yyyy= String(today.getFullYear())

// const todayDate= mm + '/' + dd +'/' + yyyy ;
// return todayDate


// }
// console.log(dateToday());

//Create a mini todo list . When you press submit it should add the input to the unordered  list below.
//Input should be cleared when the submit button is pressed 
//BONUS :When clicking on a task that was added (because it was completed ),it should delete the item from the list

let input=document.getElementsByTagName("input")
let button=document.querySelector('[name="submit"]')
let toDo=document.querySelector('div')

button.addEventListener('Click',()=>{

})
