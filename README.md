# Anthonyzngweb
Hello there!

I am excited to introduce my web page to you! This page showcases my past projects and experiences. Additionally, I have created some small tools on the tool page, such as a BMI calculator. I hope you can find some useful tools there.

The first version of this page will be hosted on GitHub and locally. To host this web page on your local or GitHub page, please follow the guidelines below:

For Local Host:

   1. Clone this project from Git using the following command:
   2. git clone https://github.com/anthonyzng/anthonyzngweb.git
   3. Go to the "anthonyzngweb" directory
    Install the necessary packages using the following command:
    npm install
    (Please ensure that you have already installed node.js and AngularJS in your local environment)
   4. Host this web page locally using the following command:
    ng serve
    (Please make sure that the default port is not being used by any other application. The default port is 4200.)

For GitHub Page:

   1. Clone this project from Git using the following command:
   2. git clone https://github.com/anthonyzng/anthonyzngweb.git
   3. Go to the "anthonyzngweb" directory
    Install the necessary packages using the following command:
    npm install
    (Please ensure that you have already installed node.js and AngularJS in your local environment)
   4. Build this web project using the following command:
    ng build --output-path ../docs --base-href anthonyzngweb
   5. Add the "docs" directory to the local Git branch and push it to GitHub using the following commands:

    5.1 git add ../docs
    5.2 git commit -m "update / create build angularJS project"
    5.3 git push

   6. After completing these steps, go to your current Git repository settings and select the "pages" tag.
    6.1. Select "Source" -> "Build and deployment" -> "deploy from a branch"
    6.2. Select "Branch" -> "master" -> "docs" (The branch should follow your current repository branch, and ensure that the "docs" build project directory is correct.)
