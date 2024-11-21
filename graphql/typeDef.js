
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
       vendor:String
   }
  input UpdateProductInput{
       id:String
       name:String
       cost:Int
       category:String
       description:String
       filePath:String
   }
  input userInput{
    uid:String
    pwd:String
  }
  type Product{
       _id:String
       name:String
       cost:Int
       category:String
       description:String
       file:String
       vendor:String
   }
   input deleteInput{
     id:String
     path:String
   }
   type Query {
        getStudentName:String
        getPlayers:[String]
        getStudents:[Student]
        getProducts(vendorId:String):[Product]
        handleLogin(data:userInput):JSON
   }

   type Mutation{
        changePassword(pwd:String,newPwd:String,id:String):JSON
        saveProduct(file:Upload,productInput:ProductInput):JSON
        deleteProduct(data:deleteInput):JSON
        updateProduct(file:Upload,productInput:UpdateProductInput):JSON
   }

`

module.exports = typeDefs;