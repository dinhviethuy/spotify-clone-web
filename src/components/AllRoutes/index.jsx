import { useRoutes } from 'react-router-dom'
import {routes} from '../../routes'

function AllRoute() {
  const route = useRoutes(routes);
  return (
    <>
      {route}
    </>
  )
}

export default AllRoute