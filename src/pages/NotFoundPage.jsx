import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className=''>
      <div className=' rounded py-3 px-3 '>Nothing here
      </div>
      <Link to='/' className='text-black font-semibold cursor-pointer' > Go back</Link>
    </div>
    
    )
}

export default NotFoundPage