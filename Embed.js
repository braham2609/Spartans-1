// embed.js

document.getElementById('videoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the YouTube video URL from the input field
    const videoUrl = document.getElementById('videoUrl').value;

    // Extract video ID from the URL
    const videoId = getVideoId(videoUrl);

    // Embed the video using the video ID
    embedVideo(videoId);
});

function getVideoId(url) {
    // Regular expression to extract video ID from URL
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);

    if (match && match[1]) {
        return match[1];
    } else {
        return null;
    }
}

function embedVideo(videoId) {
    const videoPlayerDiv = document.getElementById('videoPlayer');
    
    if (videoId) {
        // Create an iframe element for embedding the video
        const iframe = document.createElement('iframe');
        iframe.width = '560';
        iframe.height = '315';
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;

        // Clear any existing content in the video player div
        videoPlayerDiv.innerHTML = '';

        // Append the iframe to the video player div
        videoPlayerDiv.appendChild(iframe);
    } else {
        videoPlayerDiv.innerHTML = '<p>Invalid YouTube video URL. Please enter a valid URL.</p>';
    }
}
