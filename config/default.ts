const dbUser = process.env.DB_USER
const  dbPassword = process.env.DB_PASS

export default {
  port:3000,
  dbUri:
  `mongodb://${dbUser}:${dbPassword}@ac-juazkz8-shard-00-00.19jsj4q.mongodb.net:27017,ac-juazkz8-shard-00-01.19jsj4q.mongodb.net:27017,ac-juazkz8-shard-00-02.19jsj4q.mongodb.net:27017/?ssl=true&replicaSet=atlas-xtaoy1-shard-0&authSource=admin&retryWrites=true&w=majority`,
  env:"development"
}