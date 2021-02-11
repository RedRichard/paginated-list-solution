const mongoose = require("mongoose");
const Text = require("./models/text");

function generateData(num) {
  const textData = [];
  for (i = 1; i <= num; i++) {
    textData.push({
      title: `Text ${i}`,
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus.",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sagittis urna. Etiam id nisl a metus egestas ultricies. Quisque ullamcorper justo nisi, a aliquet mi tincidunt nec. Sed cursus vitae eros non fringilla. Suspendisse et elementum nulla. Suspendisse tortor elit, tincidunt in tortor at, pretium consequat arcu. Fusce cursus, ligula eu porttitor aliquam, enim ex dapibus massa, eget condimentum libero orci quis nulla. Sed mollis magna vitae velit blandit, eu molestie sapien faucibus. Nam in sem nisi. Mauris id dolor dui. In hac habitasse platea dictumst. Nam vehicula dui nec ornare placerat. Nunc volutpat augue ut justo euismod tincidunt. Quisque ut arcu nisl.",
    });
  }
  return textData;
}

function seedDBTextos() {
  const textData = generateData(100);
  Text.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    }
    textData.forEach((seed) => {
      Text.create(seed, (err, text) => {
        if (err) {
          console.log(err);
        }
      });
    });
    console.log(`${textData.length} texts created`);
  });
}

module.exports = seedDBTextos;
