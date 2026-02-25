import React, { useState } from "react";
import { motion } from "framer-motion";

// Fotos por mes (0 = Enero, 11 = Diciembre)
const photosByMonth = {
  0: ["enero1.jpg", "enero2.jpg"],
  1: ["feb1.jpg", "feb2.jpg"],
  2: ["marzo1.jpg", "marzo2.jpg"],
  3: ["abril1.jpg", "abril2.jpg"],
  4: ["mayo1.jpg", "mayo2.jpg"],
  5: ["junio1.jpg", "junio2.jpg"],
  6: ["julio1.jpg", "julio2.jpg"],
  7: ["agosto1.jpg", "agosto2.jpg"],
  8: ["sept1.jpg", "sept2.jpg"],
  9: ["oct1.jpg", "oct2.jpg"],
  10: ["nov1.jpg", "nov2.jpg"],
  11: ["dic1.jpg", "dic2.jpg"],
};

export default function MonthlyCalendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Genera los días del mes
  const getDaysArray = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const days = getDaysArray(currentMonth, currentYear);
  const monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  const weekDays = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];

  const handleDayClick = (date) => {
    const photos = photosByMonth[date.getMonth()];
    if (!photos) return;
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    setSelectedPhoto({ date, src: randomPhoto });
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedPhoto(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedPhoto(null);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>{monthNames[currentMonth]} {currentYear}</h2>
      <button onClick={prevMonth}>{"<"}</button>
      <button onClick={nextMonth} style={{ marginLeft: "10px" }}>{">"}</button>

      <table style={{ margin: "20px auto", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {weekDays.map((wd) => (
              <th key={wd} style={{ padding: "5px 10px" }}>{wd}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(() => {
            const weeks = [];
            let week = [];
            const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

            // Rellenar espacios iniciales
            for (let i = 0; i < firstDayIndex; i++) {
              week.push(<td key={"empty-start-" + i}></td>);
            }

            days.forEach((day, index) => {
              const isToday =
                day.getDate() === today.getDate() &&
                day.getMonth() === today.getMonth() &&
                day.getFullYear() === today.getFullYear();

              week.push(
                <td
                  key={day.getDate()}
                  onClick={() => handleDayClick(day)}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    cursor: "pointer",
                    width: "40px",
                    height: "40px",
                    borderRadius: isToday ? "50%" : "0",
                    borderColor: isToday ? "#4f46e5" : "#ccc",
                    fontWeight: isToday ? "bold" : "normal",
                  }}
                >
                  {day.getDate()}
                </td>
              );

              if ((week.length) % 7 === 0 || index === days.length - 1) {
                weeks.push(<tr key={index}>{week}</tr>);
                week = [];
              }
            });
            return weeks;
          })()}
        </tbody>
      </table>

      {selectedPhoto && (
        <motion.div
          key={selectedPhoto.src}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "20px" }}
        >
          <img
            src={selectedPhoto.src}
            alt={`Día ${selectedPhoto.date.getDate()}`}
            style={{ width: "300px", borderRadius: "10px" }}
          />
        </motion.div>
      )}
    </div>
  );
}