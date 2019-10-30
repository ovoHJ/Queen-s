function check() {
    var school = document.f.school.value
    var name = document.f.name.value
        
    if(school == ""){
        alert("학교를 입력해주세요");
        return false;
    }
    if(name == ""){
        alert("이름을 입력하세요");
        return false;
    }
}