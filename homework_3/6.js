"use strict";

for (let line = "", i = 0; i < 20; console.log(line), line = "", i++) {
  for (let j = 0; j <= i; line += "*", j++) {}
}
