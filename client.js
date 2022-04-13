const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.2.25', // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log("server says: ", data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to the server");
    // setTimeout(()=> {conn.write("Name: YAYA")})
    conn.write("Name: YAY");
    setTimeout(() => {
      conn.write("Move: up");
      setTimeout(() => {
        conn.write("Move: up");
        setTimeout(() => {
          conn.write("Move: up");
        }, 50);
      }, 50);
    }, 50);
  });

  // conn.on('connect' () => {
  //   setTimeout(() => { 
  //     conn.write("Move: up");
  //     setTimeout(() => { conn.write("Move: up");, 150; });

  //   , 50; });
  //   setTimeout(() => { conn.write("Move: up"), 250; });
  //   setTimeout(() => { conn.write("Move: up"), 350; });
  // });
  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = { connect };
