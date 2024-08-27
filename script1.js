function performOperations(numbers, operators) {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        let operator = operators[(i - 1) % operators.length]; 
        switch (operator) {
            case '+':
                result += numbers[i];
                break;
            case '-':
                result -= numbers[i];
                break;
            case '/':
                result /= numbers[i];
                break;
            case '%':
                result %= numbers[i];
                break;
            case '*':
                result *= numbers[i];
                break;
            default:
                console.log("Invalid operator");
        }
    }

    return result;
}

function main() {

    let number = [];
    let opp = [];
    let num = "";
    let op = ''



    document.getElementById('clr').addEventListener('click', () => {
        document.querySelector(".question").innerHTML = ""
        document.querySelector(".answer").innerHTML = ""
    })

    Array.from(document.querySelectorAll(".number")).forEach((e) => {
        e.addEventListener("click", () => {
            if (document.querySelector(".answer").innerHTML !== "") {
                document.querySelector(".question").innerHTML = ""
                document.querySelector(".answer").innerHTML = ""
            }
            document.querySelector(".question").innerHTML += e.innerHTML
            num += e.innerHTML

        })
    })


    document.getElementById("add").addEventListener("click", (e) => {
        console.log(parseInt(num))
        number.push(num)
        console.log(number)
        num = ""
        document.querySelector(".question").innerHTML += " + ";
        op = '+'
        opp.push(op)
        op = ''
        console.log(opp)
    })
    document.getElementById("min").addEventListener("click", (e) => {
        console.log(parseInt(num))
        number.push(num)
        console.log(number)
        num = ""
        document.querySelector(".question").innerHTML += " - ";
        op = '-'
        opp.push(op)
        op = ''
        console.log(opp)
    })
    document.getElementById("mul").addEventListener("click", (e) => {
        console.log(parseInt(num))
        number.push(num)
        console.log(number)
        num = ""
        document.querySelector(".question").innerHTML += " * ";
        op = '*'
        opp.push(op)
        op = ''
        console.log(opp)
    })
    document.getElementById("div").addEventListener("click", (e) => {
        console.log(parseInt(num))
        number.push(num)
        console.log(number)
        num = ""
        document.querySelector(".question").innerHTML += " / ";
        op = '/'
        opp.push(op)
        op = ''
        console.log(opp)
    })
    document.getElementById("per").addEventListener("click", (e) => {
        console.log(parseInt(num))
        number.push(num)
        console.log(number)
        num = ""
        document.querySelector(".question").innerHTML += " % ";
        op = '%'
        opp.push(op)
        op = ''
        console.log(opp)
    })



    document.getElementById("equ").addEventListener("click", () => {
        number.push(num)
        num = ''
        let numbers = number.map(Number);
        let finalResult = performOperations(numbers, opp);
        number.length = 0
        opp.length = 0

        console.log(finalResult)
        document.querySelector(".answer").innerHTML += finalResult
    })





}
main()