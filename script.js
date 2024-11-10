
let heartCount = localStorage.getItem('heartCount');
if (heartCount === null) {
    heartCount = 0; 
}
document.getElementById('heartCount').textContent = heartCount;


document.getElementById('sendHeartBtn').addEventListener('click', function() {
    heartCount++; 
    document.getElementById('heartCount').textContent = heartCount;
    localStorage.setItem('heartCount', heartCount); 
});
