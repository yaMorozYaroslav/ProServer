import {Single} from '../../../comps/Single/Single'
import { revalidateTag } from 'next/cache'

export const dynamicParams = true

export async function generateStaticParams(){
  const seeds = await fetch(
    'https://seed-shop-back-78049b8c30bb.herokuapp.com/seeds?search=')
                                        .then((res) => res.json())
  const arrSeeds = seeds.data.map((seed) => ({id: seed._id}))
    return  arrSeeds
	}
 async function getSeed(source) {
  
   const seed = await fetch(`https://seed-shop-back-78049b8c30bb.herokuapp.com/seeds/${source}`) 
                          //  { next: { tags: ['seed'] }})
                                            .then((res) => res.json())
   //   revalidateTag('seed')
   return seed

       }
 
export default async function Seed({params}){

	const seed = await getSeed(params.id)
	
	return <Single unit={seed} text='seed-list'/>
	}
