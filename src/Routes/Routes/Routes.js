import Main from "../../Layouts/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Media from "../../Pages/Media/Media";
import Message from "../../Pages/Message/Message";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/media',
                element: <Media />
            },
            {
                path: '/message',
                element: <Message />
            },
            {
                path: '/about',
                element: <About />
            },
        ]
    }
])

export default router;