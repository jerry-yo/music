import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getTopList () {
  let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    meedNewCode: 1,
    g_tk: 5381
  })

  return jsonp(url, data, options)
}

export function getMusicList (topid) {
  let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

  const data = Object.assign({}, commonParams, {
    topid,
    g_tk: 5381,
    platform: 'h5',
    needNewCode: 1,
    tpl: 3,
    type: 'top',
    page: 'detail'
  })

  return jsonp(url, data, options)
}
