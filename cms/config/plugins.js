module.exports = () => ({
  "tiptap-editor": {
    config: {
      theme: {
        colors: [
          { label: "Black", color: "#000000" },
          { label: "Dark gray", color: "#4B4B4B" },
          { label: "Brand brown", color: "#A0704F" },
          { label: "Red", color: "#E53E3E" },
          { label: "Blue", color: "#3182CE" },
          { label: "Green", color: "#38A169" },
          { label: "White", color: "#FFFFFF" },
          { label: "Orange", color: "#DD6B20" },
          { label: "Purple", color: "#805AD5" },
          { label: "Gold", color: "#B8860B" },
        ],
      },
      presets: {
        richTextSection: {
          bold: true,
          italic: true,
          underline: true,
          strike: true,
          heading: true,
          bulletList: true,
          orderedList: true,
          blockquote: true,
          link: true,
          textAlign: true,
          textColor: true,
          highlightColor: true,
        },
      },
    },
  },
});
