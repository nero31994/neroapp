document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const channelList = document.querySelector('.scrollable-grid');

    // Adjust the height of the search bar to 30% of its current height
    searchBar.style.height = `${searchBar.offsetHeight * 0.3}px`;

    // Filter channels dynamically based on input
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        const channels = channelList.querySelectorAll('.channel-item');

        channels.forEach(channel => {
            const channelName = channel.textContent.toLowerCase();
            if (channelName.includes(query)) {
                channel.style.display = ''; // Show matching channels
            } else {
                channel.style.display = 'none'; // Hide non-matching channels
            }
        });
    });
});
