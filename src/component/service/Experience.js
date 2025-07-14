import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="poornam-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="left-content">
            <h1 className="title">{`The Poornam Experience`}</h1>
            <p className="subtitle">
              {` We plan weddings the way your dadi tells stories- with love, 
              drama, and perfect timing.`}
            </p>

            <div className="process-section">
              <h3 className="process-title">{`Our Process`}</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-content">
                    <div className="step-title">{`Vision`}</div>
                    <div className="step-subtitle">{`Discovery`}</div>
                  </div>
                </div>
                <div className="step-arrow">
                  <Image
                    src="/Arrow.png"
                    alt="Arrow"
                    width={30}
                    height={20}
                  />
                </div>
                <div className="process-step">
                  <div className="step-content">
                    <div className="step-title">{`Planning &`}</div>
                    <div className="step-subtitle">{`Budgeting`}</div>
                  </div>
                </div>
                <div className="step-arrow">
                  <Image
                    src="/Arrow.png"
                    alt="Arrow"
                    width={30}
                    height={20}
                  />
                </div>
                <div className="process-step">
                  <div className="step-content">
                    <div className="step-title">{`Design &`}</div>
                    <div className="step-subtitle">{`Moodboarding`}</div>
                  </div>
                </div>
                <div className="step-arrow">
                  <Image
                    src="/Arrow.png"
                    alt="Arrow"
                    width={30}
                    height={20}
                  />
                </div>
                <div className="process-step">
                  <div className="step-content">
                    <div className="step-title">{`Final Execution`}</div>
                    <div className="step-subtitle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-content">
            <div className="main-image">
              <Image
                src="/experience1.png"
                alt="Traditional Indian Wedding Ceremony"
                width={600}
                height={400}
                layout="responsive"
              />
            </div>

            <div className="side-image">
              <div className="side-image" id="side-image-1">
                <Image
                  src="/experience2.jpg"
                  alt="Wedding Decorations"
                  width={250}
                  height={160}
                />
              </div>
              <div className="side-image" id="side-image-2">
                <Image
                  src="/experience3.jpg"
                  alt="Wedding Planning"
                  width={250}
                  height={160}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
