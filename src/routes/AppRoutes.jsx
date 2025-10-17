import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../Layout'
import Card from '../pages/Card'

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element:<Home/>},
            {index: 'card/:id', element:<Card />},
        ]
    }
])

export default router