let num = Number(prompt("Enter matrix NUmber"));
let mod = num;
num=num**2;
console.log(mod);
document.writeln("<h1>pattern generation</h1>");
for (num; num > 0; num--) {
    if (num % mod != 1) {
        document.write(num + " ");
    }
    else {
        document.write(num + " ");
        document.writeln("<br>"); //new line 
        for (let j = num - mod; j < num && j>0; j++) {
            document.write(j + " ")
        }
        num = num - mod;
        document.writeln("<br>");
    }
}

