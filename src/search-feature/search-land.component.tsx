import React, { useEffect, useState } from "react";
import { HttpResponse } from "./models/response.http.model";
import { StarShip } from "./models/starship.model";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { ItemAutocomplete } from "./models/autocomplete-item.model";
import { StarshipCardItem } from "./components/search-list-item.component";
import { SpinnerComponent } from "../shared/spinner.component";

export function SearchLand() {
  const [ searchText, setSearchResult ] = useState('');
  const [ data, setData ] = useState<StarShip[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);
  const { searchItems } = useStarShipsAutoComplete();
  const renderSpinner = () => <div className="absolute top-[calc(40%_+_50px)] left-[calc(50%_-_50px)]">
    <SpinnerComponent />
  </div>

  const autoCompleteSelected = (res: ItemAutocomplete) => {
    setSearchResult(res.name);
  } 
  const autoCompleteSearch = (res: string) => {
    setSearchResult(res);
  } 
  const autoCompleteClear = () => {
    setData([]);
  } 
  const startSearch = async () => {
    setLoading(true);
    const items = await searchStartShips(searchText)
    setData(items); 
    setLoading(false);
  }

  return <div className="bg-gray-200 p-16 h-screen">
    <div className="bg-white p-16 rounded-2xl relative">
      <div className="flex justify-between items-center">
        <div className="flex-1 pr-4" >
          <ReactSearchAutocomplete
            items={searchItems}
            onSelect={autoCompleteSelected}
            onSearch={autoCompleteSearch}
            onClear={autoCompleteClear}
            autoFocus />
        </div>
        <div>
          <button 
            disabled={!searchText.length || !!loading} 
            className="px-4 py-2 text-white bg-black rounded-full disabled:opacity-25"
            onClick={startSearch}
            >
              SEARCH
            </button>
        </div>
      </div>

      <div >
        {loading ? renderSpinner() :
          data.map((item, idx) => <StarshipCardItem model={item} key={idx} />)}
      </div>

    </div>
  </div>;
}

function useStarShipsAutoComplete(): { searchItems: ItemAutocomplete[] } {

  const url = `https://swapi.dev/api/starships`;
  const [searchItems, setSearchItems] = useState<ItemAutocomplete[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(((res: HttpResponse) => {
        setSearchItems(getAutocompleteItems(res.results));
      }))
      .catch(() => setSearchItems([]))
  }, [url]);
  return { searchItems };
}

async function searchStartShips(search=''): Promise<StarShip[]>{
  const url = `https://swapi.dev/api/starships?search=${search?.length ? search : null}`;
  const raw = await fetch(url);
  const response: HttpResponse = await raw.json();
  return response.results;
}

function getAutocompleteItems(result: StarShip[]): ItemAutocomplete[] {
  return result.map((r, index) => ({ id: index, name: r.name }));
}
