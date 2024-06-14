import { StyleSheet, Image, ImageSourcePropType } from "react-native";

type ImageViewerProp = {
  selectedImageSource: ImageSourcePropType;
};

export default function ImageViewer({ selectedImageSource }: ImageViewerProp) {
  return <Image source={selectedImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
