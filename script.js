document.getElementById('calculate-btn').addEventListener('click', function() {
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;

    if (startTime && endTime) {
        const startDateTime = new Date(`1970-01-01T${startTime}:00`);
        const endDateTime = new Date(`1970-01-01T${endTime}:00`);

        let duration = (endDateTime - startDateTime) / 1000; // duration in seconds

        if (duration < 0) {
            duration += 86400; // Adjust for crossing midnight
        }

        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);

        document.getElementById('result').innerText = `Duration: ${hours} hours and ${minutes} minutes`;
    } else {
        document.getElementById('result').innerText = 'Please enter both times.';
    }
});
