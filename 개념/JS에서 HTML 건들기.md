### HTML의 항목 가져오기
```javascript
document.getElementById("아이디");
```
이런 구문을 사용하는 방법도 있지만,

```javascript
document.querySelector("h1");
```
`CSS Selector`를 사용하는 `querySelector`를 사용하면 더욱 편하다.

<br>

---

<br>

### 이벤트 감지하기

- 클릭 이벤트 감지
```javascript
t = document.querySelector("h1");

function 함수() {
    ~~;
}

t.addEventListener("click", 함수);
```

(더 많은 이벤트들은 [링크](https://developer.mozilla.org/ko/docs/Web/API/Event) 참고)

또, 다른 이벤트를 찾는 방법으로는

```javascript
t = document.querySelector("h1");

console.dir(t);
```
이를 실행한 뒤, t 오브젝트 내부에 `on`으로 시작하는 요소들이 이벤트이다.

(예 : onclick, onchange, onclose)