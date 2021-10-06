    
    let xhtp = new XMLHttpRequest();
    xhtp.onload = function() {
        let data = JSON.parse(xhtp.responseText);
        console.log(data);
        showEmpList(data);
    }
    xhtp.open ('get', '../EmpJsonServlet.json');
    xhtp.send();
    
    function showEmpList(data) {
        let titles = ['사원번호', '이름', '이메일', '입사일자', '직무' ,'기능'];
        
        let table, tr, td, txt;
        table = document.createElement('table');
        table.setAttribute('border', '1');
        
        tr = document.createElement('tr');
        for (let title of titles) {
            td = document.createElement('th');
            txt = document.createTextNode(title);
            td.appendChild(txt);
            tr.appendChild(td);
        }
        table.appendChild(tr);
        
        for (let Date of data) { // in 쓰면 오류뜸
             tr = document.createElement('tr');
             for (let field in data[0]) {
                td = document.createElement('td');
                txt = document.createTextNode(Date[field]);
                td.appendChild(txt);
                tr.appendChild(td);   
             }
            
             let btn = document.createElement('button');
             btn.innerHTML = '삭제';
             td = document.createElement('td');
             td.appendChild(btn);
             tr.appendChild(td);

             table.appendChild(tr);
        }
        
        document.getElementById('show').appendChild(table);
    }