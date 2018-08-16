import {Student, Teacher} from './teacherQUsers'
const crypto = require('crypto');

// let a = crypto.createHash('md5').update("both of this is s@$*(&)%%-fs").digest('hex');
// console.log("A", a);

const serverSocket = (io) => {
  io.storage={};
  io.storage.teachers=[];
  io.storage.students=[];

  io.on('connection', (socket) => {
    const socketId = socket.id;
    const clientIp = socket.request.connection.remoteAddress;
    console.log('a user connected. IP is: '+String(clientIp) )
    let currentQueue = '';

    socket.emit('stc_message', 'hello world!');
    socket.on('cts_message', (data) => { console.log(data); });

    socket.on('disconnect', function () {
      if (socket.teacher) {
        io.teachers = io.teachers.filter(x => x!==socket.teacher);
      }
      if (socket.student) {
        io.students = io.students.filter(x => x!==socket.students);
        if ("ZZZstudentInQueue") {
          "ZZZremoveStudentFromQueue"
          "RebroadcastThatRoom"
        }
      }
    })

    socket.on('teacherLogin', (teacherInputs) => {
      function checkTeacherInputs() {};

      if (checkTeacherInputs()) {
        socket.teacher=new Teacher(teacherInputs)
        io.teachers.push(socket.teacher)
      }
    })


    socket.on('addQueue', (queueItem, fn) => {
      console.log("ADDQUEUE SOCKET", queueItem)

      fn(`${myDate}, ${currentQueue}`)
    });

    socket.on('removeQueue', (queueItem, fn) => {
      console.log("REMOVEQUEUE SOCKET", queueItem)

      fn(`${myDate}, ${currentQueue}`)
    });


    // PSEUDOCODE - rooms for each open Document
    //
  });
};

export default serverSocket;
