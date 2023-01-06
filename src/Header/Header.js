// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addDays, addMonths, format, subDays, subMonths } from 'date-fns';
import {  useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
// import { faLessThan,faGreaterThan } from '@fortawesome/free-solid-svg-icons';
const Header=(props)=>{
    const [navigate,setNavigate]=useState(false);
    // const [view ,setView]=useState("Month");
    const value=props.currentDate;
    const onChange = props.setCurrentDate;
    const isDay = window.location.pathname==="/days";
    // console.log(isDay);
    // console.log(window.location.pathname);
    // useEffect(()=>{
    //     window.location.pathname==="/days"?setView("Day"):setView("Month")
    // })
    const prev=()=>isDay ? onChange(subDays(value,1)):onChange(subMonths(value,1));
    const next=()=>isDay ? onChange(addDays(value,1)):onChange(addMonths(value,1));
    const ButtonName=()=>isDay ? "Day" : "Month"
    console.log(isDay);
    const handleClickNavigation=()=>setNavigate(!navigate);
return(
    <div className="header">
        <div><h2>Calendar</h2></div>
        <div><button onClick={prev} className="secondary-button">Previous</button></div>
        <div className='current-month'><h2>{format(value,"LLLL yyyy")}</h2></div>
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