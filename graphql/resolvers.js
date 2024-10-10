var resolvers = {
    Query: {
        getStudentName: function () {
            return "Sachin"
        },
        getPlayers: function () {
            return ['sahcin', 'dhoni', 'kohli']
        }
    },
    Mutation: {
        saveStudent: function () {
            return 0
        }
    }
}
module.exports = resolvers