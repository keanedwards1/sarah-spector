/* document.querySelectorAll("img").forEach((img, index, imgs) => {
    img.addEventListener('click', function() {
        document.getElementById('viewerImage').src = this.src; // Set clicked image as active
        document.getElementById('imageViewer').style.display = 'flex'; // Show viewer
        // Update #imageInfo content based on the clicked image
    });
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('imageViewer').style.display = 'none'; // Hide viewer
});

// Add listeners for #prev and #next to navigate through imgs array

 */

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll("img"); // Select all images
    const viewer = document.getElementById('imageViewer');
    const viewerImage = document.getElementById('viewerImage');
    const imageInfo = document.getElementById('imageInfo');
    const close = document.getElementById('close');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    
    let currentIndex = 0; // Keep track of the current image

    // Function to update viewer content
    function updateViewer(index) {
        const img = images[index];
        viewerImage.src = img.src;
/*         imageInfo.textContent = `${img.getAttribute('data-title')} - ${img.getAttribute('data-description')}`;
 */        currentIndex = index;
    }

    // Open viewer on image click
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            updateViewer(index);
            viewer.style.display = 'flex';
        });
    });

    // Close viewer
    close.addEventListener('click', () => {
        viewer.style.display = 'none';
    });

    // Navigate to the previous image
    prev.addEventListener('click', () => {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = images.length - 1; // Loop to the end if at the beginning
        updateViewer(newIndex);
    });

    // Navigate to the next image
    next.addEventListener('click', () => {
        let newIndex = currentIndex + 1;
        if (newIndex >= images.length) newIndex = 0; // Loop to the start if at the end
        updateViewer(newIndex);
    });

    viewer.addEventListener('click', function(event) {
        // Prevent clicks on the close, prev, and next buttons from triggering this
        if (event.target === this || event.target === viewerImage) {
            const clickX = event.clientX; // Get the X coordinate of the click
            const halfWidth = window.innerWidth / 2; // Calculate the middle of the screen

            if (clickX < halfWidth) {
                // Click on the left half
                document.getElementById('prev').click();
            } else {
                // Click on the right half
                document.getElementById('next').click();
            }
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (viewer.style.display === 'flex') { // Check if viewer is open
            if (e.key === 'ArrowLeft') {
                prev.click();
            } else if (e.key === 'ArrowRight') {
                next.click();
            } else if (e.key === 'Escape') {
                close.click();
            }
        }
    });
});
