import React from "react";
import { Grid, Card, Row, Text } from "@nextui-org/react";

function Games({ data }) {

  const handleGo = function(url) {
    window.location.href = url;
  }


  return (
    <Grid.Container gap={2} justify="center">
      {data.map((game, index) =>
        game !== {} ? (
          <Grid xs={12} md={6} key={index}>
            <Card hoverable clickable onClick={() => handleGo(game.game_url)}>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  objectFit="cover"
                  src={game.thumbnail}
                  width="100%"
                  height={140}
                  alt={game.title}
                />
              </Card.Body>
              <Card.Footer justify="flex-start">
                <Row wrap="wrap" justify="space-between">
                  <Text b>{game.title}</Text>
                  <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                    {game.platform}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ) : null
      )}
    </Grid.Container>
  );
}

export default Games;
