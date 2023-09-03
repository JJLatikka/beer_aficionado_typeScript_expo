import { searchUrl } from "./urlAndKey";

type Coordinate = {
  lat: number;
  lng: number;
};

type Place = {
  id: number | null;
  user_id: string | null;
  name: string | null;
  address: string | null;
  coordinate: Coordinate | null;
};

type Region = {
  latitude: number | null;
  longitude: number | null;
  latitudeDelta: number;
  longitudeDelta: number;
};

const newPlace: Place = {
  id: null,
  user_id: null,
  name: null,
  address: null,
  coordinate: null,
};

const emptyRegion: Region = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0075,
  longitudeDelta: 0.005,
};

const setCoords = async (
  place: Place,
  setPlace: React.Dispatch<React.SetStateAction<Place>>
) => {
  let { lat, lng } = await fetch(`${searchUrl}${place.address}`)
    .then((b) => b.json())
    .then((o) => o.results[0].locations[0].latLng)
    .catch((e) => {
      console.error(e);
    });
  let c: Coordinate = { lat: lat, lng: lng };
  setPlace({ ...place, coordinate: c });
};

const placeFilter = (obj: Place, term: string): boolean => {
  return Object.values(obj)
    .slice(2, 4)
    .map((v: any) => {
      return v ? v.toLowerCase().includes(term.toLowerCase()) : false;
    })
    .some((bool) => bool === true);
};

const filterPlaces = (data: Place[], term: string) => {
  return data.filter((o) => placeFilter(o, term));
};

export { Place, newPlace, emptyRegion, setCoords, filterPlaces };
