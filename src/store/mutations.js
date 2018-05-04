import * as type from './mutation-types'

const matutaions = {
  [type.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}

export default matutaions
