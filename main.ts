const { mkdirSync, writeFileSync } = require('node:fs');
const assert = require('node:assert/strict');

const line = "My $4,000 smart fridge thawed my steaks during an update, then closed the ticket: 'No beef remaining.'";

assert([...line].length >= 1 && [...line].length <= 200);
assert(line.trim().length > 0 && !/[\r\n]/u.test(line));
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', line, 'utf8');
