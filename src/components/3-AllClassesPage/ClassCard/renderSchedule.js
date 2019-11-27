import React from "react";

const renderSchedule = classNumber => {
  switch (classNumber) {
    case "1":
      return (
        <div className="schedule-lists">
          <ul className="schedule-list-1">
            <li>Monday</li>
            <li>Wednesday</li>
            <li>Friday</li>
            <li>Weekends</li>
          </ul>
          <ul className="schedule-list-2">
            <li>6:30-8:30 PM</li>
            <li>6:30-8:30 PM</li>
            <li>6:30-8:30 PM</li>
            <li>5:30-9:30 PM</li>
          </ul>
        </div>
      );
    case "2":
      return (
        <div className="schedule-lists">
          <ul className="schedule-list-1">
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
          </ul>
          <ul className="schedule-list-2">
            <li>7:30-8:30 AM</li>
            <li>7:30-8:30 AM</li>
            <li>7:30-8:30 AM</li>
            <li>7:30-8:30 AM</li>
            <li>7:30-8:30 AM</li>
          </ul>
        </div>
      );
    case "3":
      return (
        <div className="schedule-lists">
          <ul className="schedule-list-1">
            <li>Thursday</li>
            <li>Friday</li>
            <li>Weekends</li>
          </ul>
          <ul className="schedule-list-2">
            <li>4:30-8:30 PM</li>
            <li>4:30-8:30 PM</li>
            <li>All day</li>
          </ul>
        </div>
      );
    case "4":
      return (
        <div className="schedule-lists">
          <ul className="schedule-list-1">
            <li>Monday</li>
            <li>Friday</li>
            <li>Weekends</li>
          </ul>
          <ul className="schedule-list-2">
            <li>6:30-8:30 PM</li>
            <li>6:30-8:30 PM</li>
            <li>5:30-9:30 PM</li>
          </ul>
        </div>
      );

    default:
      return <p>No Schedule</p>;
  }
};

export default renderSchedule;
