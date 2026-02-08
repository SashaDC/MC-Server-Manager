import { useState, ChangeEvent } from 'react'
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

  // Filtered data based on selected filter for the dropdown.
  const filteredData = data.versions.filter((version: { type: string }) => {
    if (filter === 'release') {
      return version.type === 'release'
    }
    if (filter === 'snapshot') {
      return version.type === 'snapshot'
    }
    if (filter === 'other') {
      return version.type !== 'release' && version.type !== 'snapshot'
    }
  })

  // These are the details that will be passed to the server creation logic. It includes the server name and the selected version's id.
  const [details, setDetails] = useState({
    serverName: '',
    serverVersion: filteredData[0]?.id,
  })

  // Handles the Radio Button filter changes and updates the filter and immediate updates the serverVersion details.
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
    // Filter the data based on the new filter selection for the details.
    const newFilteredData = data.versions.filter((version: Props) => {
      if (newFilter === 'release') return version.type === 'release'
      if (newFilter === 'snapshot') return version.type === 'snapshot'
      if (newFilter === 'other')
        return version.type !== 'release' && version.type !== 'snapshot'
      return false
    })
    // Update the serverVersion in details to the first version of the newly filtered data.
    setDetails((prevDetails) => ({
      ...prevDetails,
      serverVersion: newFilteredData[0]?.id || '',
    }))
  }

  // Handles input changes for both the server name and the version dropdown. It updates the details state accordingly.
  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = evt.currentTarget
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!details.serverName || !details.serverName.match(/^[a-zA-Z]+$/)) {
      alert('Please enter a valid server name (letters only).')
      return
    }
    // console.log(details)
    ServerCreationLogic(details)
  }

  return (
    <>
      <p>Make a new server</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="serverName">Server Name:</label>
        <input
          type="text"
          id="serverName"
          name="serverName"
          required
          value={details.serverName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="serverVersion">Server Version:</label>
        <select
          id="serverVersion"
          name="serverVersion"
          value={details.serverVersion}
          onChange={handleChange}
        >
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

        <label htmlFor="release" id="radio">
          Release
        </label>
        <input
          type="radio"
          id="snapshot"
          name="option"
          value="snapshot"
          onChange={() => handleFilterChange('snapshot')}
        />
        <label htmlFor="snapshot" id="radio">
          Snapshot
        </label>
        <input
          type="radio"
          id="other"
          name="option"
          value="other"
          onChange={() => handleFilterChange('other')}
        />
        <label htmlFor="other" id="radio">
          Other
        </label>

        <br />

        <button type="submit">Create Server</button>
      </form>
    </>
  )
}
