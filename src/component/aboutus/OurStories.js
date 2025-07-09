
import { useState } from "react";
const Story = [
  {
    "heading": "Our Story “From One Wedding... to a Thousand Memories”",
    "paragraphs": [
      "Poornam wasn’t born in a boardroom. It began in the middle of marigolds, mehendi music, and the madness of our founder’s cousin’s wedding. what started as a one-time rescue mission in Indore turned into a lifelong passion -turning shaadis into art, chaos intochoreography, and budgets into beauty.",
      "Today, we’re a team of planners, designers, crisis-managers, and dream-weavers who believe that every wedding is “once-in-a-lifetime,”not “one-size-fits-all.”"
    ]
  }
];

export default function OurStories() {
  return (
    <div style={{ padding: "3rem",}}>
      {Story.map((story, index) => (
        <div key={index} style={{ marginBottom: "0.5rem" }}>
          <h2 style={{ color: "black" ,  fontSize: "clamp(1.5rem, 5vw, 2rem)",
              fontFamily: "Gloock,serif", fontWeight:400 }}>{story.heading}</h2>
          {story.paragraphs.map((p, i) => (
            <p key={i} style={{ lineHeight: 1.2  , fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
              fontWeight: 400,
              fontFamily: "Akatab,Sans-serif",} }>{p}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
