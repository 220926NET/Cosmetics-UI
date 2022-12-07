# Cosmetics-UI
Front-End Repo for the Cosmetics E-Commerce application as our P3. Team: Denis, Emmanuel, Haizhen, Rushay, Sergio

## General Overview
COSMO is a mock ECommerce website. It's function is to act as a testing ground for our team, Team Cosmetics, to practice builing a Single Page Application (SPA) together.
COSMO consists of two repositories, both of which can be found on GitHub. They are the User Interface Repository (Cosmetics-UI) and the Application Programing Interface Repository (Cosmetics-API).

Data for COSMO is stored in a SQL database hosted on AZURE cloud services.

# Structure
As of this update, COSMO contains 8 views
  * Display of products, which also functions as the landing page
  * Product
  * Login
  * Register
  * Wishlist
  * Cart
  * Checkout
  * Purchase Confirmation
  
 # Technology
 The front end was built using Angular
 Visual Studio Code was the code editor of choice for our team
 
 The backend was built using ASP.Net
 Enities were generated for our API using EF Framework Core
 
 Git was used for Version control
 GitHub was used to share the repository across the cloud with a ll team members
 
 Github Actions was used to set up a CI/CD pipeline
 Docker was used to create a container for deploying Cosmetics-API
 Azure Cloud Wep App Services was used to deploy the application as a website
 
 # See COSMO in action
 While the backend services continue to be hosted on Azure and while the web application hosting is still being supported you can see the COSMO e-commerce website here().
 
 If COSMO is no longer being hosted but you would like to spin up this application, follow these steps in START-UP
 # Start-up
 1. First you will want to clone down both REPOs from GitHub, we recommend using GitBash as your Command Line Interface to run these commands
  * In a terminal , navigate to an area where you would like to store the Cosmetics App.
  * Create a directory to hold both of you repos
  * Navigate inside that directory and clone down each repo.
  `git clone git@github.com:220926NET/Cosmetics-API.git`
  `git clone git@github.com:220926NET/Cosmetics-API.git`
 2. Set up your database
    * I reccomend using Visual Studio to set up a database if you don't have software you already prefer
    * Open Visual Studio, and choose 'continue without code -->'
    * If your SQL Server Object Explorer isn't open go to the search bar at the top and type it in, then choose the option and your tool bar will display
    * A list of your SQL servers will display, by default you should have one with the words 'SQLEXPRESS' in it's name
    * Click on the drop down arrow next to that Server to reveal it's 'Databases' folder
    * Right-Click the Databases folder and select 'Add New Database'
    * Name the database 'cosmetics'
    * At the top left of your SQL Server Object Expolerer Toolbar there is a refresh button, hit that button then navigate back into your server, to your database folder, and find the cosmetics database
    * Right-Click 'Cosmetics' and choose 'new query'
    ** In the Cosmetics-API repository there is a file called 'Create.SQL' copy the code from that file and paste it into the window that was created called 'SQLQuery1.sql'
    * Just below the tab that says 'SQLQuery1.sql' you should see a button with a picture of a green arrrow on it. Push that button. You should the get an output box that appears saying the commands were run succesfully.
    *Open another Query on the Cosmetics database and in this window paste a copy of all of the commands in the file 'Seed.sql', found in the Cosmetics-API repo
    *Run this Query
3. Connect the database to the project
    * In your SQL Server Object Explorer, right-click your Cosmetics database and choose 'properties'
    * On the right-side of your screen a table appears, scroll down until you see a field called 'Connection string' you will need the value on the right in a minute
    * In your Cosmetics-API directory navigate by typing the following in your CLI.
    ```cd Cosmetics-API/
        cd ECommerce.API/
        start ECommerce.API.sln
    ```
    In here navigate to a folder called appsettings.Development.json, Replace the code in this file with the following
    {
    "Logging": {
      "LogLevel": {
        "Default": "Information",
        "Microsoft.AspNetCore": "Warning"
      }
    },
    "ConnectionStrings": {
      "CosmeticsDB": "your connection string goes here"
    }
  }
  
  ** Make sure to paste your connection string inside the quotes
    
4. Prepare to launch the project in development mode
    * In your Terminal open two windows
     ** In both Window navigate to the directory you created to hold the Cosmetics APP 
     ** In one window 
     `cd Cosmetics-API/`
     `cd ECommerce.API/`
     `start ECommerce.API.sln`
       (this last command should automatically open Visual Studio Code using the solution file(.sln))
       * To launch the backend simply hit the green play button near the top
      ** In the other window
      `cd Cosmetics-UI/`
      `cd ECommerce.UI/`
      `npm install`
      `ng serve`
          
    
