import { StoryData } from "@/data";
import Image from "next/image";
import React from "react";

interface MediaProps {
  mediaSources: StoryData[];
  activeSourceId: number;
}


export default function Media({ mediaSources, activeSourceId }: MediaProps) {
  return (
    <div>
      {mediaSources.map((media, idx) => {
        if (media.type == "image") {
          return (
            <Image draggable={false} key={idx} alt="A story" src={media.src} height={media.height} width={media.width} style={activeSourceId != idx ? {display: "none"} : {}}/>
          );
        } else {
          // TODO
        }
      })}
    </div>
  );
}
