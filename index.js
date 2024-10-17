import {} from "dotenv/config"
import cowsay from "cowsay"

console.log(cowsay.say({
    text : `Hello, i am ${process.env.NAME},from ${process.env.CAMPUS}`,
    e : "oO",
    T : "U "
}));