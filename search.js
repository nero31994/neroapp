// Search functionality for the channel list
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const channelList = document.querySelector('.scrollable-grid');

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
