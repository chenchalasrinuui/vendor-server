
var { gql } = require('apollo-server-express')

var typeDefs = gql`

   type Student{
        name:String
        rno:Int
        marks:Int
   }
   type Query {
        getStudentName:String
        getPlayers:[String]
        getStudents:[Student]
   }

   type Mutation{
        saveStudent(name:String,rno:Int):Int
   }

`

module.exports = typeDefs;