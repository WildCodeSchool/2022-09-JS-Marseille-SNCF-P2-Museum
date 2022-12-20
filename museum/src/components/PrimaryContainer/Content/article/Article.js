import React from "react";
import "./Article.css";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Article({ title, artist, description, objectCollection }) {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
      mb={2}
    >
      <p className="departement">{objectCollection}</p>
      <Typography variant="h2article" gutterBottom>
        {title}
      </Typography>
      <Typography variant="bodyartist" gutterBottom>
        {artist}
      </Typography>
      <Typography variant="bodyarticle" gutterBottom>
        {description}
      </Typography>
    </Stack>
  );
}

export default Article;
