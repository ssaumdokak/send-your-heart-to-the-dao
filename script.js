
let heartCount = localStorage.getItem('heartCount');
if (heartCount === null) {
    heartCount = 0; 
}
document.getElementById('heartCount').textContent = heartCount;


let previousHeartCount = localStorage.getItem('previousHeartCount');
if (previousHeartCount === null) {
    previousHeartCount = 0; 
} 


document.getElementById('previousHeartCount').textContent = `В прошлый раз отправлено сердец: ${previousHeartCount}`;


document.getElementById('sendHeartBtn').addEventListener('click', function() {
    heartCount++; 
    document.getElementById('heartCount').textContent = heartCount;
    localStorage.setItem('heartCount', heartCount); 


    localStorage.setItem('previousHeartCount', heartCount);
});
