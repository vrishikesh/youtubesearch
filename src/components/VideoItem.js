import React from "react";

import { Surface, Caption } from "react-native-paper";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <TouchableHighlight
      style={styles.touchable}
      onPress={() => onVideoSelect(video)}
    >
      <View style={styles.container}>
        <Surface style={styles.surface}>
          <Image
            source={{ uri: video.snippet.thumbnails.medium.url }}
            style={styles.image}
          />
          <Caption>{video.snippet.title}</Caption>
        </Surface>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    marginTop: 10,
    padding: 1,
  },
  surface: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    marginRight: 8,
    width: 128,
    height: 64,
    resizeMode: "contain",
  },
});
