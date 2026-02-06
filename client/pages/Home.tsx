import { Link } from 'react-router-dom'
import { useManifestData } from '../hooks/useAPIs'

// To Do:
// - Fetch API data on startup
// - If fetch fails, show error message but allow user to continue to server selector, otherwise continue normally.
// - The fetch limit is 600 requests per 10 minutes, so cache the result in local storage with a timestamp.

// - Style the page nicely.

export default function Home() {
  const { isLoading, isError, data } = useManifestData()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return (
      <div>
        <h1>Error fetching Minecraft versions.</h1>
        <p>
          There was an issue fetching the Minecraft version data. You can
          continue to the server selector, but some features may not work as
          expected.
        </p>
        <Link to="select-server">
          <button>Go to Server Selector</button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <header>
        <h1>Welcome</h1>
      </header>
      <main>
        <h2>Choose:</h2>
        <Link to="select-server">
          <button>Select Server</button>
        </Link>
        <Link to="create-server" state={data}>
          <button>Create Server</button>
        </Link>
      </main>
      <footer>
        <p>Something Footerwise</p>
      </footer>
    </>
  )
}
