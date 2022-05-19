import { shallowMount, mount } from "@vue/test-utils"
import PokemonPage from "@/pages/PokemonPage"
import { pokemonsMock } from "../mocks/pokemons.mock"

describe('PokemonPage component', () => {
  
  let wrapper

  beforeEach( () => {
    wrapper = shallowMount( PokemonPage )
  })

  test('should match the snapshot', () => {
    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('should call mixPokemonArray when the component is mounted', () => {
    
    const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
     shallowMount( PokemonPage )

    expect ( mixPokemonArraySpy ).toHaveBeenCalled()
  })

  test('should match the snapshot when the pokemons are loaded', () => {
    
    const wrapper = shallowMount( PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonsMock,
          pokemon: pokemonsMock[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    expect( wrapper.html() ).toMatchSnapshot()
  })


})