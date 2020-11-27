##### Server repo [here](https://github.com/costel-dev/dci_graduates/tree/main/server)

##### Client repo [here](https://github.com/costel-dev/dci_graduates/tree/main/client)

### Config & Installation

- To set up a development environment on your local computer
- Git clone the backend(server)
- Git clone the frontend(client)
- In terminal, run 'npm install' on both
- Install(in server folder) 'nodemon'(npm install -D nodemon) to run the server in development mode
- cd into the server folder, run in terminal command ‘npm run dev’ to start both servers
- The application will initialise on your default browser for ‘localhost:3000’

### Problem Definition & Purpose :bulb:

DCI has been teaching students full-stack web development and online-marketing in Germany for approximately four years, and the online courses are the latest expansion. In this period, the organisation has built up a reputation within the local tech scene(Berlin, Düsseldorf, Hamburg, Leipzig) for graduating job-ready junior developers and online marketers.

Even DCI at present does have external-facing resource that formally showcases its graduating cohort like Final Presentation, graduates still needs to rely on their own portfolio work, class assessments and reaching out to companies in an ad hoc fashion via meetups, social media and internship interviews.

Our MERN project therefore aims to deliver a minimal viable product (MVP) that prototypes a professional platform for DCI students to present their best work to prospective employers with the view of securing job or internship opportunities.

The portal can also incidentally raise the public profile of DCI within the tech industry as a trainer of quality junior developers and online marketers.

### Functions & Features :clipboard:

- Displays a list of profiles to Guests (non-account holders) and Users (authorised account holders)
- Guests and users can search for an account by name, tech stack and bio
- Students can create an account
- Students can edit their own account. (They cannot do this for any other profiles)
- Email and password authentication for account holders
- Session management for logged in users (users stay logged in for a reasonable period of time after successful authentication)
- Basic data validation in the sign up and edit profile forms

#### Original stretch goals :hatching_chick:

- DCI management team can create events to showc case students work
- Allow employers to create a “employer” type of account, which has similar profile fields (bio, website, twitter, tech stack, hiring?)
- Employer account-holders will have the additional functionality of being able to engage in direct messaging with student account holders
- Only users with an graduate ID can sign up for an account
- Students can delete their own account. (They cannot do that for any other profiles)

### Tech Stack :computer:

- HTML/CSS3/SCSS for visual styling the user interface
- NodeJS as Javascript runtime environment
- ExpressJS open source framework for creating the server application on NodeJS
- ReactJS framework for creating the client side application that handles page routing, page rendering, searching
- MongoDB and MongoAtlas for the student detail database hosted on the cloud
- Heroku for hosting the server application
- Netlify for hosting the client-side application

### Design Process :paintbrush:

#### Style Guide

The font families, font weights, colour palette to be used as standard in the application can be viewed [here](https://styleguide)

#### User Stories

_Recruiter for software development company in Berlin_

A recruiter who regularly attends Women Who Code Berlin meetup has met a few developer students from DCI. She is looking to broaden her contact networks and she is interested to see what these students are capable of and their tech stack exposure. Unfortunately, she has forgotten their names unfortunately and want to get in touch with them again.

_DCI current student_

User is currently studying the FbW.. in Düsseldorf and has been attending hackathons. He is active on the meetup scene and attends classes regularly to keep up with the work. He will be graduating in six months (April 2021). He already has a few linkedin contacts from attending meetups.

_DCI past student_

OtherUser graduated from the FbW.. in July 2020 and is looking for work either in Hamburg. She does have a github account and is working on her own web portfolio. She wants to network with other junior developers to get her name out there.

_Start-up founder_

A start up found based in Düsseldorf is interested in getting some interns to participate as part of the co-working space’s initiative. He is not sure where to start looking but has heard of the .... event that are regularly held in the same space.

#### Planning

The project had less than 25 full days to deliver the project, starting from 3 September through to 2 October. The team worked roughly in 3-day sprints, with some room for flexibility.

#### Source control process

The server-side and client-side of the web application are stored in separate Github repositories to allow for separate deployment on Heroku (backend) and Netlify(frontend). The team practiced feature-branching workflow where team members build on a local feature branch based on their allocating trello card, commit and push changes to the remote repository before review by another team member prior to merging.

Image courtesy of Atlassian (https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

The team did experience some issues with git source control
Some work was written over or lost because merge conflicts were not properly resolved in the browser.

- properly manage merge conflicts between commits
- practicing appropriate pull request etiquette
- just gaining general familiarity with git pulling/pushing commits in a 3-man team scenario.

#### Short answer questions

##### What are the most important aspects of quality software?

I referred to this wiki article as starting point
https://en.wikipedia.org/wiki/List_of_system_quality_attributes

ISO/IEC 25000 series of international industry-recognised standards (also known as System and Software Quality Requirements and Evaluation) provides a series of non-functional requirements as guidance on what constitutes quality software.

Image courtesy of http://iso25000.com/index.php/en/iso-25000-standards/iso-25010?source=post_page---------------------------

Some high-level quality attributes in brief include:

**Performance**
This refers to how well a piece of software performs a certain number intended functions over a period of time under a spectrum of operating environment factors and testing heuristics. Some things to consider include average page load time, how long does it take for the server to respond, how many users can be logged into a system at the same time.

**Interoperability**
Interoperability refers to the ability of an application or software to interact with other systems, such as external APIs, cloud services, deployment platforms. For example, in this assignment.

Development teams need to consider factors such as handling and interpolating different data formats returned from external APIs (i.e. cloudinary), managing future changes and legacy compatibility of external services and products (i.e. hosting platforms).

**Usability**
A quality application or software should not only have features that cater for target demographic, but also accommodate user devices (i.e. responsiveness, browsers), accessibility. This is where scoping for MVP functionalities, market research and an understanding of industry best practices will be essential.

**Reliability/Availability**
This criteria refers to a system or a software’s ability to operate under predefined conditions, particularly factors that could lead to latency, system compromises, downtime, failed network connections.

**Security**
A software -- particularly an application like this project that stores sensitive data such as security credentials, user details -- must be able to protect against accidental or intentional loss of data (i.e. DDOS, restricting unauthorised user access to certain resources, admin rights)

**Maintainability/Scalability (Reducing technical debt)**
Codebase that is built with maintainability and scalability in mind means that it would be easier and cost effective to change functionalities to accommodate customer or business needs over time. It would also be easier to onboard new developers to the project if the codebase follows best practices, recommended linting guidelines.

Setting down the Minimum Viable Product functionalities and features is important to building quality software because
Team can focus their efforts on meeting their users’ needs first
The functions that they built will actually be useful, instead of wasting resources on a feature that no one would use.
The functions can be improved upon and even expanded based on the feedback on the focussed set of functionalities built, rather than combating scope creep.

**Test Driven Development**
Having short development cycles and regular testing - build, refactor and test - means the coding satisfies specification, use cases -- essentially does what it’s supposed to do.
Ensures best coding practices are followed
Reduce bugs, unexpected outputs.

Good build practices can lead to good quality code and happy users. Quality software meets audiences needs.

Readable code with good comments - scalability. Scaling involves more people to get involved in the codebase quickly.

Continuous Delivery and Continuous Deployment - Deploy early, deploy often

In a prototyping project scenario within a compressed timeframes, it is important to ensure that functions are built and tested by order of priority/needs, deployed as early as possible for user feedback. This way, Even from the earliest stages of prototype development, the end-user is exposed to a product with baseline functionalities.

##### Several key benefits of software built with Continuous Delivery/Continuous Deployment in mind:

Development Work is compartmentalised and subsequent releases are smaller increments and easier to understand for users
The user feedback loop is tighter which in turn allows for more tweaks to features
Early deployment means problems and deficiencies can be identified early

#### What libraries are being used in the app and why?

##### Front End Dependencies

**React-router-dom**
Sets up routes, nested routes to allow user to traverse to different parts of the react application. It binds routes to the Document Object Model (browser tree). This allows us to set up routes within the react-side of the application.

**Bootstrap**
An open-source CSS component framework with fixed styles and appearances for the most commonly used components of a web application (i.e. forms, buttons, lists, cards). Using a pre-existing CSS framework shortened our development time and we were able to quickly prototype different visual looks to UI within the compressed two-week timeframe.

**Reactstrap**
A set of open-source set of React components that are extended from the Bootstrap framework that further shortened our development time by passing HTML/CSS of Bootstrap. This allows us to make only focussed changes in SCSS to tailor the framework to our styleguide.

**Font-awesome**
We used the open-source font-awesome suite of icons for logo and user interface on the react-side of the application.

**Node-sass**
Node-sass package works in tandem with the bloomer packages to allow writing custom styles over the existing bulma framework. This is essential for bloomer to work on our client-side of the application.

**Axios**
This package handles requests between the client-side (React) and the NodeJS server.

**Redux**
To centralize our application state and logic, to easy trace 'when', 'where', 'why' and 'how' our state application changed.

##### Back end dependencies

**Dotenv**
We used a “.env” file to store environment variables such as API keys, MongoDB connection strings, jwt secrets and deployment variables. The ‘.env’ file is hidden from public git using .gitignore and this package enables the deployed application to access the secured information inside .env.

**Body-parser**
A middleware package that exposes data in an incoming request stream as ‘req.body’ in forms such as the signup, edit profile and log in pages. This package is essential for this application as the server will send POST requests from the forms to the MongoDB database.

**Bcryptsjs**
We used Bcryptjs to encrypt user password to send it to our database. We ensure that user will be protected from scripts atack by sending hash password to database.

**ExpressJS**
Our project’s server is built upon the open-source web application framework that runs on the NodeJS runtime environment.

**Jsonwebtoken**
We used this npm package created by Auth0 to enables site authentication, authorisation by generating a ‘token’ that is encrypted with a JWT secret, includes a payload of user information (i.e id, username)

**Morgan**
Morgan is used for us for logging HTTP request details automatically from server, such as request logs. It helps us save time from manually create and standardize common logs.

**Mongoose**
Mongoose provides modelling (schema, model) to work with data stored in MongoDB. Mongoose uses object data model that represents data as Javascript objects and then mapped to the underlying Mongo database.

**Nodemon**
Nodemon is used to detect changes to the server source code and restart the server.

#### A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

To develop a functional product to fulfil business needs and end-user preferences, a team needs a balance of business development skills, project management and technical proficiency.

**Technical Skills**
HTML/CSS3 to write responsive, semantic UI mark-up
Understanding of authentication and authorisation, particularly JWT Token, headers in api calls, salting, secret hashing of passwords, how payloads can be decoded and user details withdrawn to authenticate for protected routes
Javascript basics particularly callback functions, prototype and native methods, asynchronous functions
Setting API endpoints on server
Server-side data validation
Understand the structure of No-SQL nature of Mongo database and Mongoose methods
Structuring the client-side of a web application using props, data interpolation and components on ReactJS
Control state management inside the app using Redux for further an easier scalability in the future
Clear grasp of pull request etiquette, commit history practices using git source control

**Business Development Skills**
Market research and user needs discovery
Understanding prevailing trends on what the tech industry looks for in junior graduates, the profile of DCI student cohorts, and the overall business direction for DCI helped the team flesh out the MVP functionalities - what information should the student profile contain, style guide and visual direction, to name a few.

**Client liaison to ensure everyone has shared understanding of delivery on expectations**
The team kept the client regularly updated on project progress, difficulties and roadblocks with daily standups. The client was also able to provide workaround solutions to roadblocks, for example ... suggested the ... service when the team experienced persistent issues with setting up a Cloudinary connection with the NodeJS server.

**Project management (both technical and client) Skills**
Ability to identify resource-appropriate MVP features
Recognise and constrain scope creep of MVP features as development and discussions with client progress
Documenting “nice-to-have” features, identify extensible features (unresolved issues) for future improvement
Equally distribute work amongst team members, and keeping track of time spent on a specific feature or problem.
Communication skills to mesh well with team member personalities, different communication styles and work practices.

#### Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

**Costel**

For me this task required a baseline understanding of the fundamental aspects of MERN application development, project management, and design processes. That might seem like a pretty broad statement, but successfully completing this assessment within our time constraint, required us all to wear many hats to hit our deliverables.

The fundamentals that were most pertinent to me with regards to building the application itself were being able to build an Express server on-top of Node on the back-end, and how to manage state and make API requests on the front-end.

I had to learn some of the more technical elements of authentication specifically handling cookies, and how they move from the server to the client and vice versa. I developed an understanding of how to use the encrypted JWT payload to verify specific users and use that to pass filtered data back to the end-user.

_Debugging_
I needed an efficient means of researching for solutions to coding problems following previous assignment. Knowing the right search terminology, trial & error, pair programming and having a good grasp of fundamentals should help toward the debugging process.

One other important skill that I’m sure most people will probably reference is the ability to find ways around problems, and overcome challenges, usually with the help of the wonderful search engine known as Google, and the very helpful participants of StackOverflow.

**Cristi**

The project required a well rounded understanding of the structure of a web app in general and how each component interact with each other. Being a Full-Stack web developer I needed to understand how the core functionality of Express, Node, React & MondoDB links in and the extra libraries that would be required in the project.

In addition to this base level knowledge and skillset there was also the ongoing learning process of becoming familiar the functional component makeup of a React Front-End. Getting comfortable with the under-the-hood workings of a browser allowed me to understand the render process of React and how this fits together with the back end in regards to data retrieval.

Having spent so long away from CSS it was a little challenging to best practice for stlying a front end as well as learning a CSS framework to assist in this portion.

Becoming comfortable using testing frameworks was the main challenge in my portion of the app. Conceptualizing the back end processes during HTTP requests and hitting our API endpoints was crucial to understanding the actual portions of the app being tested. Overall I found testing to be a rather challenging process as many parts of the underlying structure had to be understood on a whole to know why and how tested either passed or failed.

**Kris**

_Learning basic concepts in compressed scenarios_
Just like previous assessments, the pace and timeframe means learning basic concepts will have to happen at the same time as building the assignment. This assignment is especially challenging as I came to the team with very poor understanding of classwork.

#### Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

**Costel**

I think in the initial design phase I was a bit overwhelmed by the idea of needing to build an entire front-to-back end application without the help of the so-called ‘magic’ helpers of Rails. That being said I think now that we’re close to being finished, having seen both the server and client-side of the application come together it has been a fantastic lesson in full stack web application development and how those two components come together to provide the end-user experience.

One theme I have seen over both Rails and this assessment is a definite need to practice the skills we learn in class and practice building full applications (even small ones) that incorporate many elements from our lessons, and getting an understanding of how they integrate with one another. I feel like I had a good theoretical/conceptual understanding of the fundamentals of MERN coming into this assessment but I really had to work hard over the last couple of weeks to understand how each part of the application comes together/interacts nicely (i.e. no borking) with one another.

The example I would use is authentication. I knew how cookies, salting, hashing, and authentication worked on a very basic level, but getting CORS to allow cookies generated by JWT, from valid logins authenticated by PassportJS was actually a real challenge. Were I have to made an application with authentication before starting this assessment I may have been able to implement authentication a little more easily, and maybe done it in a more suitable way e.g. passing the JWT through authorization headers avoiding the headache of httpOnly cookie management.

I also think the project scope enabled us to all be realistic about our MVP and what sections needed more time or to be completed early. I think were I to do this project again I would ideally go in with a more practical application of my theoretical knowledge of the ways the MERN stack all fits together.

**Cristian**

I would say coming into this app I felt unprepared due to the limits of my knowledge in both the front and back end of the development process using the MERN stack. However I think having passed through the Rails assessment there were many lessons to be carried over. I think one aspect was having everyone on the same page and working in unison from the onset.

I think my skills were a little green when it came to the actual coding of the particular parts of the application however my theoretical and conceptual knowledge allowed me to happily participate in pair programming sessions as well as developing and researching my own sections as required.

**Kris**
Beyond basic HTML/CSS3, I was unable to make effective contribution towards the team project due to lack of fundamental understanding of the MERN tech stack, key principles of deployment, interactions between server and client. I attempted to contribute towards visual design, client liaison, technical documentation, HTML5/CSS3 basic UI component set up - areas with preexisting skillsets and knowledge from my previous work experiences. I tried to look for a way to navigate through the tech stack and be self sufficient in solving problems but unfortunately I never found it in this course.

Early wireframing of the project also indicated I had an incomplete understanding of project requirements and how to scope for MVP. Hopefully this could be something that can be improved with experience over time.

For future projects, I would like to bring to the table a better understanding of the specified tech stack to keep in pace with my teammates. It is not clear at present stage what it takes to improve my own adaptability and general aptitude towards learning tech stack as a junior developer.

Alternatively, build in sufficient buffer in the project timeline to allow for directed learning and general trial & error. This means I can help deliver a more well-considered product rather than a slipshod effort that may accrue technical debt down the track.

##### Open Source Attribution

Aside from npm packages and library dependencies, the team credits the following open-source resources.

- **Bootstrap & Reactstrap**: The user interface of the application relied on the pre-styled CSS and design of these css framework and react components.
- **Google Fonts**: Montserrat and Raleway were used for the text of the web application
- **Undraw**: SVG illustrations were used as graphics.
