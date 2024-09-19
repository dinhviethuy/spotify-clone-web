import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import SearchPages from "../pages/About/index.jsx";
import Library from "../pages/Contact";

export const routes = [
  {
    path: '/',
    element: <LayoutDefault/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'search',
        element: <SearchPages/>
      },
      {
        path: 'library',
        element: <Library/>
      }
    ]
  }
]