### **Theory Assignment:**

- **What is `NPM`?**
    Ans: npm stands for Node Package Manager and is the default package manager for JavaScript's runtime environment, Node.js. It is a crucial tool for JavaScript developers, enabling them to share and manage code packages efficiently.

- **What is `Parcel/vite`? Why do we need it?**
    Ans: Parcel is a bundler that works without requiring configuration. Vite is a modern build tool designed for speed with minimal configuration. We need this bundlers for fast buildup and it provides the following features,
    - zero/minimal configuration setup
    - Hot model Reloading
    - dev server
    - Error diagnostics
    - Tree shaking
    - Minification/Compression
    - Image Optimization

- **What is `.parcel-cache`?**
    Ans: When developing, Parcel uses its cache to speed up the build process. The .parcel-cache folder holds cached files, reducing the time taken to rebuild the app when changes are made.

- **What is `npx`?**
    Ans: npx (Node Package Execute) is a package runner introduced with npm v5.2.0+. It allows you to execute binaries from npm packages without installing them globally. If the package isn’t installed locally, npx will download and run it temporarily, then remove it

- **What is the difference between `dependencies` vs `devDependencies`?**
    Ans: - Dependencies are the packages required for your application to run in a production environment.
         - Dev dependencies are the packages required only during the development phase of your project. They are not needed in production and are used for tasks like testing, building, or linting.

- **What is Tree Shaking?**
    Ans: Tree shaking is a dead code elimination technique used in programming, particularly in JavaScript, to remove unused code from a final bundle, improving performance and reducing file size.

- **What is Hot Module Replacement?**
    Ans: Hot Module Replacement (HMR) is a feature provided by bundlers that allows developers to update modules at runtime without requiring a full page refresh.

- **List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.**
    Ans: 1. Zero Config 2. Hot Module Replacement 3. Caching 4. Code spliting 5. Optimization
    1. Zero Config---- When installing, it doesn't require any configuration
    2. Caching ---- Cached everything in order to increase the perfomance by reducing build time.
    3. Hot Module Replacement - Updating the changes in run time by replacing only the affected modules, not all.

- **What is `.gitignore`? What should we add and not add into it?**
    Ans: .gitignore specifies which files and directories Git should exclude from version control(Repository).
    - What to add: Dependencies,Build artifacts,database and storage files,System generated files, compiled binary files, cache files, sensitive data file like API key infm, OS/Author related files, temporary and log files so that we can keep repository clean.
    - Not to add: Files like package.json, package-lock.json should always be commited to the version control.So we should not add it to .gitignore file

- **What is the difference between `package.json` and `package-lock.json`?**
    Ans: package.json → dependency ranges + project info
         package-lock.json → precise dependency versions for reproducibility

         package.json defines the project’s configuration and dependencies, while package-lock.json ensures stability and consistency by locking the dependency tree.
- **Why should I not modify `package-lock.json`?**
    Ans: 
    - Integrity & consistency: The file ensures that everyone installing dependencies gets the exact same versions. Manual edits can break this consistency.

    - Dependency resolution: It contains a detailed dependency tree with resolved versions, checksums, and metadata. Editing it by hand risks mismatches that cause install errors.

    - Automation: Tools like npm install regenerate it automatically based on package.json. Manual changes will often be overwritten.

- **What is `node_modules`? Is it a good idea to push that on git?**
    Ans: The node_modules folder is a directory in NodeJS projects that stores third-party libraries and dependencies. It's essential for managing dependencies, which are packages or modules that a NodeJS project relies on.

    No, it is not a good idea to push this folder on git because of its large size, as it contains a lot of files and folders along with dependencies. In this case, to install the required packages, the package.json file comes into use with the help of which anyone can install the required packages by running the command “npm install” command.

- **What is the `dist` folder?**
    Ans: The dist folder contains the minimized version of the source code. The code present in the dist folder is actually the code which is used on production web applications.

- **What is `browserlists`?**
    Ans: Browserslist is a configuration tool that defines the target browsers and Node.js versions your project should support. It’s widely used by tools like Autoprefixer, Babel, postcss-preset-env, and eslint-plugin-compat to ensure that the generated code is compatible with the specified environments.

         By adding a browserslist key in your package.json, you centralize browser targeting for all these tools, avoiding the need for multiple configurations.

         Example in package.json:
               {
"browserslist": [
">0.2%",
"not dead",
"not ie <= 11",
"not op_mini all"
]
}
