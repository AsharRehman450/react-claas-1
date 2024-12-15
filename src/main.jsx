import React from "react";
import ReactDOM from "react-dom/client";

const rootDiv = document.getElementById("root");

const Documentary = () => {
  return (
    <div>
      <img
        width={800}
        src="public/goal_ronaldo-cropped_rnl4ch99rrjs1vbqe3nqejh9p.jpg"
        alt="Cristiano Ronaldo"
      />

      <h1>Cristiano Ronaldo: The Legend</h1>
      
      <p>
        Cristiano Ronaldo, one of the most renowned football players in the world, has made an indelible mark on the game. Born on February 5, 1985, in Madeira, Portugal, Ronaldo's career began at a young age, quickly rising through the ranks of Portuguese football to become a global sensation.
      </p>

      <p>
        Known for his incredible athleticism, speed, and goal-scoring ability, Ronaldo first gained attention during his time at Sporting CP before signing with Manchester United in 2003. It was at Manchester United that he transformed into one of the best players in the world, winning multiple titles, including the Premier League, FA Cup, and the UEFA Champions League.
      </p>

      <p>
        In 2009, Ronaldo made a record-breaking transfer to Real Madrid, where his career soared to new heights. His time at Madrid saw him break numerous records, including becoming the club's all-time top scorer and winning four Ballon d'Or awards. His competitive spirit and relentless pursuit of excellence set him apart from his peers.
      </p>

      <p>
        After years of success with Real Madrid, Ronaldo moved to Juventus in 2018, where he continued to demonstrate his prowess on the field. His leadership, discipline, and hunger for victory inspired countless fans and young players worldwide. Ronaldo's time in Italy only solidified his status as one of the greatest footballers of all time.
      </p>

      <p>
        Beyond his club successes, Ronaldo has been a key figure for Portugal, leading his national team to victory in the 2016 UEFA European Championship and the 2019 UEFA Nations League. Ronaldo’s legacy as a football icon continues to grow, cementing his place in the history books as one of the greatest to ever play the sport.
      </p>
    </div>
  );
};

ReactDOM.createRoot(rootDiv).render(<Documentary />);
