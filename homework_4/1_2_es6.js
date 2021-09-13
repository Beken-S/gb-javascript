"use strict";

class Post2 {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  edit(text) {
    this.text = text;
  }
}

class AttachedPost2 extends Post2 {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }
  makeTextHighlighted() {
    this.highlighted = true;
  }
}

let post2 = new AttachedPost2("Beken2", "Lorem lorem", "22.09.2021");
console.log(post2);
post2.edit("1111111");
console.log(post2);
post2.makeTextHighlighted();
console.log(post2);
