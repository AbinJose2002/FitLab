import './Curriculum.css'
import { useState } from 'react'

export default function Curriculuim() {
  const [activeItem, setActiveItem] = useState("dbms");
  return (
    <div className='container'>
      <h1 className="curriculum-head text-center py-4">Our Curriculum</h1>
      <div className="curriculum-body row py-5">
        <div className="sidebar col-3">
            <ul className='curriculum-list'>
                    <li className={`curriculum-item ${activeItem === "dbms" ? "active" : ""}`} onClick={() => setActiveItem("dbms")}>Database</li>
                    <li className={`curriculum-item ${activeItem === "de" ? "active" : ""}`} onClick={() => setActiveItem("de")}>Digital Electronics</li>
                    <li className={`curriculum-item ${activeItem === "cn" ? "active" : ""}`} onClick={() => setActiveItem("cn")}>Computer Network</li>
            </ul>
        </div>
        <div className={`curriculum-body col-9 px-5 py-5 ${activeItem === "dbms" ? "" : "noactive"}`} id="dbms">
            <h1>DBMS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className={`curriculum-body col-9 px-5 py-5 ${activeItem === "de" ? "" : "noactive"}`} id="de">
            <h1>Digital Electronics</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className={`curriculum-body col-9 px-5 py-5 ${activeItem === "cn" ? "" : "noactive"}`} id="cn">
            <h1>Computer Network</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      </div>
  )}