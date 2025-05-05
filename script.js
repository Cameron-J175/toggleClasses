function methodOne() {
    let para = document.getElementById("toggle");
    para.classList.toggle("method1");
}

function methodTwo() {
    let para = document.getElementById("toggle");
    if(para.classList.contains("method2")) {
        para.classList.remove("method2");
    } else {
        para.classList.add("method2")
    }
}