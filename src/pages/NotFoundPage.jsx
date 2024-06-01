import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='ml-8'>
      <div className=' rounded py-3  '>Nothing here
      </div>
      <Link to='/' className='text-black  font-semibold cursor-pointer' > Go Home</Link>
    </div>
    
    )
}

export default NotFoundPage