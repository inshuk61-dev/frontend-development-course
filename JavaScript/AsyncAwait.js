function getData(studentId, getNewdata) {
    setTimeout(() => {
        console.log("Student", studentId)

        if (getNewdata) {
            getNewdata()
        } else {
            console.log("Data Not Found")

        }
    }, 2000);
}


getData(1, () => {
    getData(2, () => {
        getData(3, () => { })

    })
})


//  Async Await 
 function fetchData(student , id){
    return new Promise ((resolve)=> {
        setTimeout(() => {
            console.log(student , id)
            resolve()
        }, 2000);
    })
}

async function getData() {
    await fetchData("Inshal" , 1)
    await fetchData("Lubna" , 2)
    await fetchData("Aiman" , 3)
    
}

getData()