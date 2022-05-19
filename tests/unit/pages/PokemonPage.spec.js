import { shallowMount, mount } from "@vue/test-utils"
import PokemonPage from "@/pages/PokemonPage"
import PokemonPicture from "@/components/PokemonPicture"
import PokemonOptions from "@/components/PokemonOptions"
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

  test('should show PokemonPicture and PokemonOptions components', () => {
    
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
    
    const pokemonPicture = wrapper.findComponent( PokemonPicture )
    const pokemonOptions = wrapper.findComponent( PokemonOptions )

    expect( pokemonPicture.exists() ).toBeTruthy()
    expect( pokemonOptions.exists() ).toBeTruthy()

    expect( pokemonPicture.props('pokemonId') ).toBe(5)
    expect( pokemonOptions.props('pokemons') ).toBeTruthy()
  })

  test('checkAnswer tests', async() => {
    
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

    await wrapper.vm.checkAnswer(5)

    expect( wrapper.find('h2').exists() ).toBeTruthy()
    expect( wrapper.vm.showPokemon ).toBeTruthy()
    expect( wrapper.find('h2').text() ).toBe(`Correct, ${ pokemonsMock[0].name }`)

    await wrapper.vm.checkAnswer(10)
    expect( wrapper.vm.message ).toBe(`Oops, it was ${ pokemonsMock[0].name }`)
  })


})