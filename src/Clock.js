export default function Clock({ color, time }) {
    return (
      <div className="time">

      <h1 style={{ color: color }}>
        {time}
      </h1>

      </div>
    );
  }
  
