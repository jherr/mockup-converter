#!/usr/bin/env node

const translator = require('../index');
const fs = require('fs');
const getStdin = require('get-stdin');

if (process.argv.length > 2) {
  console.log(translator(fs.readFileSync(process.argv[2]).toString()).module);
} else {
  getStdin().then(str => {
    console.log(translator(str).module);
  });
}
