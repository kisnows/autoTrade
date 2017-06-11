/**
 * Created by kisnows on 2017/6/11.
 */
const mongoose =require('mongoose')
const mongoDB = 'localhost://moqiao:snow.081195@:27017'
mongoose.connect(mongoDB)
const db = mongoose.connection
db.on('error',console.error.bind(console,'MongoDB connect error'))