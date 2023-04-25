var TextEditor = function () {
  this.cursor = 0;
  this.typing = "";
};

/**
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function (text) {
  if (this.typing[this.cursor] !== undefined) {
    const right = this.typing.slice(this.cursor + 1, this.typing.length);
    const left = this.typing.slice(0, this.cursor);

    this.typing = left + text + right;
  } else {
    this.typing += text;
  }
  this.cursor += text.length - 1;
  console.log(this.cursor, text.length, this.typing);
};

/**
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function (k) {
  const left = this.typing.slice(0, this.cursor);
  if (this.typing[this.cursor] !== undefined) {
    const right = this.typing.slice(this.cursor, this.typing.length);

    this.typing = left.slice(0, Math.max((this.cursor - k, 0))) + right;
  } else {
    console.log(this.cursor, this.typing);
    this.typing = left.slice(0, Math.max(this.cursor - k, 0));
  }
  this.cursor = Math.max(this.cursor - k, 0);
  if (left.length >= k) return k;
  else return left.length;
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function (k) {
  while (k > 0 && this.cursor > 0) {
    this.cursor--;
    k--;
  }
  if (this.cursor < 10) return this.typing.slice(0, this.cursor);
  else return this.typying.slice(this.cursor - 10, this.cursor);
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function (k) {
  while (k > 0 && this.cursor < this.typing.length) {
    this.cursor++;
    k--;
  }
  if (this.cursor < 10) return this.typing.slice(0, this.cursor);
  else return this.typing.slice(this.cursor - 10, this.cursor);
};

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
