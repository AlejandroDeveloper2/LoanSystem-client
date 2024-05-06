import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Outfit",
  fonts: [
    {
      src: "/fonts/Outfit-Bold.ttf",
      fontStyle: "normal",
      fontWeight: "bold",
    },
    {
      src: "/fonts/Outfit-Regular.ttf",
      fontStyle: "normal",
      fontWeight: "normal",
    },
  ],
});

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    gap: 16,
    backgroundColor: "#ffffff",
    padding: 20,
    overflow: "hidden",
  },
  section: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  column: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    color: "#000000",
    fontSize: 11,
    fontFamily: "Outfit",
    fontWeight: "bold",
    textAlign: "left",
    textTransform: "uppercase",
  },
  text: {
    color: "#000000",
    fontSize: 10,
    textAlign: "justify",
    lineHeight: 1.5,
    fontFamily: "Outfit",
    fontWeight: "normal",
  },
  line: {
    width: 150,
    height: 1,
    backgroundColor: "#000000",
  },
  lines: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
  },
  rowVertical: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 24,
  },
});
