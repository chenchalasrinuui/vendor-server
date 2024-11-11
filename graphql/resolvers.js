var getDB = require('../common/dbCon')
var ObjectId = require('mongodb').ObjectId
var fs = require('fs');
var { GraphQLUpload } = require('graphql-upload')

var resolvers = {
    Upload: GraphQLUpload,
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
        changePassword: async function (a, payload, c, d) {
            console.log(11, payload)
            const db = await getDB();
            const collection = db.collection("vendors")
            const res = await collection.find({ _id: ObjectId.createFromHexString(payload?.id), pwd: payload?.pwd }).toArray()
            if (!res?.length) {
                return {
                    message: 'Currnet password is wrong',
                    errorCode: 2
                }
            }
            const result = await collection.updateOne({ _id: ObjectId.createFromHexString(payload?.id) }, { $set: { pwd: payload.newPwd } })
            return result;
        },
        saveProduct: async function (a, payload, c, d) {

            try {
                const { file, productInput } = payload
                const { createReadStream, filename } = await file;
                // Specify the path where you want to save the uploaded file
                const uploadFileName = Date.now() + '_' + filename
                const stream = createReadStream();
                const out = fs.createWriteStream(`./uploads/${uploadFileName}`);
                stream.pipe(out);
                var db = await getDB()
                var collection = db.collection("products")
                const inputData = {
                    ...productInput,
                    filePath: `uploads/${uploadFileName}`
                }
                var result = await collection.insertOne(inputData)
                return result;
            } catch (ex) {
                return { message: ex.message }
            }
        },
        deleteProduct: async function (a, payload, c, d) {
            try {
                const { id, path } = payload?.data
                const _id = ObjectId.createFromHexString(id)
                const db = await getDB();
                const collection = db.collection("products")
                const res = await collection.deleteOne({ _id })
                fs.unlink(path, () => {
                    console.log(`${path} deleted`)
                })
                return res;
            } catch (ex) {
                console.log(ex);
                return {
                    message: ex?.message
                }
            } finally {

            }

        }
    }
}
module.exports = resolvers

