// Create a collection named "student"
db.createCollection("student")

// Create an index on the "name" field of the "student" collection
db.student.createIndex({name: 1})

// Insert documents into the "student" collection
db.student.insertMany([
    { 
        id: 23,
        address: "tumkur",
        name: "hello",
        marks: 754
    },
    {
        id: 233,
        address: "bangalore",
        name: "reddy",
        marks: 457
    }
])

// Aggregate to calculate average marks
db.student.aggregate([
    {
        $group: {
            _id: null,
            averagemarks: { $avg: "$marks" }
        }
    }
])
