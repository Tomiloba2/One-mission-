import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./home/Index"
import { AboutUs } from "./about/Index"
import { Admission } from "./admission/Index"
import { Curriculum } from "./curriculum/Index"
import { NewsEvents } from "./news-events/Index"
import { Gallery } from "./gallery/Index"
import { Contact } from "./contact-us/Index"
import { Root } from "./root/Index"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />
        }, {
          path: "/about",
          element: <AboutUs />
        }, {
          path: "/admission",
          element: <Admission />
        }, {
          path: "/curriculum",
          element: <Curriculum />
        }, {
          path: "/news",
          element: <NewsEvents />
        }, {
          path: "/gallery",
          element: <Gallery />
        }, {
          path: "/contact",
          element: <Contact />
        },
      ]
    }
  ])
  return (
    <>
      <main>
        <RouterProvider router={routes} />
      </main>
    </>
  )
}

export default App
