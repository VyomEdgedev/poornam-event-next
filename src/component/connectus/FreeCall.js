import ConnectModal from "@/common-component/modal/ConnectModal";
import { Grid, Typography, Button, Container, Box } from "@mui/material";
import React, { useState } from "react";

const handleSubmit = (e) => {};

function FreeCall() {
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {
    setOpen(true);
  };
  return (
    <Container>
      <Grid
      py={4}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
        // display="flex"
        // justifyItems="center"
        // justifyContent="space-evenly"
        // padding={{ xs: "20px", sm: "30px", md: "40px" }}
      >
        <ConnectModal open={open} setOpen={setOpen} />
        <Grid size={{ xs: 12, sm: 9, md: 9 }} textAlign={{xs:"center",sm:"start"} }>
          <Typography
          component="h3"
            sx={{
              fontFamily: "Gloock,Sans-serif",
            fontWeight:"400"
            }}
          >
            {`Just Want to Chat Wedding Vibes Over Coffee?`}
          </Typography>
          <Typography component="p"
            sx={{
               fontFamily: "Akatab,Sans-serif",
            fontWeight:"400"
            }}>
            {`We love meeting new couples (and yes, we'll bring the Pinterest boards).`}</Typography>
          <Button
            data-testid="notify-button"
            type="submit"
            margin="5px"
            onClick={handleSubmit}
            sx={{
              fontFamily: "Akatab,Sans-serif",
              padding: "50px",
              color: "white",
              bgcolor: "#DAA412",
              padding: "5px 10px",
              borderRadius: "15px",
              marginTop:"20px",
                fontWeight:"500"
            }}
          >
            {`Schedule a Free 15-min Vibe Check Call`}
          </Button>
        </Grid>
        <Grid size={{ xs: 12, sm: 3, md: 3 }} textAlign={{xs:"center",sm:"end"} }>
          <Box
            component="img"
            src="/Heart.svg"
            alt="Sample"
            alignItems="end"
            padding="10px"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
export default FreeCall;
