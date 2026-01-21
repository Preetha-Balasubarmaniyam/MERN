# **Theory**

- **What is Emmet?**
   Ans: Emmet is a powerful tool integrated into VS Code that helps generate code quickly. For example, typing html:5 will generate the basic structure of an HTML file.

  ### Using Emmet Abbreviations in JSX
   Once enabling emmet, we can use Emmet abbreviations to quickly generate JSX code:

 ### Example 1: Creating Elements with Classes and IDs
    div#app.container
        Expands to: <div id="app" className="container"></div>

- **Difference between a Library and Framework?**
   Ans: Both libraries and frameworks are reusable code written by others to simplify development, but their control flow and scope differ significantly.
   A library is a collection of functions, classes, or modules that you call directly to perform specific tasks. You remain in control of the application’s flow — deciding when and where to use it. eg: REACT, JQuery.
   
   A framework, on the other hand, provides a structured foundation for your application. It dictates the overall flow and calls your code at predefined extension points — a concept known as Inversion of Control (IoC). Eg: Tailwind CSS, angular, nextjs

   Library: Your code → calls library functions.
   Framework: Framework → calls your code at specific hooks.

- **What is CDN? Why do we use it?**
  Ans: A CDN (Content Delivery Network) refers to loading React libraries, CSS frameworks, or other static assets directly from globally distributed servers instead of bundling them locally. 
 ## Benefits of Using CDN in React
  1.Faster load times: Popular libraries are often cached in browsers from previous visits to other sites.
  2.Reduced server load: Static assets are served from CDN edge servers.
  3.Quick setup: No need for npm/yarn installation for small projects.
  4.Global scalability: Handles high traffic without stressing your origin server.

- **Why is React known as React?**
  Ans: React is used to build user interfaces. React is called React because of its “Reactive” nature to the changes in UI according to changes in data.

- **What is crossorigin in the script tag?**
  Ans: The crossorigin attribute in the <script> tag is used to handle the fetching of external scripts in a way that supports Cross-Origin Resource Sharing (CORS). CORS is a mechanism that allows web pages to request resources from a different domain than their own.
  
- **What is the difference between React and ReactDOM?**
   Ans: 1. React is the core library for building user interfaces. It provides the tools to create reusable components, manage their state, and define the structure and behavior of the UI. 
        2. React is platform-agnostic, meaning it can be used for web, mobile, or other platforms like React Native. 
        3. It includes features like React.Component, React.createElement, and hooks for managing state and lifecycle events.

        1.ReactDOM, on the other hand, is a specific package that acts as the bridge between React and the browser's DOM. 
        2.It is responsible for rendering React components into the DOM and updating them efficiently using the virtual DOM. 
        3.ReactDOM is used exclusively for web applications and includes methods like ReactDOM.render() and 
          ReactDOM.findDOMNode().

- **What is the difference between react.development.js and react.production.js files via CDN?**
    Ans: react.development.js (Development mode)
           Purpose: Ideal for development environments where debugging and code clarity are priorities.
           Key Features:Detailed Error Messages,Unminified Code,Hot Reloading, Source Maps

         react.production.js (Production mode)
           Purpose: Optimized for real-world deployment, prioritizing performance and file size.
           Key Features:Minified Code,Optimized Performance, Error Handling, No Warnings, No Source Maps

- **What is async and defer?**
     Ans: The async attribute allows the script to be downloaded in parallel with HTML parsing. Once the script is downloaded,    it is executed immediately, pausing the HTML parsing process. This means async scripts do not wait for other scripts or the DOM to finish loading. Eg: ADS
      <script async src="script.js"></script>
    
     The defer attribute also downloads the script in parallel with HTML parsing. However, the execution of the script is deferred until the entire HTML document is fully parsed. This ensures that scripts are executed in the order they appear in the document. <script defer src="script.js"></script>



