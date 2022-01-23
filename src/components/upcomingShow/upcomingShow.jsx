import React from 'react';
import ShowCard from './showCard';
import img7 from '../../Assets/Img7.png';
import img5 from '../../Assets/Img5.png';
import img4 from '../../Assets/Img4.png';
import img6 from '../../Assets/Img6.png';

const userDetails = [
    {
        img:img7,
        name:"Bennyl Dayal",
        genre:"Folk"
    },
    {
        img:img5,
        name:"Vijay Yesudas",
        genre:"Bollywood"
    },
    {
        img:img4,
        name:"Andrea Jeremiah",
        genre:"Folk"
    },
    {
        img:img6,
        name:"Shilpa Rao",
        genre:"Folk"
    }
]

const UpcomingShow = () => {
  return (
        <div className='upcomingShowWrapper'>
            <div className="upcomingShowHeader">
                <h1>Upcoming Show</h1>
                <p>View All</p>
            </div>
            <hr className='upcomingShowHr'/>
            
            <div className="showContactFlex">
                <ShowCard userDetails={userDetails[0]}/>
                <ShowCard userDetails={userDetails[1]}/>
                <ShowCard userDetails={userDetails[2]}/>
                <ShowCard userDetails={userDetails[3]}/>
            </div>
        </div>
    )
};

export default UpcomingShow;
