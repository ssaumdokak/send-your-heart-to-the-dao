let heartCount = 0;

document.getElementById('sendHeartBtn').addEventListener('click', function() {
    heartCount++;
    document.getElementById('heartCount').textContent = heartCount;
});
