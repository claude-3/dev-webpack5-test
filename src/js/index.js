import '../scss/index.scss'

import { hello } from './_sub'
import jQuery from 'jquery'

const init = async () => {
  await asyncFn()
}
const asyncFn = async () => {
  console.log("I'm async function")
}

init()

hello('index.js')

// $(function () {
//   console.log('_sub.js')
// })

// ドルマークに参照を代入(慣習的な $ を使うため)
const $ = jQuery

// テキストを取得
const text = $('h1').text()
$('h1')
  .empty() // 一旦、空にする
  .show() // 表示する

const arr = text.split('') // 一文字ずつ、配列に格納
const elements = []

// 一文字ずつ、spanタグで包む
arr.map((str, index) => {
  elements[index] = $(`<span>${str}</span>`)
  $('h1').append(elements[index]) // 元の場所に挿入
})

// エフェクトの適用
elements.map((element, index) => {
  element.delay(40 * index).queue(function () {
    $(this).addClass('motion')
  })
})
