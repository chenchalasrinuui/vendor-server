
var { gql } = require('apollo-server-express')

var typeDefs = gql`

   type Query {
        getStudentName:String
        getPlayers:[String]
   }

   type Mutation{
        saveStudent(name:String,rno:Int):Int
   }

`

module.exports = typeDefs;