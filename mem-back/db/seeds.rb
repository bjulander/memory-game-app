# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Blake")
User.create(name: "Ryli")
User.create(name: "Collins")

Score.create(time: 20, user_id: 1)
Score.create(time: 30, user_id: 2)
Score.create(time: 50, user_id: 3)

