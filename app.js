// string
let firstName = 'masoume'
let lastName = 'vesali'
let fullName = firstName + ' ' + lastName

// Number
let num1 = 12
let num2 = 20
// let sum = num1 + num2
// let sum = num1 / num2
let sum = num1 * num2


// let res = num1 + num2 + fullName

let res = fullName + num1 + num2 

console.log(res)

//if
let age = 12

if (age < 20) {
    console.log('Is Yonge')
}

if (age > 20) {
    console.log('Is Child')
}

//if else

let validEmail = true
let validPassword = false

if (validEmail && validPassword) {
    console.log('Logged In')
} else if (validEmail || validPassword) {
    console.log('Is correct!')
}

// next else if

let isUser = false
let userRole = 'admin'

if (isUser) {
    console.log('welcome User')
}else if (userRole === 'admin') {
    console.log('Welcome Admin!')
} else {
    console.log('welcome!')
}

// scup in variables

let firstname = 'Masoume'

if (true) {
    let lastname = 'Vesali'
    console.log(lastname)
    if (true) {
        let age = '27'
        console.log(age)
    }

}

console.log(firstName)

// next
let name = 'test1'
 if(true){
    // let name = 'test2'
    if(true){
        // let name = 'test3'
        console.log(name)
    }
 }

