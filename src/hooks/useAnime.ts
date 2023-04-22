import { ANIME_URI } from "@/utils/constants";

export default function useAnime() {
  let API = {
    recent: ANIME_URI + "/recent-episodes",
    popular: ANIME_URI + "/top-airing",
    info: ANIME_URI + "/info",
    episode: ANIME_URI + "/watch",
    server: ANIME_URI + "/servers",
  };

  async function getRecent() {
    const data = await fetch(API.recent);
    return data.json();
  }

  async function getPopular() {
    const data = await fetch(API.popular);
    return data.json();
  }

  async function getInfo(id: string) {
    const data = await fetch(API.info + "/" + id);
    return data.json();
  }

  async function getEpisode(id: string, serverName: string = "gogocdn") {
    const data = await fetch(API.episode + "/" + id + "?server=" + serverName);
    return data.json();
  }

  async function getServers(id: string) {
    const data = await fetch(API.server + "/" + id);
    return data.json();
  }

  return { getRecent, getPopular, getInfo, getEpisode, getServers };
}