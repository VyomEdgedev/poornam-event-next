import React from "react";
import Image from "next/image";
import { Box, Grid} from '@mui/material';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
];

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
                    src="/Arrow.svg"
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
                    src="/Arrow.svg"
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
                    src="/Arrow.svg"
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
    <Box sx={{   p: 2 , position:"relative"}}>
      <Grid container spacing={1} justifyContent={{xs:"center", sm:"center", md:"center"}} >
        {/* Left Large Image */}
        <Grid item xs={12} sm={6} position={"relative"}>
          <Box
            sx={{
              position: 'relative',
              borderRadius: 3,
              overflow: 'hidden',
              height: '100%',
            }}
          >
            <Image
              src="/experience1.png"
              alt="Wedding Ritual"
              width={257}
              height={380}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Box>
        </Grid>

        {/* Right: Two stacked images */}
        <Grid item xs={12} sm={6} md={2}>
          <Grid container direction={{xs:"column", sm:"column", md:"coloum"}}  
          spacing={0}  sx={{ flexWrap: { xs: "nowrap" } }}>
            <Grid item>
              <Box
                sx={{
                  position:{xs:"initial", sm:"initial", md:"absolute"},
                  top: 40,
                  borderRadius: 3,
                  overflow: 'hidden',
                  
                }}
              >
                <Image
                     src="/experience3.jpg"
                  alt="Question Cards"
                  width={119}
                  height={100}
                  style={{
                    // width: '100%',
                    // height: 'auto',
                    objectFit: 'cover',
                    borderRadius: 5,
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                   position:{xs:"initial", sm:"initial", md:"absolute"},
                  top: 150,
                  borderRadius: 3,
                 
                  // overflow: 'hidden',
              
                }}
              >
                <Image
                    src="/experience2.jpg"
                  alt="Help Desk"
                  width={119}
                  height={130}
                  style={{
                    // width: '100%',
                    // height: 'auto',
                    objectFit: 'cover',
                    borderRadius: 5,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
        </div>
      </div>
    </section>
  );
};

export default Experience;
