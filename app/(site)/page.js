import Header from '@/components/Header'
import Title from '@/components/Title'
import Board from '@/components/Board'

const Home = () => {
  return (
    <div className='
    h-full
    w-full 
    overflow-hidden
    overflow-y-auto
    '>  
       <Header />
       <Title />
       <Board />
    </div>
  )
}

export default Home