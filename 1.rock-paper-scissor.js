// console.log(process.argv)
const { argv } = process
const playerAction = argv[argv.length - 1]

function game(playerAction) {
  const random = Math.random() * 3

  let computerAction = ''
  if (random < 1) {
    computerAction = 'rock'
  } else if (random> 2) {
    computerAction = 'scissor'
  } else {
    computerAction = 'paper'
  }

  if (computerAction === playerAction) {
    console.log('平局')
  } else if (
    (computerAction === 'rock' && playerAction === 'paper')
    || (computerAction === 'scissor' && playerAction === 'rock')
    || (computerAction === 'paper' && playerAction === 'scissor')
  ) {
    console.log('你赢了')
  } else {
    console.log('你输了')
  }
}


console.log(1111)

// 持续监听命令行输入
process.stdin.on('data', () => {
  game(playerAction)
})