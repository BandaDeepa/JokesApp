import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const JokesPage = () => {
  const [jokes, setJokes] = useState([])

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10',
      )
      const data = await response.json()
      setJokes(data.jokes)
    } catch (error) {
      console.error('Error fetching jokes:', error)
    }
  }

  useEffect(() => {
    fetchJokes()
  }, [])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="jokes-head text-center">Jokes</th>
          </tr>
        </thead>
        <tbody className="jokes">
          {jokes.map(each => (
            <tr key={each.id}>
              <td>{each.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JokesPage
