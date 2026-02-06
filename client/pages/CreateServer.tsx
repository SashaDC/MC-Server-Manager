import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ServerCreationLogic from '../components/CreateServerLogic'

interface Props {
  id: string
  name: string
  type: string
}

export default function CreateServer() {
  // This gets the data passed from the Home component via the Link's state prop.
  const location = useLocation()
  const data = location.state

  // Filter state for different version types (release, snapshot, other)
  const [filter, setFilter] = useState('release')

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
  }

  const filteredData = data.versions.filter((version: { type: string }) => {
    if (filter === 'release') {
      return version.type === 'release'
    }
    if (filter === 'snapshot') {
      return version.type === 'snapshot'
    }
    if (filter === 'other') {
      return (
        version.type === 'old_alpha' ||
        version.type === 'old_beta' ||
        version.type === 'pre_release'
      )
    }
  })

  const handleSubmit = () => {
    // Check to see if everything is valid, then create the server with the selected options.
    // Details = { serverName, Object where id === selected version and then get the url from that object }
    ServerCreationLogic(Details)
  }

  return (
    <>
      <p>Make a new server</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="serverName">Server Name:</label>
        <input type="text" id="serverName" name="serverName" />
        <br />
        <label htmlFor="serverVersion">Server Version:</label>
        <select id="serverVersion" name="serverVersion">
          {filteredData.map((version: Props) => (
            <option key={version.id} value={version.id}>
              {version.id}
            </option>
          ))}
        </select>
        <input
          type="radio"
          id="release"
          name="option"
          value="release"
          checked={filter === 'release'}
          onChange={() => handleFilterChange('release')}
        />
        <label htmlFor="release">Release</label>
        <input
          type="radio"
          id="snapshot"
          name="option"
          value="snapshot"
          onChange={() => handleFilterChange('snapshot')}
        />
        <label htmlFor="snapshot">Snapshot</label>
        <input
          type="radio"
          id="other"
          name="option"
          value="other"
          onChange={() => handleFilterChange('other')}
        />
        <label htmlFor="other">Other</label>

        <br />

        <button type="submit">Create Server</button>
      </form>
    </>
  )
}
