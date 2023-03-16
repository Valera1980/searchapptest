import React, { FC }  from 'react';
import { StarShip } from '../models/starship.model';
import { generateLogos, generatePicture } from '../utils/picture-generator.util';

interface Params {
   model: StarShip
}

const StarshipCardItem: FC<Params>  = ( {model}: Params) => {
   return (
    <div className='flex items-center  p-2 justify-between'>
      <div className='flex left-4'>
       <img className='h-20 w-20' src={generatePicture()} alt='starshipImage'></img>
       <div className='flex flex-col pl-4 justify-center'>
         <h3 className='text-lg font-bold'>{model.name}</h3>
         <div>
            <span>{model.manufacturer}</span>
            <span className='pl-8'>Crew: {model.crew}</span>
         </div>
      </div>
      </div>
    
      <img className='h-4 w-4' src={generateLogos()} alt='logo'></img>
    </div>
   )
}

export {StarshipCardItem}