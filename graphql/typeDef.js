
var { gql } = require('apollo-server-express')

var typeDefs = gql`
   scalar JSON
   scalar Upload
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
       filePath:String
   }
   type Query {
        getStudentName:String
        getPlayers:[String]
        getStudents:[Student]
        getProducts:[Product]
        handleLogin(data:userInput):JSON
   }

   type Mutation{
        changePassword(pwd:String,newPwd:String,id:String):JSON
        saveProduct(file:Upload,productInput:ProductInput):JSON
   }

`

module.exports = typeDefs;