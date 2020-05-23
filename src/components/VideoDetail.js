import React, { Fragment } from "react";
import { Platform, View } from "react-native";
import { WebView } from "react-native-webview";
import { Surface, Title, Text, Subheading } from "react-native-paper";

export default function VideoDetail({ video }) {
  if (!video) {
    return <Text>Loading...</Text>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  let renderVideo = null;

  switch (Platform.OS) {
    default:
      renderVideo = (
        <Surface style={{ height: 315, padding: 8 }}>
          <WebView
            source={{ uri: videoSrc }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            scalesPageToFit={true}
            bounces={false}
            javaScriptEnabled
            automaticallyAdjustContentInsets={false}
            originWhitelist={["*"]}
          />
        </Surface>
      );
      break;
    case "web":
      renderVideo = (
        <Surface
          style={{
            padding: 8,
            flex: 1,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              maxHeight: 390,
              maxWidth: 640,
              width: "100%",
              margin: "auto",
            }}
          >
            <View
              style={{
                position: "relative",
                paddingTop: "56.25%",
              }}
            >
              <iframe
                src={videoSrc}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                frameBorder={"0"}
                allowFullScreen
              />
            </View>
          </View>
        </Surface>
      );
      break;
  }

  return (
    <Fragment>
      {renderVideo}
      <Surface style={{ padding: 15 }}>
        <Title>
          {video.snippet.title} - {video.snippet.channelTitle}
        </Title>
        <Subheading>{video.snippet.description}</Subheading>
      </Surface>
    </Fragment>
  );
}
