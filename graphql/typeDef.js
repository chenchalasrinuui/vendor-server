
var { gql } = require('apollo-server-express')

var typeDefs = gql`
   scalar JSON
   type Student{
        name:String
        rno:Int
        marks:Int
   }
   input ProductInput{
       name:String
       cost:Int
       category:String
       description:String
   }
  input userInput{
    uid:String
    pwd:String
  }
  type Product{
       name:String
       cost:Int
       category:String
       description:String
   }
   type Query {
        getStudentName:String
        getPlayers:[String]
        getStudents:[Student]
        getProducts:[Product]
        handleLogin(data:userInput):JSON
   }

   type Mutation{
        saveStudent(name:String,rno:Int):Int
        saveProduct(productInput:ProductInput):JSON
   }

`

module.exports = typeDefs;