document.addEventListener('DOMContentLoaded', function() {
    const qtyInput = document.querySelector('.qty-input');
    const plusBtn = document.querySelector('.qty-btn:nth-child(3)');
    const minusBtn = document.querySelector('.qty-btn:nth-child(1)');

    // Ensure the input starts at 1 and cannot be manually edited
    qtyInput.value = 1;
    qtyInput.readOnly = true;

    // Function to handle the plus button click
    plusBtn.addEventListener('click', function() {
        qtyInput.value = parseInt(qtyInput.value) + 1;
    });

    // Function to handle the minus button click
    minusBtn.addEventListener('click', function() {
        if (parseInt(qtyInput.value) > 1) {
            qtyInput.value = parseInt(qtyInput.value) - 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('2222-09-21T17:00:00Z'); // Set your target date here
    const overlay = document.querySelector('.overlay');
    const countdownElement = document.querySelector('.countdown');
    const mintButton = document.querySelector('.mint-action');

    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            overlay.style.display = 'none';
            mintButton.disabled = false;
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdownElement.textContent = `FULLY MINTED!`;
        }
    }

    // Start the countdown
    const countdownInterval = setInterval(updateCountdown, 1000); // Update every second
    updateCountdown(); // Initial call to set the countdown immediately

    // Function to manually set today's date and remove the overlay
    window.setTodaysDate = function() {
        targetDate.setTime(new Date().getTime());
        updateCountdown();
    };
});
