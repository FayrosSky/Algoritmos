import { question } from "readline-sync";
function main(){
    let num = Number(question("Enter a number: "))
    let result = 1
    
    while(num > 1){
        result += num
        num--
    }
    console.log(`The sum of the entered up number to 1 is equal to: ${result}`)
}
main()