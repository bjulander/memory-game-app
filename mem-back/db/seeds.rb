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

Score.create(clicks: 50, user_id: 1)
Score.create(clicks: 100, user_id: 2)
Score.create(clicks: 150, user_id: 3)

