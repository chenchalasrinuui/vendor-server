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
        }
    },
    Mutation: {
        saveStudent: function (a, payload, c, d) {
            console.log(1, a)
            console.log(2, b)
            console.log(3, c)
            console.log(4, d)

            return 0
        }
    }
}
module.exports = resolvers

