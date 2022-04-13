const { connect } = require('./client');
// const conn = connect();
const { setupInput } = require('./input');


console.log("Connecting...");
connect();
setupInput();