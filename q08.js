import { question } from 'readline-sync'
function main(){
    const N = Number(question("Enter a value for N: "))
    const upper_limit = Number(question("Enter a upper limit: "))
    const lower_limit = Number(question("Enter a lower_limit: "))
    let count = lower_limit

    while(N <= upper_limit){
        let sum = 1
        while(count <= upper_limit){
            if(count % N === 0)
            console.log(`The multiples of the number entered ${N} between ${upper_limit} and ${lower_limit} are: `)
            count++
        }
                
    }   
    
}
main()


