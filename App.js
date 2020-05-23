import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { SearchBar, VideoDetail, VideoList } from "./src/components";
import youtube from "./src/api/youtube";
import { ScrollView } from "react-native-gesture-handler";

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleFormSubmit = async (term) => {
    const response = await youtube.get("search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchBar onFormSubmit={this.handleFormSubmit} />
        </View>
        <View style={styles.videoContainer}>
          <View>
            <VideoDetail video={selectedVideo} />
          </View>
          <View style={styles.videoListContainer}>
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  searchContainer: {
    width: "100%",
    padding: 1,
  },
  videoContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  videoListContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
