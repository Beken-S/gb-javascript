"use strict";

function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function (text) {
  this.text = text;
};

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

let post1 = new AttachedPost("Beken", "Lorem lorem", "12.09.2021");
console.log(post1);
post1.edit("1234566");
console.log(post1);
post1.makeTextHighlighted();
console.log(post1);
