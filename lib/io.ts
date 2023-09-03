import { supa } from "./supa";
import { Beer, Pic, filterBeers } from "./beer";
import { Place, filterPlaces } from "./place";
import { LinkType, filterLinks } from "./link";

const getBeers = async (
  uId: string | null,
  search: boolean,
  term: string,
  setBeers: React.Dispatch<React.SetStateAction<Beer[]>>
) => {
  const { data } = await supa.from("beers").select().eq("user_id", uId);
  if (data) {
    search && term
      ? setBeers(filterBeers(<Beer[]>data, term))
      : setBeers(<Beer[]>data);
  }
};

const addBeer = async (beer: any) => {
  delete beer.id;
  await supa.from("beers").insert(beer);
};

const updateBeer = async (id: number, beer: any) => {
  delete beer.id;
  await supa.from("beers").update(beer).eq("id", id);
};

const delBeer = async (
  id: number | null,
  uId: string | null,
  setBeers: React.Dispatch<React.SetStateAction<Beer[]>>
) => {
  await supa.from("beers").delete().eq("id", id);
  getBeers(uId, false, "", setBeers);
  delPics(uId, id);
};

const getPics = async (
  uId: string,
  id: number,
  setPics: React.Dispatch<React.SetStateAction<Pic[]>>
) => {
  const { data: beerPicEntries } = await supa.storage
    .from("beer_pics")
    .list(`${uId}/${id}`);
  const paths =
    beerPicEntries && beerPicEntries.map((e) => `${uId}/${id}/${e.name}`);
  if (paths) {
    const { data: signedUrls } = await supa.storage
      .from("beer_pics")
      .createSignedUrls(paths, 60, {
        download: true,
      });
    if (signedUrls) {
      const pics = signedUrls.map(
        (sUrl) => <Pic>{ path: sUrl.path, url: sUrl.signedUrl, newPic: false }
      );
      setPics(pics);
    }
  }
};

const addPic = async (path: string, buff: any) => {
  await supa.storage.from("beer_pics").upload(path, buff, {
    contentType: "image/png",
  });
};

const addPics = (arr: any[][]) => {
  arr.forEach((arr) => addPic(arr[0], arr[1]));
};

const delPic = async (path: string) => {
  await supa.storage.from("beer_pics").remove([path]);
};

const delPics = async (uId: string | null, id: number | null) => {
  const { data: list } = await supa.storage
    .from("beer_pics")
    .list(`${uId}/${id}`);
  if (list) {
    const picNames = list.map((pic) => `${uId}/${id}/${pic.name}`);
    await supa.storage.from("beer_pics").remove(picNames);
  }
};

const getPlaces = async (
  uId: string | null,
  search: boolean,
  term: string,
  setPlaces: React.Dispatch<React.SetStateAction<Place[]>>
) => {
  const { data } = await supa.from("places").select().eq("user_id", uId);
  if (data) {
    search && term
      ? setPlaces(filterPlaces(<Place[]>data, term))
      : setPlaces(<Place[]>data);
  }
};

const addPlace = async (place: any) => {
  delete place.id;
  await supa.from("places").insert(place);
};

const delPlace = async (
  id: number | null,
  uId: string | null,
  setPlaces: React.Dispatch<React.SetStateAction<Place[]>>
) => {
  await supa.from("places").delete().eq("id", id);
  getPlaces(uId, false, "", setPlaces);
};

const getLinks = async (
  uId: string | null,
  search: boolean,
  term: string,
  setLinks: React.Dispatch<React.SetStateAction<LinkType[]>>
) => {
  const { data } = await supa.from("links").select().eq("user_id", uId);
  if (data) {
    search && term
      ? setLinks(filterLinks(<LinkType[]>data, term))
      : setLinks(<LinkType[]>data);
  }
};

const addLink = async (link: any) => {
  delete link.id;
  await supa.from("links").insert(link);
};

const delLink = async (
  id: number | null,
  uId: string | null,
  setLinks: React.Dispatch<React.SetStateAction<LinkType[]>>
) => {
  await supa.from("links").delete().eq("id", id);
  getLinks(uId, false, "", setLinks);
};

export {
  getBeers,
  addBeer,
  updateBeer,
  delBeer,
  getPics,
  addPics,
  delPic,
  delPics,
  getPlaces,
  addPlace,
  delPlace,
  getLinks,
  addLink,
  delLink,
};
