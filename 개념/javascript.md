### 변수 정의


상수 변수형 정의 : const 변수이름 = 값;

변수 변수형 정의 : let 변수이름 = 값;

리스트 변수형 정의 const(let) 변수이름 = [1,2,3,4];

```javascript
const 이름 = 값;
let 이름 = 값;
let 리스트 = ['a','b','c','d'];
let 변수;
```
`let 변수;` 처럼 변수에 값을 넣어주지 않으면 `undefined` 가 나온다.

<br>

---

<br>

### const / let 차이?

const는 나중에 바꿀 수 없음, let은 나중에 바꿀 수 있음

array : 파이썬의 리스트와 비슷. array 내부 항목의 변수형은 달라도 됨.

<br>

---

<br>

### array 명령어

```javascript
리스트[2] = 'C';
리스트.push('e');
```

`파이썬의 리스트.append()` 와 같다.

-   파이썬의 dict와 JS의 object 차이 공부해보기

<br>

---

<br>

### JS에서의 함수

```javascript
function hello(){
    ~~~;
    ~~~;
    return ~~;
}
```

이러한 구조로 만들어진다.

<br>

---

<br>

### Objects

```javascript
const 오브젝트명 = {
    name: "hakelope",
    sayHello: function (personName) {
        console.log("hello" + personName);
    },
};
```

추가로, `console.log();` 와 같은 함수는

`console` 라는 오브젝트 내부의 함수다.

<br>

---

<br>

### JS에서의 input()

일반적으로, python에서는 이와 같이 입력을 받았다.
```python
a = input()
print(a)
```

javascript에서는 prompt()를 사용한다.
```javascript
const a = prompt();
console.log(a);
```
>하지만, 웹 위에 팝업을 띄우는 방식이며, 디자인 변경조차 불가해 잘 사용하지 않는다.

### \+ JS에서의 int()

```javascript
parseInt('213')
```

parseInt() 내부에 문자를 넣으면 `NaN(Not a Number)` 오류가 출력된다.

### \+ NaN 판정하기

```javascript
isNaN(parseInt('213')) // true
```

<br>

---

<br>

### JS에서의 if문

```javascript
if (조건1) {
    (조건1일때 코드);
}
else if (조건2) {
    (조건2일때 코드);
}
else {
    (다 아닐때 코드);
};
```

<br>

---

<br>

### 비교 연산자 (`==` / `===`) 의 차이

```javascript
console.log('1' == 1) // true
console.log('1' === 1) // false
console.log(0 == []) // true
```

`==` 는 다른 타입끼리 비교할 때 임의로 형 변환을 하여 자료형을 같게 한 뒤 비교한다.

하지만 `===` 는 타입이 다르다면 얄짤 없이 false를 반환한다.

따라서 python의 `==` 처럼 비교 연산을 하고 싶다면 `===` 를 사용하는 것이 바람직하다.