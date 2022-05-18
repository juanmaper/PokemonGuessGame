import { shallowMount } from "@vue/test-utils";
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture component', () => {
  
  test('should match the snapshot', () => {
    const wrapper = shallowMount( PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false
      }
    } )

    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('should show the hidden image and pokemon with id 100', () => {
    
  })

  test('should show the pokemon if showPokemon is true', () => {
    
  })

})