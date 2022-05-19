import { shallowMount, mount } from "@vue/test-utils"
import PokemonPage from "@/pages/PokemonPage"

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


})