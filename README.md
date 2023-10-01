# Seeking Maintainers

Maintaining a project that is used by hundreds, thousands or even millions of
people can be stressful. Replying to issues, merging pull requests and answering
questions in forums is a vital part of every open source project, but it takes a
lot of time and energy, especially if you also work full-time in your day job.

This list is an index of open source projects seeking new maintainers. If you
find a project that sounds interesting and you're looking for a way to help out,
feel free to take a look at their posting and apply as a maintainer. If you
maintain a project yourself and feel stressed out, you're more than welcome to
add it to this list.

## How to add your project to this list

If you're interested in getting your site added to the Seeking Maintainers
index, all you need to do is to [file an
issue](https://github.com/garritfra/seeking-maintainers/issues) in this
repository using the "Add a new project" template and follow the instructions.

Please bear with us while a moderator reviews your submission. After your
submission is approved, the "seeking-maintainer" label is assigned to the issue,
which causes the project to show on the index.

## Contributing to the seeking maintainers website

### Getting Started

Before you start contributing, please follow these steps to set up your development environment:

1. **Fork the Repository:** Click the "Fork" button at the top-right corner of this repository to create a copy of the project in your GitHub account.

2. **Clone Your Fork:** Clone your forked repository to your local machine using Git. Replace `<your-username>` with your GitHub username:

   ```shell
   git clone https://github.com/<your-username>/seeking-maintainers.net
   ```

3. **Install Dependencies:** Navigate to the project's directory and install the required dependencies:

   ```shell
   cd <project-directory>
   npm install
   ```

4. **Run the Development Server:** Start the development server to preview your changes:

   ```shell
   npm start
   ```

The website should now be accessible locally at http://localhost:3000.

### Making Changes

Once you have set up your development environment, you can start making changes to the website:

1. **Create a New Branch:** Before you begin working on a feature or bug fix, create a new Git branch for your changes:

   ```shell
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes:** Make the necessary code changes, add new features, or fix bugs.

3. **Commit Your Changes:** When you are satisfied with your changes, commit them using Git:

   ```shell
   git add .
   git commit -m "Add your descriptive commit message here"
   ```

4. **Push to Your Fork:** Push your changes to your GitHub fork:

   ```shell
   git push origin feature/your-feature-name
   ```

## Chat

If you have any questions or want to get involved, feel free to join our room on
Matrix:

https://matrix.to/#/#seeking-maintainers:matrix.org

### License

This project is licensed under the [MIT license](./LICENSE). We do not own any
rights to the projects on this list.
