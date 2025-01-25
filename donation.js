document.addEventListener('DOMContentLoaded', () => {
    const donationButton = document.getElementById('donationButton');
    const donationModal = document.getElementById('donationModal');
    const closeModal = document.getElementById('closeModal');

    // Show the modal when the donation button is clicked
    donationButton.addEventListener('click', () => {
        donationModal.classList.remove('hidden');
    });

    // Hide the modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        donationModal.classList.add('hidden');
    });

    // Hide the modal when clicking outside the modal content
    donationModal.addEventListener('click', (e) => {
        if (e.target === donationModal) {
            donationModal.classList.add('hidden');
        }
    });
});
