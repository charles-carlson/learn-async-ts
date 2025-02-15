const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let sumOfRowsPromises : Promise<number>[] = []
async function totalSum(arr:Promise<number>[]) : Promise<number>{
    let sum = 0
    for(const row of arr){
        sum += await Promise.resolve(row)
    }
    return sum
}

async function sumRow(arr:number[][], rIdx:number):Promise<number>{
    return new Promise((resolve,reject)=>{
        let sum = 0
        if(arr.length > rIdx){
            for(let i =0;i<arr[rIdx].length;i++){
                sum += arr[rIdx][i]
            }
            resolve(sum)
        }
        else{
            reject("Cannot sum empty array")
        }
    })
}
async function main(){
    for(let x=0;x<array2D_1.length;x++){
        sumOfRowsPromises.push(sumRow(array2D_1,x))
    }
    console.log(sumOfRowsPromises)
    let total_sum = await totalSum(sumOfRowsPromises)
    console.log(total_sum)
}
main()
