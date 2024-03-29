let btn1 = document.getElementById("mybtn1");
let btn2 = document.getElementById("mybtn2");
let copyCode = document.querySelector(".copy-code");
let cross = document.querySelector(".btn");
let div = document.querySelector('.alert');
let rgb1 = "#000";
let rgb2 = "#fff";

const hexValues = () => {
    let Hex = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + (Hex[Math.floor(Math.random() * 16)]);
    }
    return color;
};

const handleBtn1 = () => {
    rgb1 = hexValues();
    console.log(rgb1);
    document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`;
    copyCode.innerHTML = `background-image : linear-gradient(to right, ${rgb1},${rgb2})`
    btn1.innerHTML = rgb1;
};
const handleBtn2 = () => {
    rgb2 = hexValues();
    document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`
    copyCode.innerHTML = `background-image : linear-gradient(to right, ${rgb1},${rgb2})`
    btn2.innerHTML = rgb2;
};
copyCode.addEventListener("click", () => {
    try {
        navigator.clipboard.writeText(copyCode.innerText);
        div.style.display = 'flex';
        console.log(div.textContent);
    } catch (error) {
        alert('Error copying text: Older versions of browsers do not support this function, You can select the text to copy');
    }
});
cross.addEventListener('click', () => {
    div.style.display = 'none';
})

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);