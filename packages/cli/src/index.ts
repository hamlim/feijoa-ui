import cli from './cli'

cli().catch((e) => {
  console.log(`Error encountered running the feijoa-ui cli! Please open an issue: https://github.com/hamlim/feijoa-ui/issues/new`)
  console.log(e);
})
