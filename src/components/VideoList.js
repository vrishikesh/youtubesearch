import React from "react";
import { Text } from "react-native-paper";

import VideoItem from "./VideoItem";
import { View } from "react-native";

export default function VideoList({ videos, onVideoSelect }) {
  if (!videos.length) {
    return null;
  }

  return videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));
}
