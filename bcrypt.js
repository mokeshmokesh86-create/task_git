const bcrypt = require('bcrypt');

async function pass() {
    const password = "Mok@123";
    
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);

}

pass();