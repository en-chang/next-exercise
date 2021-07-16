import Link from 'next/link';

const testPage = () => {
  return (
    <div style={{fontSize: '20px', color: 'blue'}}>
      <h1>Test</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <p>this is a test page</p>
      <p>and yes it was a success</p>
    </div>
  )
}

export default testPage