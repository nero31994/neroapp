document.addEventListener('DOMContentLoaded', () => {
    let channelItems = document.querySelectorAll('.channel-item');
    let currentIndex = 0;

    function highlightChannel(index) {
        // Remove focus from all items
        channelItems.forEach(item => item.classList.remove('ring-2', 'ring-cyan-400'));

        // Add focus style to the selected channel
        channelItems[index].classList.add('ring-2', 'ring-cyan-400');
        channelItems[index].focus();
    }

    function moveFocus(direction) {
        if (direction === 'up' && currentIndex >= 3) {
            currentIndex -= 3; // Move up one row
        } else if (direction === 'down' && currentIndex + 3 < channelItems.length) {
            currentIndex += 3; // Move down one row
        } else if (direction === 'left' && currentIndex > 0) {
            currentIndex--; // Move left
        } else if (direction === 'right' && currentIndex < channelItems.length - 1) {
            currentIndex++; // Move right
        }
        highlightChannel(currentIndex);
    }

    function selectChannel() {
        channelItems[currentIndex].click();
    }

    // Initialize focus on first channel
    if (channelItems.length > 0) {
        highlightChannel(currentIndex);
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                moveFocus('up');
                event.preventDefault();
                break;
            case 'ArrowDown':
                moveFocus('down');
                event.preventDefault();
                break;
            case 'ArrowLeft':
                moveFocus('left');
                event.preventDefault();
                break;
            case 'ArrowRight':
                moveFocus('right');
                event.preventDefault();
                break;
            case 'Enter':
                selectChannel();
                event.preventDefault();
                break;
        }
    });
});
