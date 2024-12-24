export default function Partial({ data, isDay, isAnimating, selected }) {
  const { title, timeframes } = data;

  const uppTitle = title.replace(/\s+/g, "");
  const lowTitle = title.toLowerCase().replace(/\s+/g, "");

  return (
    <section
      className={`dashboard__partial ${
        isDay ? `bg-Day${uppTitle}` : `bg-${uppTitle}`
      } ${lowTitle}  ${isDay ? `dashboard__partial--day` : ""} `}
    >
      <img
        src={`./images/icon-${lowTitle}.svg`}
        alt="life-icon"
        className="dashboard__partial__icon"
      />
      <article
        className={`dashboard__partial__info  ${
          isDay ? "bg-DayWhite" : "bg-DarkBlue"
        } `}
      >
        <div className="dashboard__partial__info--title">
          <h3
            className={`text-[18px] font-medium  ${
              isDay ? "text-DayGray" : ""
            }`}
          >
            {title}
          </h3>
          <svg
            className="ml-auto"
            width="21"
            height="5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div
          className={`dashboard__partial__info--content ${
            isAnimating ? "animation" : ""
          } `}
        >
          <h2
            className={`text-[32px] md:text-[36px] lg:text-[56px] font-light  ${
              isDay ? "text-DayGray" : ""
            }`}
          >
            {timeframes[selected].current} hrs
          </h2>
          <p
            className={`text-[15px] font-medium ${
              isDay ? "text-DayVeryLightBlue" : "text-VeryLightBlue"
            } ml-auto md:ml-0`}
          >
            Last Week - {timeframes[selected].previous}hrs
          </p>
        </div>
      </article>
    </section>
  );
}
