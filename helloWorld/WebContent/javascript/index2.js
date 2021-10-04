function sum(a, b) {
    let n1 = a;
    let n2 = b;
    return n1 + n2;
}

console.log(sum(11, 22));

function createObject(name, age, score) {
        let obj = { 
        name: name,
        age: age
    }; //new Object();
    obj.score = score;
    obj.pass = (score >= 60) ? 'pass' : 'fail';
    return obj;

}

let newObj = createObject('유상우', 23, 55);
console.log('이름: ' +  newObj.name +  ' 나이: ' + newObj.age +  ' 점수: ' + newObj.score +' 합격: ' + newObj.pass); 

// TR 태그 생성 연습.
function createTr(person) {
    let tag = '<tr>';
    for(let field in person){
        tag += '<td>' + person[field] + '</td>'; 
    }
    if(person.score >=60){
        tag += '<td class="pass">pass</td>'; 
    } else {
        tag += '<td class="fail">fail</td>'; 
    }
    tag += '</tr>';
    return tag;
}

createTable() ;

// 위의 순서가 index.html 파일 만들어지고 index1.js => func createTable() => createTable(); 에러가 나고. createTable(); 호출부분을 아래와 같이 수정 하면 됨
//                                      index2.js => func createTr() => createTable(); 요로케 실행하면 에러가 안남.
//                   인덱스3을 만들어서   index3.js => createTable();  호출해도 됨. 대신 인덱스1과 2는 createTable(); 없어야 한다.