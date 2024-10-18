var getDB = require('../common/dbCon')
var resolvers = {
    Query: {
        getStudentName: function () {
            return "Sachin"
        },
        getPlayers: function () {
            return ['sahcin', 'dhoni', 'kohli']
        },
        getStudents: function () {
            const data = [
                {
                    name: "s1",
                    rno: 1,
                    marks: 300
                },
                {
                    name: "s2",
                    rno: 2,
                    marks: 400
                }, {
                    name: "s3",
                    rno: 3,
                    marks: 330
                }
            ]
            return data;
        },
        getProducts: async function () {
            try {
                var db = await getDB()
                var collection = db.collection("products")
                var result = await collection.find({}).toArray()
                return result
            } catch (ex) {
                console.error("Error", ex)
                return []
            }
        },
        handleLogin: async function (a, payload, c, d) {
            console.log('payload', payload)
            try {
                var db = await getDB()
                var collection = db.collection("vendors")
                var result = await collection.find(payload?.data).toArray()
                return result
            } catch (ex) {
                console.error("Error", ex)
                return []
            }
        }
    },
    Mutation: {
        saveStudent: function (a, payload, c, d) {
            console.log(1, a)
            console.log(2, b)
            console.log(3, c)
            console.log(4, d)
            return 0
        },
        saveProduct: async function (a, payload, c, d) {
            try {
                var db = await getDB()
                var collection = db.collection("products")
                var result = await collection.insertOne(payload?.productInput)
                return result;
            } catch (ex) {
                return ex.message
            }
        }
    }
}
module.exports = resolvers

