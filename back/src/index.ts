import { createConnection, getManager } from "typeorm"

async function run() {
  const connection = await createConnection({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 54320,
    username: "postgres",
    password: "postgres",
    logging: "all",
    database: "app.v0",
    entities: ["./dist/**/*.entity.js", "./src/**/*.entity.ts"],
    synchronize: true
  })
}

run()
