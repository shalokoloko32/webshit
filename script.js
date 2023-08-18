const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const videoPlayer = document.getElementById("video-player");
const modeToggle = document.getElementById("dark-mode");

modeToggle.addEventListener("change", () => {
  toggleDarkMode();
});

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== "") {
    searchVideos(searchTerm);
  }
});

function searchVideos(query) {
  // Replace 'YOUR_API_KEY' with your actual YouTube API key
  const apiKey = 'AIzaSyBiKXMadQYe0SNzn8j8UNeQcotsF8OnyPY';
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}&maxResults=1`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const videoId = data.items[0].id.videoId;
      playVideo(videoId);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

function playVideo(videoId) {
  videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
}
