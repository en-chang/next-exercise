import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <div>
        {
          props.robots.map(robot => (
            <li key={robot.id}>
              <Link href={`robots/${robot.id}`}>
                <a>
                  {robot.name}
                </a>
              </Link>
            </li>
          ))
        }
      </div>
    </div>
  )
}

Robots.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.cypress.io/users')
  const data = await res.json();
  return {
    robots: data
  }
}

export default Robots