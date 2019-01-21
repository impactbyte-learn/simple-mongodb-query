// -------------------------------------------------------------------
// SHOW ALL DATABASE
// show dbs

// -------------------------------------------------------------------
// CREATE AND USE DATABASE
// use company

// -------------------------------------------------------------------
// CREATE COLLECTION
// db.createCollection('customers')

// -------------------------------------------------------------------
// INSERT DATA
// db.customers.insert({
//     first_name: "John",
//     last_name: "Doe"
// })

// db.customers.find()

// db.customers.insert([{
//         first_name: "Kathy",
//         last_name: "Morris",
//         age: 30
//     },
//     {
//         first_name: "Lilian",
//         last_name: "Davidson",
//         age: 25
//     },
//     {
//         first_name: "Derek",
//         last_name: "Williams",
//     },
//     {
//         first_name: "Alan",
//         last_name: "Carr",
//         age: 55,
//         address: {
//             street: "7 Whittier st",
//             city: "Brooklyn",
//             state: "New York"
//         }
//     },
//     {
//         first_name: "Terry",
//         last_name: "Flores",
//         age: 22,
//         address: {
//             street: "55 Main st",
//             city: "Boston",
//             state: "Massachusetts"
//         }
//     }
// ])

// db.customers.find()


// -------------------------------------------------------------------
// READ DATA
// db.customers.find()

// db.customers.find({
//     first_name: "Lilian"
// })

// -------------------------------------------------------------------
// UPDATE DATA
// db.customers.update({
//     first_name: "John"
// }, {
//     first_name: "Jhonny",
//     last_name: "Doe"
// })

// db.customers.find()

// db.customers.update({
//     first_name: "Lilian"
// }, {
//     $set: {
//         age: 90
//     }
// })

// db.customers.find()

// -------------------------------------------------------------------
// DELETE DATA
// db.customers.remove({first_name: "Derek"})

// -------------------------------------------------------------------
// QUERYING
// db.customers.find({first_name: "Lilian"})
// db.customers.find({$or:[{first_name: "Lilian"},{last_name: "Carr"}]})
// db.customers.find({age:{$lt:40}})
// db.customers.find({age:{$gt:40}})

