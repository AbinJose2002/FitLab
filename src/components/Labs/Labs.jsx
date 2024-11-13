import './Labs.css'
import dbms from '../../assets/dbms.jpg'
import { useNavigate } from 'react-router-dom';

const Labs = () => {
  const navigate = useNavigate();
  const handleclick = ()=>{
    return(
      navigate('/labs')
    )
  }
  return (
    <div className='lab-sec row'>
        <h1 className="lab-head">Our Labs</h1>
        <div className="dbms col-sm-12 col-lg-6">
            <img src={dbms} className="lab-img" />
            <h3 className="dbms-head">Database Management System</h3>
            <button className="btn btn-primary" onClick={handleclick}>Explore Labs!</button>
        </div>
        <div className="dbms col-sm-12 col-lg-6">
            <img src={dbms} className="lab-img" />
            <h3 className="dbms-head">Database Management System</h3>
            <button className="btn btn-primary" onClick={handleclick}>Explore Labs!</button>
        </div>
    </div>
  )
}

export default Labs
