"use strict";

const result = [];

next:
for (let i = 2; i <= 20; i += 1) {
  for (let j = 2; j < Math.sqrt(i); j += 1) {
    if (i % j === 0) {
      continue next;
    }
    
  }
  console.log(i);
}
