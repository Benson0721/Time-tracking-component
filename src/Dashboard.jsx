import { useState } from "react";
import datas from "../data.json";
import Partial from "./Partial";

export default function Dashboard({ isDay }) {
  const [selected, setSelected] = useState("daily");

  const [isAnimating, setIsAnimating] = useState(false);

  const handleDateClick = (date) => {
    setSelected(date);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1050);
  };

  return (
    <main className="dashboard py-10 md:px-4">
      <section
        className={`dashboard__profile ${
          isDay ? "bg-DayWhite" : "bg-DarkBlue"
        } ${isDay ? "dashboard__profile--day" : ""} person`}
      >
        <article
          className={`dashboard__user ${isDay ? "bg-DayBlue" : "bg-Blue"}`}
        >
          <figure className="dashboard__headshot">
            <a href="https://github.com/Benson0721">
              <img src="./images/bird.jpg" alt="My handsome face" />
            </a>
          </figure>
          <header className="dashboard__name">
            <p
              className={`text-[15px] font-medium ${
                isDay ? "text-DayVeryLightBlue" : "text-VeryLightBlue"
              }`}
            >
              Report for
            </p>
            <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-light text-DayWhite">
              Mpass
            </h3>
          </header>
        </article>
        <nav
          className={`dashboard__date ${isDay ? "bg-DayWhite" : "bg-DarkBlue"}`}
        >
          <input
            type="radio"
            className="hidden"
            id="daily"
            value="daily"
            name="date"
            onClick={() => handleDateClick("daily")}
          />
          <label
            htmlFor="daily"
            className={`dashboard__date__option ${
              isDay ? "text-DayGray" : "text-LightBlue"
            } ${isDay ? "dashboard__date__option--day" : ""}`}
          >
            Daily
          </label>
          <input
            type="radio"
            className="hidden"
            id="weekly"
            value="weekly"
            onClick={() => handleDateClick("weekly")}
            name="date"
          />
          <label
            htmlFor="weekly"
            className={`dashboard__date__option ${
              isDay ? "text-DayGray" : "text-LightBlue"
            } ${isDay ? "dashboard__date__option--day" : ""}`}
          >
            Weekly
          </label>
          <input
            type="radio"
            className="hidden"
            id="monthly"
            value="monthly"
            onClick={() => handleDateClick("monthly")}
            name="date"
          />
          <label
            htmlFor="monthly"
            className={`dashboard__date__option ${
              isDay ? "text-DayGray" : "text-LightBlue"
            } ${isDay ? "dashboard__date__option--day" : ""}`}
          >
            Monthly
          </label>
        </nav>
      </section>
      {datas.map((data, idx) => (
        <Partial
          data={data}
          key={idx}
          isDay={isDay}
          isAnimating={isAnimating}
          selected={selected}
        />
      ))}
    </main>
  );
}
