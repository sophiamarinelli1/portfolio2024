// components/VideoPlayer.tsx
"use client";

import React from "react";
import MuxPlayer from "@mux/mux-player-react";

interface VideoPlayerProps {
	playbackId?: string;
	title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ playbackId, title }) => {
	if (!playbackId) return null;

	return (
		<MuxPlayer
			playbackId={playbackId}
			metadata={title ? { video_title: title } : undefined}
		/>
	);
};

export default VideoPlayer;
