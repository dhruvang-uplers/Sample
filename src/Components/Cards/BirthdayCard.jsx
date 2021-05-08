import React from "react";
import "./BirthdayCard.css";
export default function BirthdayCard({ firstName, Address, email, EventDate }) {
  return (
    <>
      <div id='outerShell'>
        <img id='stars' src='https://github.com/RebekahAmerson/invitation-Mockup/blob/master/Stars.png?raw=true' />
        <img id='unicorn' src='https://github.com/RebekahAmerson/invitation-Mockup/blob/master/Unicorn.png?raw=true' />
        <div id='infoBox'>
          <ul>
            <li id='top' class='whiteText'>
              Join us to celebrate the birthday of
            </li>
            <li id='name'>{firstName}</li>
            <li class='whiteText'>10:00 am</li>
            <li id='date'>{EventDate}</li>
            <li id='place'>{Address}</li>
            <li class='whiteText'>823 S Broadway</li>
            <li class='whiteText'>Happy Town, USA</li>
            <li class='whiteText padding'>RSVP to save your slice of cake.</li>
            <li class='whiteText padding'>For more information, call 867-5309</li>
          </ul>
        </div>
      </div>
    </>
  );
}
