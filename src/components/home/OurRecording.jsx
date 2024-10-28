import { useState, useEffect } from "react";
import "./YouTube.css";
function OurRecording() {
  const [videos, setVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState(4);
  const [initialVideos, setInitialVideos] = useState(4);
  const [videosToLoad, setVideosToLoad] = useState(4);

  const apiKey = import.meta.env.VITE_API_KEY2;
  const playlistId = import.meta.env.VITE_API_KEY3;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
        );
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching playlist videos:", error);
      }
    };

    fetchVideos();

    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setInitialVideos(2);
        setVideosToLoad(2);
        setVisibleVideos(2);
      } else {
        setInitialVideos(4);
        setVideosToLoad(4);
        setVisibleVideos(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [apiKey, playlistId]);

  const loadMoreVideos = () => {
    setVisibleVideos((prev) => Math.min(prev + videosToLoad, videos.length));
  };

  const showLessVideos = () => {
    setVisibleVideos(initialVideos);
  };

  return (
    <div>
      {/* Video card grid */}
      <div className="video-grid m-5">
        {videos.slice(0, visibleVideos).map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              width="100%"
              height="180"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="video-title">{video.snippet.title}</h3>
          </div>
        ))}
      </div>

      {/* Control buttons */}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {visibleVideos < videos.length && (
          <button
            onClick={loadMoreVideos}
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white">View More</span>
          </button>
        )}
        {visibleVideos > initialVideos && (
          <button
            onClick={showLessVideos}
            href="#_"
            className="px-5 py-2.5 relative rounded-full group font-medium text-white inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative">Show Less</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default OurRecording;
