import '../scss/index.scss'

const init = async () => {
  await asyncFn()
}
const asyncFn = async () => {
  console.log("I'm async function")
}

init()
