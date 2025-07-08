
import { useEffect, useState } from "react";

export default function OurStories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/OurStory.json") // ✅ Must match filename in public/
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div style={{ padding: "3rem", fontFamily: "Gloock", fontSize:"1.2rem"}}>
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: "0.5rem" }}>
          <h2 style={{ color: "black" }}>{item.heading}</h2>
          {item.paragraphs.map((p, i) => (
            <p key={i} style={{ lineHeight: 1.2 }}>{p}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
