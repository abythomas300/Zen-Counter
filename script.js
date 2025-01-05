let va;
function increase() {
    va = document.getElementById('countLabel').innerText;
    va = Number(va);
    va += 1;
    document.getElementById('countLabel').innerHTML = va;
}
function decrease() {
    va = document.getElementById('countLabel').innerText;
    va = Number(va);
    va -= 1;
    document.getElementById('countLabel').innerHTML = va;
}
function reset() {
    document.getElementById('countLabel').innerHTML = 0;
}