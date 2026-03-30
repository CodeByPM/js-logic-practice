let course=["bca",'bba','msc','bcom','ma']

//pop method jo last se remove karta hai 

course.pop()
console.log(course)//[ 'bca', 'bba', 'msc', 'bcom' ]

// ye starting se remove karega
course.shift()
console.log(course)//[ 'bba', 'msc', 'bcom' ]

// aaray + loop

for(let i=0;i<course.length;i++){
    console.log("index", i,course[i])
}