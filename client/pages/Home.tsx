import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <header>
        <h1>Welcome</h1>
      </header>
      <main>
        <h2>Choose:</h2>
        <Link to="select-server">
          <button>option 1</button>
        </Link>
        <Link to="create-server">
          <button>option 2</button>
        </Link>
      </main>
      <footer>
        <p>Something Footerwise</p>
      </footer>
    </>
  )
}
