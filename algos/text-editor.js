var TextEditor = function () {
  this.forward = [];
  this.backward = [];
};

/**
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function (text) {
  for (let letter of text) {
    this.forward.push(letter);
  }
};

/**
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function (k) {
  let deleted = 0;
  while (this.forward.length && deleted < k) {
    this.forward.pop();
    deleted++;
  }
  return deleted;
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function (k) {
  let moved = 0;
  while (this.forward.length && moved < k) {
    this.backward.push(this.forward.pop());
    moved++;
  }
  return toTheLeft(this.forward);
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function (k) {
  let moved = 0;
  while (moved < k && this.backward.length) {
    this.forward.push(this.backward.pop());
    moved++;
  }
  return toTheLeft(this.forward);
};

function toTheLeft(arr) {
  let letters = [];
  for (let i = Math.max(0, arr.length - 10); i < arr.length; i++) {
    letters.push(arr[i]);
  }
  let res = letters.join("");
  return res;
}

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */

const editor = new TextEditor();

// console.log("asdf".slice(0,0))
console.log(editor.addText("bxyackuncqzcqo"));
// console.log(editor.deleteText(4));
// console.log(editor.addText("practice"));
// console.log(editor.cursorRight(3))
console.log(editor.cursorLeft(12)); //osdhyvqxfyackuncqzcqo
console.log(editor.deleteText(3));
console.log(editor.cursorLeft(5));
console.log(editor.addText("osdhyvqxf"));

console.log(editor.cursorRight(10));
