/*
console.log('Hello World!')  

// let สามารถเปลี่ยนค่าได้เสมอ code บน-ล่าง
// String -ตัวอักษร
let fname = 'John'
console.log('name',fname , 'age', age)
const idcard = 123                   // const ค่าคงที่ updeat ไม่ได้


// number 
let age = 30
let height = 150.5
const pi =3.14
fname = 'Tom'

idcard = 1456
console.log('idcard',idcard)


console.log('name',fname , 'age', age)
//console.log('age',age)



 + บวก
 - ลบ
 * คูณ
 / หาร
 % mod หารเอาเศษ


 conditinon Statemant (if,else,swich)
    == เท่ากับ
    != ไม่เท่ากับ
    > มากกว่า
    >= มากกว่าเท่ากับ
    < น้อยกว่า
    <= น้อยกว่า
    

    let number1 =  5  
    let number2 = 3

    let condition1= number1 <= number2 //Boolean(ture,false)


    conditinon Statemant (if,else,swich)


 

    let number1 =  5
    let number2 =  5

    if(number1 != number2){
        console.log('this if ')
    } else if(number1== number2){
        console.log('this else if ')
    } else{
        console.log('this else')
    }

    Grad 
    >= 80  A
    >= 70  B
    >= 60  C
    >= 50  D


let score = prompt('ใส่ตัวเลข')  // input
if (score>=80){
     console.log('Grade A');   
} else if(score >= 70){ 
    console.log('Grade B ');  
} else if(score >= 60){
     console.log('Grade C '); 
} else if(score >= 50){
     console.log('Grade D '); 
}else{
     console.log('Grade F '); 
}


    && และ
    || หรือ
    !  not



let number1 = 5
let number2 = 10

// T && F = T
let condition = !(number1 >= 3  ||  number2 >=11)

console.log('reslut of condition ',condition)



let Number = 20
if (!(Number % 2 == 0)) {
    console.log('you are event.',Number)
}

for 



let counter = 0

while(counter <10 ) {  // Ture
    console.log('Hi')
    //counter +=1
    counter++
} 

for (let counter = 0; counter <10; counter++){
    console.log('Hi')
}

array


let age1 = 20
let age2 = 25
let age3 = 30


let ages = [20,25,30]  

// แทนที่
ages = [200,100,50]

console.log('age1 age2 age3',age1,age2,age3)
console.log('array',ages) 
console.log('index',ages)

// ต่อ array

ages.push(25)
console.log('puah array',ages)

// ลบ array ตัวสุดท้าย
ages.pop()
console.log('pop array',ages)



let ages = [50,20,25,30,35,40] 

if(ages.includes(30)){   //เช็คมีตัวเลขใน ages ไหม
    console.log('มีเลข 30 อยู่ใน array')
}

ages.sort()
console.log(ages)

let name_list =['aa','bb','cc']
name_list.push('dd')  
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)
console.log('name_list',name_list.length)


for (let index = 0; index < name_list.length; index++){
    console.log('name_list',name_list[index])
}

    object ใช้เก็บประเภท


let student = [{
    age :30,
    name: 'aa',
    grade: 'A'
} ,{
    age :35,
    name: 'bb',
    grade: 'B'
}]
student.push({
    age : 40,
    name: 'cc',
    grade: 'C'
})

student.pop()

for (let index = 0; index < student.length; index++){
    console.log('Studebt Number',(index+1))
    console.log('age',student[index].age)
    console.log('age',student[index].name)
    console.log('age',student[index].grade)
}



let score1 = 56
let score = 65

// ประกาศ  function
function calculat_grade (score){
if(score>=80){
    grade = 'A'
} else if(score>=70){
    grade = 'B'
} else if(score>=60){
    grade = 'C'
} else if(score>=50){
    grade = 'D'
}else{
    grade = 'F'
}
return grade
}

// การเรียกใช้ function
let grade1 =calculat_grade(score1)
console.log('Grade',grade1)



score.forEach((function) =>{
    console.log('forEach Score',s)

    
})
    score[0] = score[0] * 2
score[1] = score[1] * 2
score[2] = score[2] * 2
score[3] = score[2] * 2


let score=[20,30,40,50]
let newScore = []


for (let index =0; index < score.length; index++){
    console.log('score',score[index])
    if(score[index] >= 30){
        newScore.push(score[index])
    }
}



score =score.map((s)=>{             //เข้าถึงindex ทุกตัว
    return s*2
})
score.forEach((s) =>{
    console.log('forEach Score',s)

})
 
let score=[20,30,40,50]

for (let index =0; index < score.length; index++){
    console.log('score',score[index])
    
}

let newScore =score.filter((s)=>{
   return s >= 30
})
newScore.forEach((ns) =>{
    console.log('NewScore',ns)

})

*/

let students = [
    {
        name: 'aa',
        score : 50,
        grade : 'D'
    },{
        name: 'bb',
        score : 80,
        grade : 'A'
    }
]

let student = students.find((s)=>{    
    if (s.name == 'aa'){
        return true
    }
})

let doble_score = students.map((s)=>{
    s.score = s.score * 2
    return s
})

let heightScore = students.filter((s)=>{
    if(s.score >= 120 ){
        return true
    }
})

console.log(student)

console.log('doble_score',doble_score)
console.log('height_score',heightScore)