type Beer = {
  id: number | null;
  user_id: string | null;
  name: string | null;
  brewery: string | null;
  percentage: string | null;
  crops: string | null;
  malts: string | null;
  hops: string | null;
  opinion: string | null;
  source: string | null;
  info: string | null;
};

type Pic = {
  path: string;
  url: string;
  newPic: boolean;
  base64?: string;
};

const newBeer: Beer = {
  id: null,
  user_id: null,
  name: null,
  brewery: null,
  percentage: null,
  crops: null,
  malts: null,
  hops: null,
  opinion: null,
  source: null,
  info: null,
};

const beerFilter = (obj: Beer, term: string): boolean => {
  return Object.values(obj)
    .slice(2, 8)
    .map((v: any) => {
      return v ? v.toLowerCase().includes(term.toLowerCase()) : false;
    })
    .some((bool) => bool === true);
};

const filterBeers = (data: Beer[], term: string) => {
  return data.filter((o) => beerFilter(o, term));
};

export { Beer, Pic, newBeer, filterBeers };
