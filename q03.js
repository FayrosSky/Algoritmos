import { question } from "readline-sync";
function main(){
    const A0 = Number(question("Enter the initial value of the arithmetic progression: "))
    const limit = Number(question("Enter a limit for the arithmetic progression: ")) 
    const R = Number(question("Enter the value of the commom_difference of the arithmetic progression: "))
    let i = 0
    
    

    while(A0 + R*i < limit){
        let value = A0 + R*i 
        console.log(`${value}`)
        i++
    }

}
main()