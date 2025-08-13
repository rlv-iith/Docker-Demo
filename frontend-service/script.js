document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const submitBtn = document.getElementById('submitBtn');
    const responseArea = document.getElementById('responseArea');

    submitBtn.addEventListener('click', async () => {
        const textToSend = inputText.value;
        if (!textToSend) {
            responseArea.textContent = 'Please enter some text before submitting.';
            return;
        }

        responseArea.textContent = '... Calling API ...';

        try {
            // This URL works because the browser is on the host machine,
            // which can access the Node.js container via its published port 3000.
            const response = await fetch('http://localhost:3000/call-python', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: textToSend }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            responseArea.textContent = JSON.stringify(data.result, null, 2);

        } catch (error) {
            console.error('Error:', error);
            responseArea.textContent = `Error: ${error.message}`;
        }
    });
});