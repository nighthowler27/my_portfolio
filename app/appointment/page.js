import styles from "./page.module.css";


const Appointment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.appointment}>
        <form action="">
          <div className={styles.formWrapper}>
            <div className={styles.leftForm}>
              <h1>SET A MEETING APPOINTMENT</h1>

                     
            </div>
            <div className={styles.rightForm}>

              <h2>Choose a date and time</h2>
              

              <div className="dateTIme">
                  

              </div> 
              
              <h2>Preferred Platform</h2>

              <div className="meetingSelector">
     
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
