const path = require("path");
const markdownMagic = require("markdown-magic");
const fs = require("fs");

const config = {
  transforms: {
    RENDERDOCS(content, options) {
      const fileContents = require(options.path);
      console.log({
        content: fileContents.rules,
      });
    },
  },
};
const callback = function (updatedContent, outputConfig) {
  console.log("all set!");
};

const markdownPath = path.join(__dirname, "Readme.md");
markdownMagic(markdownPath, config, callback);
