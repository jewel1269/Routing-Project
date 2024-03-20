import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './componant/About/About.jsx';
import Home from './componant/Home.jsx';
import Contact from './componant/Contact/Contact.jsx';
import Header from './componant/Header/Header.jsx';
import Users from './componant/User/Users.jsx';
import Posts from './componant/Posts/Posts.jsx';
import PostDetails from './componant/Post Details/PostDetails.jsx';
import ErrorPage from './componant/ErrorPag/ErrorPage.jsx';






const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/header',
        element: <Header></Header>
      },
      {
        path: '/user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          element: <PostDetails ></PostDetails >
      } 
]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
