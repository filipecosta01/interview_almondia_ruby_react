Honeypot - Almondia - Autocomplete Input with Selectable options - Coding Exercise - Filipe Costa
============

This is a Full Stack project (back end in Rails, front end in React, sqlite3 as default database) intended to create a webpage and display an Autocomplete input component. More information about how the autocomplete should work, please go to the `About` page after going through the steps to run the project locally.

As part of the project, it's required to load options information from the back end and implement features select option, insensitive case search and prefix search.

## Libraries
The important libraries used by this project are:
### Back end - Rails
1. faker
2. shoulda
3. database_cleaner
4. rspec-rails
5. rack-cors

Make sure you have them installed before moving forward.
We'll be using rbenv and bundler (a powerful package manager for ruby gems).

### Front end - React
1. react-bootstrap
2. react-select
3. react-select-fast-filter-options
4. react-virtualized-select

Other libraries used for start the project and as part of a starter kit (find more information on README.md file in front end folder)
1. webpack
2. babel
3. loaders in general (style, url, html)


Make sure you have them installed before moving forward.
We'll be using NPM (a powerful package manager for Javascript).

## Running the project (Back end)
It's required to have a ruby environment already up and running.
All the steps below must be done from the `almondia-api` folder

To run the backend, just follow the steps below:
1. Open a terminal and check rails is installed and running properly
   1. You can try `rails --version` in terminal and check the output
2. Go to the folder specified above
3. Run `bundle install` to install the gems required
4. Run `rake db:populate` to populate the database
5. Then run `rails s` to start running the backend. It should be available under `http://localhost:3000`
P.S.: You must be sure no other service is running in port 3000, otherwise the back end will fail to start.


It's even possible to run tests (sorry but I just have one implemented) just to check that endpoint is returning all the rows that one specific category has, doing:
1. Open a new terminal
2. Run `bundle exec rspec`

## Running the project (Front end)
It's required to have a NPM already up and running.
All the steps below must be done from the `almondia-frontend` folder

To run the frontend, just follow the steps below:
1. Open a new terminal and check NPM is installed and running properly
   1. You can try `npm --version` in terminal and check the output
2. Go to the folder specified above.
3. Run the command `npm install` to install the required libraries
4. Run the command `npm run start` to:
   1. Generate the build.js file, make it available for the index.html
   2. Start a local dev environment that should run in `http://localhost:3001`
P.S.: You must be sure no other service is running in port 3001, otherwise the front end will fail to start.

And the project should be available locally.

## Design Inspiration
For the main design inspiration, please check [ReactJS + Bootstrap starter with hot reload](https://github.com/MacKentoch/react-bootstrap-webpack-starter)

## [Contacting the Author](mailto:s.costa.filipe@gmail.com)
Click above and feel free to get in touch in case of trouble or suggestions.
