// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addDays, addMonths, format, subDays, subMonths } from 'date-fns';
import {  useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext/DataContext';
import './Header.scss';
// import { faLessThan,faGreaterThan } from '@fortawesome/free-solid-svg-icons';
const Header=()=>{
    const [navigate,setNavigate]=useState(false);
    // const [view ,setView]=useState("Month");
    // const currentDate=props.currentDate;
    // const setCurrentDate = props.setCurrentDate;
    const {currentDate,setCurrentDate} = useContext(DataContext)
    const isDay = window.location.pathname==="/days";
    // console.log(isDay);
    // console.log(window.location.pathname);
    // useEffect(()=>{
    //     window.location.pathname==="/days"?setView("Day"):setView("Month")
    // })
    const prev=()=>isDay ? setCurrentDate(subDays(currentDate,1)):setCurrentDate(subMonths(currentDate,1));
    const next=()=>isDay ? setCurrentDate(addDays(currentDate,1)):setCurrentDate(addMonths(currentDate,1));
    const ButtonName=()=>isDay ? "Day" : "Month"
    console.log(isDay);
    const handleClickNavigation=()=>setNavigate(!navigate);
return(
    <div className="header">
        <div><h2>Calendar</h2></div>
        <div><button onClick={prev} className="secondary-button">Previous</button></div>
        <div className='current-month'><h2>{format(currentDate,"LLLL yyyy")}</h2></div>
        <div><button onClick={next} className="secondary-button">Next</button></div>
        <div className='view-button'>
            {/* <button onClick={handleClickNavigation} className="primary-button">{ButtonName()}</button> */}
            <button onClick={handleClickNavigation} className="secondary-button">{ButtonName()}</button>
            <div className={navigate?"list-open":"list-close"}>
                {/* <li className='list'><Link to="/"><li onClick={handleClickNavigation}>Month</li></Link></li>
                <li className='list'><Link to="/days"><li onClick={handleClickNavigation}>Day</li></Link></li> */}
                <Link to="/"><li onClick={handleClickNavigation}>Month</li></Link>
                <Link to="/days"><li onClick={handleClickNavigation}>Day</li></Link>
            </div>
        </div>
    </div>
)
}
export default Header;