import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Rolldice } from './component/Rolldice';
export const App = () => {
  return (
    <div className="container">
      <div className="containers m-auto ">
        <div className="d-flex justify-content-center  my-5">
          <h1 className='animate__animated animate__backInLeft pe-3'>let's </h1>
          <h1 className=' animate__animated animate__backInRight'>  roll the dice</h1>
        </div>

        <Rolldice ></Rolldice>
      </div>
    </div>
  )
}