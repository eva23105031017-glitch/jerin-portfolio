/*let age = 18;
if (age >= 18) {
    console.log("you are an adult");
} else {
    console.log("you are a minor");
}
let mark= 85;
if (mark >= 90) {
    console.log("you got an A grade");
} else if (mark >= 80) {
    console.log("you got a B grade");
} else {
    console.log("you got a C grade");
}

let holiday = "Tuesday";
if (holiday === "Monday") {
    console.log("we will meet on monday");
} else if (holiday === "Tuesday") {
    console.log("we will meet on tuesday");
} else if (holiday === "Wednesday") {
    console.log("we will meet on tuesday");
} else {
    console.log("we will meet next week");
}
let usertype = "admin";
switch (usertype) {
    case "admin":
        console.log("admin user");
        break;
        case "teacher":
            console.log("teacher user");
            break;
            case "student":
                console.log("student user");
                break;
                case "guest":
                    console.log("guest user");
                    break;
                    default:
                        console.log("unknown user");
}
let unit= 300;
switch (unit) {
    case 100:
        console.log("residential unit");
        break;
        case 200:
            console.log("commercial unit");
            break;
            case 300:
                console.log("industrial unit");
                break;
                default:
                    console.log("unknown unit");
}   
let sumA = 5;
let sumB = 10;
let opraetor = "%";
switch (opraetor) { 
    case "+":
        console.log (sumA + sumB);
        break;
        case "-":
            console.log(sumA-sumB);
            break;
            case "*":
                console.log(sumA*sumB);
                break;
                case "/":
                    console.log(sumA/sumB)
                    break;
                    case "%":
                        console.log(sumA%sumB);
                        break;
                        default:
                            console.log("invalid oparetor");
}
let day = "1";
switch (day) {
    case "1":
        console.log("monday");
        break;
        case "2":
            console.log("tuesday");
            break;
            case "3":
                console.log("wednesday");
                break;
                case "4":
                    console.log("thursday");
                    break;
                    case "5":
                        console.log("friday");
                        break;
                        case "6":
                            console.log("saturday");
                            break;
                            case "7":
                                console.log("sunday");
                                break;
                                default:
                                    console.log("invalid day");
}       
let product = "1";
switch (product) {
    case "1":
        console.log("laptop",1000,"taka");
        break;
        case "2":
            console.log( "mobile",500,"taka");
            break;
            default:
                console.log("invalid product"); 
}
let x=0
let y=10
//console.log(x++);
//console.log(++y);
//console.log(x);
//console.log(x+=y);
//console.log(x-=y);
//console.log(x<y? "x is less than y" : "x is greater than y");
console.log(x&&y? "true" : "false");
let name= 0;
let age1= 0;
console.log(name || age1 ? "name and age are defined" : "name and age are not defined" );
console.log(!name);
for (let i = 0; i < 5; i++) {
    console.log(i);
}
for ( let number=11; number>10; number++ )
{ console.log(number);
if (number==20) {
    break;
}
}
for (let i = 9; i > 5; i++) {
    console.log(i);
    if (i===15) {
        break;
    }   
}
//for (let i = 1; i<=99; i+=2) {
   // console.log(i);

//} 
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

let sum = 8
for (let i = 1; i <= 10; i++) {
    console.log(i, sum*i);
}
let sum = 0;
for (let i = 0; i <=100; i++) {
    sum += i;
}
console.log(sum);
sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);
sum3 = 0;
sum5 = 0;
for (let i = 1; i <= 100; i++) {
if (i % 3 === 0) {
    sum3 +=i;
}
if (i % 5 === 0) {
    sum5 +=i;
}           
console.log(sum3, sum5);
}
for (let i = 0; i <= 100; i++) {
    console.log(i+=1);
}
sum = 0;
    for (let i = 0; i <= 100; i++) { sum += i;
    }
    console.log(sum);
    
//addition of 1 to 100 number
    let sum = 0
    for (i=1;i<=100;i++)
    {
        sum+=i
    }
   console.log(sum)
// addition off those number are divided by 3 of 1 to 100
   let sum1 = 0
   for (i=1 ; i<=100 ;i++ )
   {
if (i % 3 ===0 ) { sum1 += i
   
} 
   } console.log(sum1);
   //
  let sumA = 0
  for ( i=1;i<=100;i++)
  {
    if ( i % 2===0){sumA += i
  }
 
} console.log(sumA)
//
 let sumB =0
for (let i = 1;i<=100;i++){
    if( i%2===0){
        continue 
    } sumB+=i
}console.log(sumB)
//
let sumC =1
for (let i = 1;i<=20;i++){
    sumC*=i
} console.log(sumC)
 let sum =0;
 let i =1;
 while (i<=20){
    sum+=i;
  
      i++;
 }

    console.log(sum);

    let sum1 =0;
    let j =1;
    while (j<=20){
        if (j%2===0 && j%5===0){ sum1+=j;
        }   
        j++;
    }
    console.log(sum1)
    let sum = 0;
    let i = 1;
    do { if (i % 2 ===0 ) {
        sum += i;
        
    } i++;
}while (i <= 100);
    console.log(sum);
    // for...if
    let sum =0;
 
    for ( let i =1;i<=100;i++)
    {
            if( i % 3 === 0 && i%5 !== 0  )    
           {  sum+=i;}
        

    } console.log(sum);
    //while
    let sum1 = 0;
    let I = 1;

    while (I <= 100) {
        if( I % 3 === 0 && I%5 !== 0 )
        {
            sum1+=I;
           

        }
 I++;
    } console.log(sum1);
    //do while
    let sum2 = 0;
    let j = 1;
    do {
        if(j%3===0 && j%5 !== 0)
        {
            sum2 +=j;
        }j++
    } while ( j <= 100)
        console.log(sum2)
       // function parameter return
       function sumA (X,Y,Z){
        let i=X+Y+Z;
        return i/3;
       }
     /*  function sumA(x,y) {
        return x-y;
       }
       let result = sumA(5,10,15);
      // let result = sumA(5,10) + sumA(8,15);
       console.log(result);


       function cheekEven(x) {
       if (x%2===0){
        return "even";
       }
        else {
          return "odd"  
        }
  
}
let number = cheekEven(5)
console.log(number)

//10to100

function sumA (X){
    for(i=1;i<=100;i++){
 X+=i
    } return X
}
let reslt = sumA(0)
console.log(reslt)

function sumB (x){
    let j=1;
    while(j<=100){
        x+=j;
        j++;
    }return x

}
let sum1= sumB(0);
console.log(sum1);

function sumC (q){
    let k=1;
    do{
        q+=k;
        k++
    } while(k<=100)
        return q
    
}
let B = sumC(0)
console.log(B)
//additon of even and odd number


function addEven (x){
    let i=1;
    while(i<=5){
        if(i%2!==0){
 x+=i;
        }
       
        i++;
}
    return x

}
let result1 = addEven(0)
console.log(result1)

function addeveN(X){
    let j=1;
    do{     
         if(j%2!==0){
        X+=j;
         }
      j++;
    } while(j<=5)
       return X
} 

let result2 = addeveN(0)
console.log(result2)


let numbers = [12,7,24,9,16,5,30];
for(let number of numbers){
    if(number%2===0&& number>=10)
        console.log(number)
}
let student = {
    name:"jerin",
    age:22,
   gread: {
    math:85,
    physics:78,
    chemistry:92,}

}
for(let key in student) {
   //console.log(key);
  // console.log(student[key]);
   
  student.gread
 }
    let max=0
  for(let key in student.gread){
    if (student.gread[key] >max ) 
max= student.gread[key]


} console.log(max)
let student = { name: "jerin",
age: 25,
roll: 17,
department: "architacture"}
for (let key in student){
    console.log(key) 
console.log(student[key]) 
//console.log(key+":"+student[key])
}
let frouts = [
    "apple","banana","painapple","mango"
]
for ( let frout of frouts){
    console.log(frout)
    console.log(frout[2])
}


const fruit = ["apple","banana"]
const vegetables =["carrot","tomato"
]
const result = fruit.concat(vegetables)
console.log(result)

const number=[2,8,12,15,19,20]
 //const Filter= number.filter((num)=>num%2===0)
 //console.log(Filter)
 //const Fiend = number.find((num)=>num%2!==0)
 //console.log(Fiend)
 const FineIndexof = number.findIndex((num)=>num>15)
 console.log(FineIndexof)*/
 const fruits = ["apple","mango","banana","orange"]
 console.log(fruits.at(1))
 console.log(fruits.includes("mango"))
 const number =[12,18,25,30,40]
 console.log(number.every((num)=>num>10))
 const result =number.filter((n)=>n>20)
 console.log(result)
 let veriabal = [5,12,17,22,27]
 console.log(veriabal.find((num)=>num>20))
 console.log(veriabal.findIndex((x)=>x>20))
 const len=["HTML","css"]
 const leng=["js","react"]
 const result1 =len.concat(leng)
 console.log(result1)
 console.log(result1.join("-"))
 const array1=[10,20,30,20,40,20]
 const result2=array1.lastIndexOf(20)
 console.log(result2)
 console.log(array1.includes(50))
 console.log(array1.find((num)=>num>20))
 console.log(array1.findIndex((num)=>num>10))
 
