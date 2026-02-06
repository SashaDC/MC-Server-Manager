export default function CreateServer() {
  // Test data, replace with actual API data later
  const data = [
    { id: '1.19.4', name: '1.19.4', type: 'release' },
    { id: '1.20', name: '1.20', type: 'snapshot' },
    { id: '1.20.1', name: '1.20.1', type: 'other' },
    { id: '1.20.2', name: '1.20.2', type: 'release' },
  ]

  return (
    <>
      <p>Make a new server</p>
      <form action="">
        <label htmlFor="serverName">Server Name:</label>
        <input type="text" id="serverName" name="serverName" />
        <br />
        <label htmlFor="serverVersion">Server Version:</label>
        <select id="serverVersion" name="serverVersion">
          {data.map((version) => (
            <option key={version.id} value={version.id}>
              {version.name}
            </option>
          ))}
        </select>
        <input
          type="radio"
          id="release"
          name="option"
          value="release"
          defaultChecked
        />
        <label htmlFor="release">Release</label>
        <input type="radio" id="snapshot" name="option" value="snapshot" />
        <label htmlFor="snapshot">Snapshot</label>
        <input type="radio" id="other" name="option" value="other" />
        <label htmlFor="other">Other</label>

        <br />

        <button type="submit">Create Server</button>
      </form>
    </>
  )
}
