const age = parseInt(prompt("나이를 입력하세요."));

if (isNaN(age) || age < 0) {
    console.log('양의 숫자만 입력하세요.');
}
else if (age >= 19 && age <= 50){
    console.log('가능');
}
else if (age <= 80){
    console.log('적당히 가능');
}
else{
    console.log('불가능')
};