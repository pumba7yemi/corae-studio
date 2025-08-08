document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const feedback = document.getElementById('userFeedback').value;
    if (feedback.trim()) {
        localStorage.setItem('userFeedback', feedback);
        document.getElementById('responseMessage').textContent = 'Thank you for your feedback!';
        document.getElementById('userFeedback').value = '';
    } else {
        document.getElementById('responseMessage').textContent = 'Please enter feedback before submitting.';
    }
});