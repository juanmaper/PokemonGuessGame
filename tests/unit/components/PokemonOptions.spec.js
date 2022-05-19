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

  test('should show the 4 options correctly', () => {
    
    const liTags = wrapper.findAll('li')

    expect( liTags.length ).toBe(4)

    expect( liTags[0].text() ).toBe('Pikachu')
    expect( liTags[1].text() ).toBe('Charmander')
    expect( liTags[2].text() ).toBe('Venusaur')
    expect( liTags[3].text() ).toBe('Mew')

  })

  test('should emit "selection" with its parameters when clicking', () => {
    
    const [ li1, li2, li3, li4] = wrapper.findAll('li')

    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')

    expect( wrapper.emitted('pokemonSelection').length ).toBe(4)
    
    expect( wrapper.emitted('pokemonSelection')[0] ).toEqual( [5] )
    expect( wrapper.emitted('pokemonSelection')[1] ).toEqual( [10] )
    expect( wrapper.emitted('pokemonSelection')[2] ).toEqual( [15] )
    expect( wrapper.emitted('pokemonSelection')[3] ).toEqual( [20] )

  })

})