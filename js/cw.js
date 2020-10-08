window.addEventListener('load', function () {
    let atHund = document.getElementById('kkAt100');
    let atAll = document.getElementById('kkAll');
    let subBut = document.getElementById('sub');
    let wrapp = document.getElementById('wrap');
    let text = document.createElement('div');
    text.style.border = '1px solid black';
    text.style.background = 'white';
    console.log(atHund , atAll, subBut, wrapp);
    subBut.addEventListener('click', function () {
        let num = (atHund.value * (atAll.value / 100)) / 1;
        console.log(num);
        text.innerHTML = num;
        wrapp.appendChild(text);
    });
})