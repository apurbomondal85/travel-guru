
import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Booking from "../components/Booking/Booking";
import Login from "../components/Login/Login";
import Singup from "../components/Singup/Singup";
import BookingRoom from "../components/BookingRoom/BookingRoom";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://travel-server-apurbomondal85.vercel.app/travelPlace')
        },
        {
          path: '/booking/:id',
          element: <Booking></Booking>,
          loader: ({params}) => fetch(`https://travel-server-apurbomondal85.vercel.app/travelPlace/${params.id}`)
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'singup',
          element: <Singup></Singup>
        }
      ]
    },
    {
      path: 'booking-rooms/:id',
      element: <PrivateRouter><BookingRoom></BookingRoom></PrivateRouter>,
      loader: ({params}) => fetch(`https://travel-server-apurbomondal85.vercel.app/travelRooms/${params.id}`)
    },
    
  ]);