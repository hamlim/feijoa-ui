interface Args {
  help?: boolean
  download?: string | boolean
  update?: string | boolean
  diff?: string | boolean
}

module.exports = async function cli() {
  let args = process.argv.slice(2).reduce((acc, arg) => {
    if (arg.includes('=')) {
      let [key, val] = arg.split('=')
      return {
        ...acc,
        [key]: val,
      }
    }
    return {
      ...acc,
      [arg]: true,
    }
  }, {})

  let { download, update, diff, help } = args as Args

  let optionalArg = ` <component-name> `

  if (help) {
    console.log(`[feijoa-ui] 👋 Welcome to the Feijoa UI CLI \n`)
    console.log(`[feijoa-ui] Usage:\n`)
    console.log(`feijoa-ui ...`)
    console.log(
      ` - list     ${Array.from({ length: optionalArg.length }).join(
        ' ',
      )}List available components`,
    )
    console.log(
      ` - download${optionalArg}Download an optional single component, or download all`,
    )
    console.log(` - update  ${optionalArg}Update a specific component`)
    console.log(
      ` - diff    ${optionalArg}Generate a diff of the local component to the latest version of the component`,
    )
    console.log(
      ` - help     ${Array.from({ length: optionalArg.length }).join(
        ' ',
      )}Print this dialog!`,
    )
    return
  }
}
