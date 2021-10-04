'hello'.slice(0, 1);  //   slice(start?: number, end?: number): string;
'hello'.substring(0, 3);
'hello'.substr(1, 2); //  substr(from: number, length?: number): string;
// 'hello'.match();

//970101-2345678
//990301-1234567
//000503-3456789
//0109014567890

function checkGender(birthInfo) { // 입력된 주민번호 => 남여 구분 하는 함수.
    // 2000년 01.01 이전 출생자 주민번호 뒷자리 (1: 남자, 2: 여자)
    // 2000년 01.01 이후 출생자 주민번호 뒷자리 (3: 남자, 4: 여자)
  
    let today = new Date();
    console.log(today.getFullYear());
    
    let year = birthInfo.substr(0, 2);
    birthInfo = birthInfo.replace('-','');
    let s = birthInfo.charAt(6);
    let returnMessage = '';
    let v= '';
    if (s =='1'|| s=='3'){
        v = '남자';
    } else if (s =='2'|| s =='4'){
         v ='여자';
    } else {
        
    }
    return v;
} 

console.log(checkGender('970101-2345678'));
console.log(checkGender('990301-1234567'));
console.log(checkGender('000503-3456789'));
console.log(checkGender('0109014567890'));  