import React from "react";
import { Grid, Card, Row, Text } from "@nextui-org/react";
import Image from "next/image";

function Games({ data }) {

  const handleGo = function (url) {
    window.location.href = url;
  }


  return (
    <div className="flex flex-col gap-3 p-2 my-14 md:grid-cols-4 md:grid bg-background">
      {data.map((game, index) =>
        game !== {} ? (
          <div className="flex flex-col h-[400px] justify-between px-2 gap-2" id={index}>
            <div>
              <Image
                src={game.thumbnail}
                width={350}
                height={150}
                alt={game.title}
              />

              <h4 className="text-[12px] font-bold text-title-red uppercase mt-2">{game.title}</h4>
            </div>
            <div className="flex flex-col justify-center gap-3 ">
              <div className="h-[150px]">
                <p className="text-md text-title-white">{game.short_description}</p>
              </div>

              <button
                className="w-1/2 px-4 py-2 text-sm font-bold text-white bg-red-button"
                onClick={() => handleGo(game.game_url)}
              >
                Play Now!
              </button>
            </div>


          </div>
        ) : null
      )}
    </div>
  );
}

export default Games;
