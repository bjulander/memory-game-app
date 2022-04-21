# The Jedi Initiate!

by Blake Julander

* * * * * * * * * *

## How To Set Up the App

0. The backend of this app works best with Ruby 2.6.1 & Rails 6.1.3.1.

1. Visit my [Github repository](https://github.com/bjulander/memory-game-app.git) and clone the code to your local directory:

 `git clone https://github.com/bjulander/memory-game-app.git`.

2. Enter into the *mem-back* folder: `cd mem-back`.

3. Execute `bundle install` and run `rails s -p 3001` in terminal. (If you want to reset database, type `rails db:drop db:migrate db:seed`.)

4. In a new terminal, move to the directory, *mem-front* folder: `cd mem-front`.

5. Then, execute the `npm install`. When installing is finished, run `npm start` (*Note that you are automatically using port 3000 for frontend, whereas backend used 3001 above*).
