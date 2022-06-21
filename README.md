# **User Management App** - ASPNET Core 5 / Angular 11 project


An **Angular 11 / ASP.NET Core 5** (cross-platform ) **project** with an end-to-end login, user and role management implementation.
As well as some other common functionalities.


## This application consists of:

*   Template pages using Angular 11 and TypeScript
*   RESTful API Backend using ASP.NET Core 5 MVC Web API
*   Database using Entity Framework Core
*   Authentication based on OpenID Connect
*   API Documentation using Swagger
*   Angular CLI for managing client-side libraries
*   Theming using Bootstrap 4

## You get the benefits of:

*   A complete backend and frontend project structure with login, user and permission-based role management already integrated
*   Data Access Layer built with the Repository and Unit of Work Pattern
*   Code First Database
*   A RESTful API Design
*   Angular Directives Quidance
*   Angular Pipes Quidance
*   Angular Animations Quidance
*   Angular Services
*   Dialog and Notification Services
*   Integrated Internationaliztion
*   Theming with SASS
*   Ready-to-use email API
*   Handling Access and Refresh Tokens with WebStorage (Bearer authentication) - No Cookies
*   Jquery Integration (Ability to use standard Jquery libraries)
*   Responsive Design


## Installation

*   [OPTION 1] Clone the [Git Repository] and edit with your favorite editor. e.g. Visual Studio, Visual Studio Code
*   [OPTION 1] install .net 5 from <a href='https://dotnet.microsoft.com/en-us/download/dotnet/5.0'> here </a>
*   install npm version 8.5.5
*   install node 16.15.0
*   install 11.2.9


## Installation Notes

*   cd to the location of  /Irembo.UserManagement/Irembo.UserManagement.csproj file location
*   run "dotnet restore" for asp.net project
*   and cd ClientApp\package.json file location and run "npm install" for angular project.
    When using VisualStudio this is automatic, check the output window or status bar to know that the package/dependencies restore process is complete before      launching your program for the first time.
    
*   If you get any errors, consider running manually the steps to build the project and note where the errors occur.
    Open command prompt and do the below steps:  
    1. run 'dotnet restore' from the two project folders or the location of Irembo.UserManagement.sln file  - to Restore .net nuget packages
	2. run 'npm install' from the project with package.json - to Restore npm packages
	3. Try running the application again - Test to make sure it all works
*	When running the client(angular) project on a different address/domain from the backend, configure the baseUrl of the client to match that of the server.
	You do this from environment.ts in the ClientApp/Angular project.
	Example: baseUrl: "http://yourbackendserver.com" OR baseUrl: "http://localhost:5050"


## Login

LOGIN WITH USERNAME OR EMAIL ADDRESS
> * **Default Administrator Account**
>   * Username: admin
>   * Email:    admin@ebenmonney.com
>   * Password: tempP@ss123



> * **Default Standard Account**
>   * Username: user
>   * Email:    user@ebenmonney.com
>   * Password: tempP@ss123


## Documentation

*   [Conceptual overview of what is ASP.NET Core](https://go.microsoft.com/fwlink/?LinkId=518008)
*   [Working with Data](https://docs.microsoft.com/en-us/ef/#pivot=efcore)
*   [Angular 11 documentation overview](https://angular.io/guide/quickstart)
*   [Getting started with Angular CLI](https://cli.angular.io)
*   [Introduction to Bootstrap 4](https://getbootstrap.com/docs/4.1/getting-started/introduction)
