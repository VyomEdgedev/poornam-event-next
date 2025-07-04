import '@/styles/style.css'
const Experience = () => {
  return (
   <section className="poornam-section">
        <div className="container">
            <div className="content-wrapper">
                <div className="left-content">
                    <h1 className="title">The Poornam Experience</h1>
                    <p className="subtitle">
                        We plan weddings the way your dadi tells stories- with love, 
                        drama, and perfect timing.
                    </p>
                    
                    <div className="process-section">
                        <h3 className="process-title">Our Process</h3>
                        <div className="process-steps">
                            <div className="process-step">
                                <div className="step-content">
                                    <div className="step-title">Vision</div>
                                    <div className="step-subtitle">Discovery</div>
                                </div>
                            </div>
                            <div className="step-arrow"><img src="./Arrow.png"  /></div>
                            <div className="process-step">
                                <div className="step-content">
                                    <div className="step-title">Planning &</div>
                                    <div className="step-subtitle">Budgeting</div>
                                </div>
                            </div>
                            <div className="step-arrow"><img src="./Arrow.png"  /></div>
                            <div className="process-step">
                                <div className="step-content">
                                    <div className="step-title">Design &</div>
                                    <div className="step-subtitle">Moodboarding</div>
                                </div>
                            </div>
                            <div className="step-arrow"><img src="./Arrow.png"  /></div>
                            <div className="process-step">
                                <div className="step-content">
                                    <div className="step-title">Final Execution</div>
                                    <div className="step-subtitle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="right-content">
                    <div className="main-image">
                        <img src= "./experience1.png" alt="Traditional Indian Wedding Ceremony" />
                    </div>
                    
                    <div className="side-image"  >
                        <div className="side-image" id="side-image-1" >
                            <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Wedding Decorations" />
                        </div>
                        <div className="side-image" id="side-image-2">
                            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Wedding Planning" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience