import ConnectModal from "@/common-component/modal/ConnectModal";
import { Grid, Typography, Button } from "@mui/material";
import React, { useState } from "react";

const handleSubmit = (e) => {};

function FreeCall() {
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {
    setOpen(true);
  };
  return (
    <Grid
      container
      display="flex"
      justifyItems="center"
      justifyContent="space-evenly"
      padding={{ xs: "20px", sm: "30px", md: "40px" }}
    >
      <ConnectModal open={open} setOpen={setOpen} />
      <Grid lineHeight="60px">
        <Typography
          sx={{
            fontFamily: "Gloock,Sans-serif",
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
          }}
        >
          {`Just Want to Chat Wedding Vibes Over Coffee?`}
        </Typography>
        <Typography>{`We love meeting new couples (and yes, we'll bring the Pinterest boards).`}</Typography>
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
          }}
        >
          {`Schedule a Free 15-min Vibe Check Call`}
        </Button>
      </Grid>
      <Grid
        component="img"
        src="/Heart.svg"
        alt="Sample"
        alignItems="center"
        padding="10px"
      />
    </Grid>
  );
}
export default FreeCall;
