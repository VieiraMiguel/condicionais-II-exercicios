const num = prompt("Digite um número qualquer")

//a)

if(num%2 == 0){
    if(num%3 == 0){
        alert("O número é divisível por 2 e por 3")
    }else{
        alert("O número é divisível por 2, mas não por 3")
    }
}else if(num%3 == 0) {
    if(num%2 == 0){
        alert("O número é divisível por 2 e por 3")
    }else{
        alert("O número é divisível por 3, mas não por 2")
    }
}else{
    alert("O número não é divisível por 2 nem por 3")
}

//b)

if(num%2 == 0 && num%3 == 0){
    alert("O número é divisível por 2 e por 3")
}else if(num%2 == 0 && num%3 != 0){
    alert("O número é divisível por 2, mas não por 3")
}else if(num%3 == 0 && num%2 != 0){
    alert("O número é divisível por 3, mas não por 2")
}else{
    alert("O número não é divisível por 2 nem por 3")
}
