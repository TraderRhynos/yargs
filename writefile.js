const fs=require("fs")
const os = require("os")
console.log(process.argv)

const name = process.argv[2]


    const data = `${name} ${os.EOL}`

    fs.writeFile("users.txt",data, (err,data)=>{
        console.log('Write To File Successfull !!')
    })

