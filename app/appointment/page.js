import Calendar from "@/components/calendar/calendar";
import styles from "./page.module.css";
import TimeSelector from "@/components/time/time";
import InputTextFields from "@/components/inputField/input";
import MeetingType from "@/components/meetingPurpose/meetingType";

const Appointment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.appointment}>
        <form action="">
          <div className={styles.formWrapper}>
            <div className={styles.leftForm}>
              <h1>SET A MEETING APPOINTMENT</h1>

                    <InputTextFields />
                
            </div>
            <div className={styles.rightForm}>

              <h2>Choose a date and time</h2>
              

              <div className="dateTIme">
                    <Calendar />
                
                    <TimeSelector />

              </div> 
              
              <h2>Preferred Platform</h2>

              <div className="meetingSelector">
                <MeetingType />
              </div>
             


              <button>Book</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
