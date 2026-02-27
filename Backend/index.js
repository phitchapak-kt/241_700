 // ทำการ import โมดูล  http

 //const http = require('http');
//const host ='localhost';
//const port = 8000;

//กำหนดค่า server
//const requireListener = function(req,res){
//    res.writeHead(200);
 //   res.end('hello,World! This is my first server.');

//}

// run server
//const server = http.createServer(requireListener);
//server.listen(port,host, () => {
//    console.log(`Server is running on http://${host}:${port}`);
//});

//path
//app.get('/test',(req,res) =>{
   // res.send('Hello,World! test')
 //});

 


const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise')
const app = express();

app.use(bodyParser.json());

const port = 8000;

let conn = null;
const initMySQL = async () => {
    conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'webdb',
            port: 8700
   
        });
        console.log('Connected to MySQL database');

}


// path = GET / users สำหรับการดึงข้อมูล users ทั้งหมด
app.get('/users',async (req,res) =>{
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})



// path = POST / users สำหรับการดึงข้อมูล users ใหม่
app.post('/users',async (req,res) =>{
    try{
        let user =req.body;
        const results = await conn.query('INSERT INTO users SET?',user);
        res.json({
        Message: 'User added successfully',
        data: results[0]
        });
    }catch(error){
        console.error('Error inserting user:',error);
        res.status(500).json({message: 'Error adding user'});
    }
    
})


//paht = GET/usrer/:id สำหรับการดึงข้อมูล user ตาม id
app.get('/users/:id',async (req,res) => {
    try{
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?',id);
        if(results[0].length === 0){
            throw { statusCode: 404, message: 'User not found'};
        }
        res.json(results[0][0]);
    } catch(error){
        console.log('Error fetching user: ',error);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: error.message || 'Error fetching user'
        });
    }
})


//paht = PUT/usrer/:id สำหรับการดึงข้อมูล user ตาม id
app.put('/users/:id',async (req,res) => {
    try{
        let id = req.params.id;
        let updateUsers = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?',[updateUsers,id]);
        res.json({
            message: 'User updated successful',
            data : results[0]
        });
    }catch(error){
        console.error('Error updating user:',error);
        res.status(500).json({message: 'Error updeting user'});
    }
})


// path = DELETE/ users/:id สำหรับลบ users ตาม id
app.delete('/users/:id',async (req,res) => {
    try{
        let id = req.params.id;
        const results = await conn.query('DELETE FROM users WHERE id =?',id);
        res.json({
            message: 'User dleted successfully',
            data : results[0]
        });
    }catch(error){
        console.error('Error deleting user:',error);
        res.status(500).json({message: 'Error deleting user'});
    }

})











app.get('/testdb-new', async (req,res) =>{
    try {
        const results = await conn.query('SELECT * FROM users');
        res.json(results[0]);

    }catch (err){
      console.error('Error connecting to the database:',err);
      res.status(500).json({error: 'Internal Sever Error'});
    }
});




/**app.get('/testdb',(req,res) => {
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    }).then((conn) =>{
        conn
        .query('SELECT * FROM users')
        .then((results) => {
            res.json(results[0]);
        
        }).catch((err)=>{
            res.json({error: err.message});
        });


    })
})
*/



//let users = [];
//let counter = 1;

/*
GET /usesr - ดึงข้อมูลผู้ใช้งานทั้งหมด
POSt /users  -เพิ่มผู้ใช้ใหม่
GET / users /:id  - ดึงข้อมูลผู้ใช้ตาม ID
PUT /usres//:id  -แก้ไขข้อมูลผู้ใช้ตาม ID ที่บันทึก
DELETE /users/:id - ลบผู้ใช้ตาม ID ที่บันทึก
*/

// path: = GET /users
/**app.get('/users', (req, res) => {
    res.json(users);
});

// path: = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1;

    users.push(user);
    res.json({
        message: 'User added successfully',
        user: user
    });
});

// path: = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    // หา user จาก id ที่ส่งมา

    let selectedIndex = users.findIndex(user => user.id == id);
   
    // อัพเดทข้อมูล Users
    //users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    //users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;

    if(updateUser.firstname) {
         users[selectedIndex].firstname = updateUser.firstname;
    }
    if(updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname;
    }


    res.json({
        message: 'User updated successfully',
        data:{
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
    // ส่ง users ที่อัพเดทแล้วกลับไป
})

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;

    // หา index จาก id  ที่ต้องการลบ
     let selectedIndex = users.findIndex(user => user.id == id);
     

     //ลบ user ออกจาก users
     users.splice(selectedIndex,1);

     res.json({
        message: 'User deleted succesfully',
        indexDelete: selectedIndex
     });
})
*/


app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running on http://localhost:${port}`);
});






