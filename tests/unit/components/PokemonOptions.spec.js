import { shallowMount } from "@vue/test-utils";
import PokemonOptions from '@/components/PokemonOptions'

import { pokemonsMock } from "../mocks/pokemons.mock"

describe('PokemonOptions component', () => {
  
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount( PokemonOptions, {
      props: {
        pokemons: pokemonsMock
      }
    })
  })

  test('should match the snapshot', () => {
    
    expect( wrapper.html() ).toMatchSnapshot()

  })

})