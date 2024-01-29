// ++++++++++++ for of   +++++++++

const arr = [1,2,3,4,5]
for(const num of arr){
    //console.log(num)
}


const greetings = "Namste"
for(const greet of greetings){
    //console.log(`Each char is : ${greet}`)
}




//for in loop in object


const myObject ={
    js:"javaScript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift"
}
for(const key in myObject){
   // console.log(`${key} shortcut is for ${myObject[key]}`)
}


//  in array

// const language = ["js", "ruby", "c++", "java", "python"]

// for(const key in language){
//     //console.log(key)
//     //console.log(language [key])
// }



//const map = new map();
// map.set('IN', "India")
// map.set('USA', "America")
// map.set('FR', "France")
// map.set('RU', "Russia")

//we can iterate map like this
// for(const key in map){
//     console.log(key);
//}








//+++++++++++++++++    

const coding = ["js", "ruby", "c++", "java", "python"]
coding.forEach( function (val){
   // console.log(val)
})



coding.forEach( (item, index, arr ) =>{
    //console.log(item, index, arr)
})




const myCoding= [
    {
        languageName: "javaScript",
        languageFileName:"js"
    },

    {
        languageName: "c++",
        languageFileName:"cpp",
    },

    {
        languageName: "python",
        languageFileName:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})