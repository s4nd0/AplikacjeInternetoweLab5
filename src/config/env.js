require("dotenv").config({ quiet: true })
const required = ["MYSQL_URI"]
for (const name of required) {
 if (!process.env[name]) {
 throw new Error(`Brak zmiennej ${name} w pliku .env`)
 }
}
module.exports = {
 port: Number(process.env.PORT) || 3000,
 mongoUri: process.env.MONGODB_URI,
 mysqlUri: process.env.MYSQL_URI
}
