import Parser from '../src/Parser.js';

const parser = new Parser();

const program = `120`;

const ast = parser.parse(program);

console.log(JSON.stringify(ast, null, 2));