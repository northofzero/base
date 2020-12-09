import ReactPlayer from "react-player";

export default function VideoPlayer() {
	return (
		<ReactPlayer
			width={"100%"}
			height={"100vh"}
			url={"https://storage.googleapis.com/north-of-zero-assets/background.mp4"}
			playing={false}
			controls={false}
			loop={true}
			playsinline={true}
			muted={true}
			onReady={() => {
				var video = document.getElementById("video-player");
				video.muted = true;
			}}
			config={{
				file: {
					attributes: {
						muted: true,
						autoPlay: true,
						id: "video-player",
						// poster: "thumbnail.png",
					},
				},
			}}
		/>
	);
}
