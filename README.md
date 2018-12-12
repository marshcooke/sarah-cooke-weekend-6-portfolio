# Weekend 6 Homework
## Start a Portfolio

### Objectives
- Angular practice with multiple views, controllers, and a service
- Front end styling
- GitHub API connection
- Hosting without a database on Heroku

### Setup

- Fork this repo and clone it to your computer [X]
- `npm install` [X]
- Create a new `personal access token` on GitHub. This is under the user setting.
	- [Generate a GitHub Token](https://github.com/settings/tokens). Select only `public_repo` and `read:user`. [X]
- Create a `.env` file and add a `USER_NAME` and `GIT_TOKEN` to it. The `.env` is already added to the `.gitignore` so that you will not push it to github. [X]
- `npm start` [X]

### Instructions

Create a landing page for yourself as a developer. This is a front end project, it has a simple server set up to serve back your static files. The focus will be on Angular and front end styling.

#### Front End
- Have at least two views. One page about you and one page about your code. [X] [X]
  - One view about you that uses some info from the Github Profile API call. [X]
  - One view about your code that uses info from the Github Repo API call. [X]
- Use the `GithubService` angular service to interact with the simple server that is provided. [X] 
- Style your site. [X]

#### Back End
- You have already been given a simple server that calls out to the GitHub API. You shouldn't need to change the code but are welcome to make changes. [X]
	- For reference, here is the [API Docs](https://developer.github.com/v3/) for GitHub.
- As practice, comment each line of code in the server. Make sure you know what each line does. [X] 

**Existing Routes**

The following routes have been provided and should work after setting up your `.env` file.

- `http://localhost:5000/github/repos` - returns your repositories
- `http://localhost:5000/github/user` - returns your GitHub user information

## Hard Mode

### Deploy
- Deploy the app on Heroku. It doesn't have a database so you can follow the same steps as we did in lecture. [X]
- Use environment variables on Heroku for your GitHub username and API key, **the .env file should not be checked in (leave it in the .gitignore)**. To set these up click into the app on Heroku, Settings, Reveal Config Vars, and add the same key value pairs you have in your local `.env` file. [X]

[See my deployed site on Heroku here](https://sarah-cooke-porfolio.herokuapp.com/#/)

[See my deployed site on AWS here](http://www.sarahcooke.me/#/)

### Screen Shots
- About Me
![About Me](/public/images/screenshot1.png "About Me")
- Porfolio
![Portfolio](/public/images/screenshot2.png "Portfolio")
