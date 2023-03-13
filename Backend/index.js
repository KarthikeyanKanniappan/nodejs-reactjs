let express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Backend");
});

// user route by using function
app.use("/users", require("./routes/user.js"));
app.use("/product", require("./routes/product.js"));
app.use("/auth", require("./routes/auth.js"));

// route by using class
// class AppController {
//   constructor() {
//     this.endpoints = {
//       posts: {
//         create: (options = {}) => {
//           return {
//             method: "POST",
//             resource: `/users`,
//             params: {},
//             body: {
//               ...options,
//             },
//           };
//         },
//         list: (options = {}) => {
//           return {
//             method: "GET",
//             resource: `/users${options.postId ? `${options.postId}` : ""}`,
//             params: {},
//             body: null,
//           };
//         },
//         post: (options = {}) => {
//           if (!options.postId) {
//             throw new Error("A postId is requried ");
//           }
//           return {
//             method: "GET",
//             resource: `/users/${options.postId}`,
//             params: {},
//             body: null,
//           };
//         },
//         comments: (options = {}) => {
//           if (!options.postId) {
//             throw new Error("A postId is requried ");
//           }
//           return {
//             method: "GET",
//             resource: `/users/${options.postId}/comments`,
//             params: {},
//             body: null,
//           };
//         },
//       },
//     };
//   }
//   posts(method = "", options = {}) {
//     const existingEndpoint = this.endpoints.posts[method];

//     if (existingEndpoint) {
//       const endpoint = existingEndpoint(options);
//       return this.request(endpoint);
//     }
//   }
// }

app.listen(8000, () => {
  console.log(`Server is listening in Port 8000`);
});
