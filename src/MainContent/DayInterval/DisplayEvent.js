// // import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
// // import { faPen } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
// import { addHours, eachMinuteOfInterval, format, getHours, parseISO, subHours } from "date-fns";
// import moment from "moment/moment";
// // import { addHours, differenceInMinutes} from "date-fns";
// // import { parse } from "date-fns/esm";
// import React, { useState } from "react";
// import "./DisplayEvent.scss";
// // import ListAppointment from "../RightContent/ListAppointment";
// const DisplayEvent=(props)=>{
//     const event = props.event;
//     const myDay = props.day;
//     const filteredEvent=props.filteredEvent;
//     const setFilteredEvent = props.setFilteredEvent;
//     const [dispEvent , setDispEvent] = useState(false)
//     return(
//         <div>
//             {event.map((item,index)=>{
//                 // console.log(parseISO(item.eventDate).getDate() ,"item date")
//                 // console.log(myDay,"myDay");
//                 // console.log(myDay.getDate() ,"myDay getDAte")
//                 // console.log(item.startTimeHrMin.toString().slice(0,5) ,"item start time")
//                 // console.log(item.startTimeHrMin,"start time")
//                 // console.log(item.endTimeHrMin,"end time")
//                 // console.log(addHours(myDay,item.startTimeHrMin.toString().slice(0,5)),"start time full")
//                 const start =  moment (item.startTimeHrMin,'h:mm:ss a')
//                 const end =  moment (item.endTimeHrMin,'h:mm:ss a')
//                 const result = end.diff(start,'hours')
//                 const none = ""
//                 // console.log(result,"result");
//                 // // console.log(item.startTimeHrMin.toISOString() - item.endTimeHrMin.toISOString() , "difference");
//                 // console.log(myDay.getHours() ,"myDay getHour")
//                 // console.log(myDay.getMinutes() ,"myDay getMinutes")
//                 // console.log(item.startTimeHrMin.toString().slice(0,2) + result)
//                 // console.log(addHours(myDay,result),"myday added")
//                 // console.log(addHours(myDay,result).getHours(),"myday added value")
//                 // // {parseISO(item.eventDate).getDate() === myDay.getDate() && item.startTimeHrMin.toString().slice(0,2) == myDay.getHours() ?setDispEvent(true) : setDispEvent(false)}
//                 // console.log(dispEvent);
//                 // const filterEvent =  event.map((filteredItem)=>{
//                 //     if(parseISO(filtereditem.eventDate).getDate() === myDay.getDate() && (filtereditem.startTimeHrMin.toString().slice(0,2) == myDay.getHours()|| filtereditem.endTimeHrMin.toString().slice(0,2) == myDay.getHours())){
//                 //         return getHours
//                 //     }
//                 // })
//                 // console.log(filterEvent , "filter event")
//                 console.log(item.startTimeHrMin.slice(11,13),"start time");
//                 console.log(myDay.getHours(),"time line");
//                 return(
//                     <div className="event-single-day">
//                         {parseISO(item.eventDate).getDate() === myDay.getDate() && item.startTimeHrMin.toString().slice(0,2) == myDay.getHours() ? <div> {item.eventName} <div><span><FontAwesomeIcon icon={faTrashCan}/></span><span><FontAwesomeIcon icon={faPen}/></span></div> </div> : none}
//                         {parseISO(item.eventDate).getDate() === myDay.getDate() && item.endTimeHrMin.toString().slice(0,2) == myDay.getHours() && item.startTimeHrMin.toString().slice(0,2)!=subHours(myDay,1).getHours() && item.endTimeHrMin.toString()>=item.startTimeHrMin.toString() ? item.eventName : none}
//                         {/* {console.log(item.startTimeHrMin.toString() == myDay.getHours())}
//                         {console.log(item.endTimeHrMin.toString().slice(0,2)!=subHours(myDay,1).getHours())}
//                         {console.log(subHours(myDay,1).getHours(), "sub hour")} */}
//                         {/* {parseISO(item.eventDate).getDate() === myDay.getDate() && item.startTimeHrMin.toString().slice(0,2) == myDay.getHours() ? setFilteredEvent([myDay]) : none} */}
//                         {/* {parseISO(item.eventDate).getDate() === myDay.getDate() && item.endTimeHrMin.toString().slice(0,2) == myDay.getHours() ? setFilteredEvent([myDay]) : none} */}
//                         {/* {dispEvent}? {item.eventName} : undefined  */}
//                         {/* {parseISO(item.eventDate).getDate() === myDay.getDate() && item.startTimeHrMin.toString().slice(0,2) == myDay.getHours() ? setDispEvent(true) : none}
//                         // {parseISO(item.eventDate).getDate() === myDay.getDate() && item.endTimeHrMin.toString().slice(0,2) == item.startTimeHrMin.toString().slice(0,2) + result ? setDispEvent(true) : none}
//                         // {dispEvent ? item.eventName: undefined} */}
//                         {/* {item.eventName} */}
//                         {/* </div>
//                     <div className={dispEvent?"event-single-day":"no-event"}>
//                         {item.eventName} */}
//                     </div>
//                 )
//                 // if(parseISO(item.eventDate).getDate() === myDay.getDate() && item.startTimeHrMin.toString().slice(0,2) == myDay.getHours()){
//                 //     setDispEvent(true)
//                 //     if(parseISO(item.eventDate).getDate() === myDay.getDate() && item.endTimeHrMin.toString().slice(0,2) == addHours(myDay,result).getHours()){
//                 //         setDispEvent(true)
//                 //         // return{} (item.eventName)
//                 //     }
//                 //     if(myDay)
//                 // }
//             })}
//         </div>
//     );
// }
// export default DisplayEvent


// // {event.map((item)=>{
// //     if(item.eventDate == currentDate.toISOString().slice(0,10)){
// //         console.log(item.startTimeHrMin,"start")
// //         console.log(myDay,"myDay")
// //         if(item.startTimeHrMin >= myDay)
// //             return "heelo"
// //     }
// // })}

// /* <div className="display-event">
//             {event.map((item)=>{
//     // if(item.startTimeHrMin === time) {
//     //     compTime=item.eventName
//     // }
//     // const difference = differenceInMinutes(format(item.startTimeHrMin, "hh mm"), format(item.endTimeHrMin, "hh mm"));
//     console.log(item.startTimeHrMin.toString())
//     console.log(item.endTimeHrMin.toString())
//     console.log(myDay,"myday");
//     console.log(myDay.getHours(),"myday");
//     // const difference = differenceInMinutes(parseISO(item.startTimeHrMin.toString()), parseISO(item.endTimeHrMin.toString()));
//     const difference = differenceInMinutes(parseISO(item.endTimeHrMin),parseISO(item.startTimeHrMin))
//     console.log(difference.toString());
//     return(
//         <div>
//             {/* {item.startTimeHrMin >= time.getUTCHours()} ? {item.eventName} */
// //             {/* {console.log(item.startTimeHrMin.toString() >= time.getHours().toString() && item.startTimeHrMin.toString() <= addHours(time.getHours(),1).toString())} */}
// //             {console.log(item.startTimeHrMin.toString() >= myDay.getHours().toString() && item.startTimeHrMin.toString() <= addHours(myDay.getHours(),1).toString())}
// //             {console.log(myDay.getHours().toString() <= item.startTimeHrMin.toString(),"myday")}
// //             {/* {console.log(format(item.startTimeHrMin , "hh mm"))} */}
// //             {console.log(item.startTimeHrMin.toString())}
// //             {console.log(myDay.getHours().toString(),"myDay getHours")}
// //             {console.log(item.endTimeHrMin.toString())}
// //             {console.log(myDay)}
// //             {console.log(addHours(myDay,1))}
// //             {/* {console.log(time.getHours().getMinutes())} */}
// //             {/* {time.getHours().toString() <= item.startTimeHrMin.toString() && item.startTimeHrMin.toString() >= addHours(time.getHours(),1).toString() && currentDate.toISOString().slice(0,10) === item.eventDate? item.eventName : undefined} */}
// //             {myDay.getHours().toString() <= item.startTimeHrMin.toString() && addHours(myDay.getHours(),1).toString() >= item.startTimeHrMin.toString() && currentDate.toISOString().slice(0,10) === item.eventDate ? item.eventName : undefined}
// //             {/* (myDay.getHours().toString() <= item.endTimeHrMin.toString() && item.endTimeHrMin.toString() <= addHours(myDay.getHours(),1).toString() && currentDate.toISOString().slice(0,10) === item.eventDate? setDisplayEvent(true) : setDisplayEvent(false))} */}
// //             {/* {time.getHours().toString().includes(item.startTimeHrMin.toString())&& currentDate.toISOString().slice(0,10) === item.eventDate ? item.eventName : undefined} */}
// //             {/* {item.endTimeHrMin.toString() >= time.getHours().toString() && item.endTimeHrMin.toString() <= addHours(time.getHours(),1).toString() && currentDate.toISOString().slice(0,10) === item.eventDate? setDisplayEvent(true) : undefined} */}
// //             {/* {console.log(currentDate.toISOString().slice(0,10) === item.eventDate)} */}
// //             {/* {console.log(currentDate.toISOString().slice(0,10))} */}
// //             {/* {console.log(item.eventDate)} */}
// //             {/* {displayEvent && item.eventName }
// //             {console.log(displayEvent && item.eventName )} */}
// //             {/* {item.startTimeHrMin.toString() >= time.getHours().toString() ? setDisplayEvent(true):setDisplayEvent(false)}
// //             <div className={setDisplayEvent ? "disp":"none"}>
// //         </div> */}
// //         {/* {displayEvent && item.eventName} */}
// //         </div>
// //     )
// // })}
//         // </div> */}