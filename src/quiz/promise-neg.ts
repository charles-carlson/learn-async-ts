const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
const negativesPerRowPromises : Promise<string>[] = [];

function negativesInRow(arr:number[][], idx : number):Promise<string>{
    return new Promise((resolve,reject)=>{
        if(arr.length === 0){
            reject("Cannot find a negative number in an empty array")
        }
        for(let i =0;i<arr[idx].length;i++){
            if(arr[idx][i] < 0){
                resolve(`Found a negative number in row ${idx}`)
            }
        }
        resolve(`Found no negative numbers in row ${idx}`)
    })
}

for(let x = 0;x<array2D_3.length;x++){
    negativesPerRowPromises.push(negativesInRow(array2D_3,x))
}
Promise.all(negativesPerRowPromises)
.then((rows)=>{
    for(let row of rows){
        console.log(row);
    }
}).catch((e)=>console.log(e))