const choi = {
    name: '최선영',
    age: 20,
    score: 90
}

const han = {
    name: '한동일',
    age: 21,
    score: 89
}

const yun = {
    name: '윤희성',
    age: 22,
    score: 58
}

// 교수님 풀이.
const persons = [choi, han, yun];
// function createTable(){

// let tag = '<table border="1"><thead><tr><th>이름</th><th>나이</th><th>점수</th><th>합격여부</th><tr></thead>';
// tag += '<tbody>';
// for(let person of persons) {
//     if(person.score>=60){
//         tag += '<tr class="pass">';
//     } else {
//         tag += '<tr class="fail">';
//     }
   
//     for(let field in person) { //field 갯수.
//         tag += '<td>' + person[field] + '</td>';
//     }
//     if(person.score >= 60) {
//         tag += '<td class= "pass">Pass</td>';
//     } else {
//         tag += '<td class= "fail">Fail</td>';
//     }
//     tag +='</tr>';
// }
//    tag = tag + '</tbody></table>';
//    document.write(tag);

// }

// createTable();

//다시해보기. 테이블 먼저 만들고 헤드부분 만들고 바디부분 만들고 
// const persons = [choi , han , yun] ;
// // 내가한거
    document.write("<table border=\"1\" style=\"text-align: center;\">") ;
    document.write("<tr>") ;
    document.write("<td>이름</td><td>나이</td><td>점수</td>") ;
    document.write("</tr>") ;
        for(let person of persons) {
    document.write("<ul>") ;
    document.write("<tr>") ;
        for(let field in person) { document.write("<td>" + person[field] + "</td>") ; }
    document.write("</tr>") ;
    document.write("</ul>") ;
    }
    document.write("</table>") ;



    function createTable() {

// // 교수님풀이
  let tag = "<table border='1' style=\'text-align: center;\'>" ;
     tag += "<thead><tr><th>이름</th><th>나이</th><th>점수</th><th>합격여부</th></tr></thead>" ;
     tag += "<tbody>" ;
 for(let person of persons) {
    // if(person.score >= 60) {
    //     tag += "<tr class='pass'>" ;
    // } else {
    //     tag += "<tr class='fail'>" ;
    // }
    // for (let field in person) { // field 갯수.
    //     tag += "<td>" + person[field] + "</td>" ;
    // }
    // if(person.score >= 60) {
    //     tag += "<td class='pass'>Pass</td>" ;
    // } else {
    //     tag += "<td class='fail'>Fail</td>" ;
    // }
    // tag += "</tr>" ;
    tag += createTr(person);
 }
 tag = tag + "</tbody></table>" ;
 document.write(tag) ;
}

//createTable() ;
  

