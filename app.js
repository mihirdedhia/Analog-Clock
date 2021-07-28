console.log("Welcome to Analog Clock App...");

const degRotate = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    // let mm = day.getMinutes() * degRotate;
    let mtime = day.getMinutes();
    let ss = day.getSeconds() * degRotate;
    let mm = day.getMinutes() * degRotate + (ss / 60);

    // hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
    hr.style.transform = `rotateZ(${hh + (mtime / 2)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000);

function toggleClass() {
    const body = document.querySelector('body');
    body.classList.toggle('light');
}
