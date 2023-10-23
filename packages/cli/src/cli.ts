import k from "kleur";

interface Args {
  help?: boolean;
  download?: string | boolean;
  update?: string | boolean;
  diff?: string | boolean;
  list?: boolean;
  silent?: boolean;
}

type ComponentsMetadata = {
  version: string;
  components: Array<{
    name: string;
    paths: {
      relative: string;
      absolute: string;
      github: string;
    };
    content: string;
  }>;
};

type Cmd = "help" | "download" | "update" | "diff" | "list";

export default async function cli() {
  let metadataCache: ComponentsMetadata;

  let args = process.argv.slice(2).reduce((acc, arg) => {
    if (arg.includes("=")) {
      let [key, ...val] = arg.split("=");
      return {
        ...acc,
        [key]: val.join("="),
      };
    }
    return {
      ...acc,
      [arg]: true,
    };
  }, {}) as Args;
  let cmd = process.argv[2] as Cmd;

  let { list, download, update, diff, help } = args;

  let optionalArg = ` <component-name> `;

  switch (cmd) {
    case "help": {
      console.log(`[feijoa-ui] 👋 Welcome to the Feijoa UI CLI \n`);
      console.log(`[feijoa-ui] Usage:\n`);
      console.log(`feijoa-ui ...`);
      console.log(
        ` - ${k.yellow(`list`)}     ${
          Array.from({ length: optionalArg.length }).join(
            " ",
          )
        }List available components`,
      );
      console.log(
        ` - ${k.yellow(`download`)}${optionalArg}Download an optional single component, or download all`,
      );
      console.log(` - ${k.yellow(`update`)}  ${optionalArg}Update a specific component`);
      console.log(
        ` - ${
          k.yellow(`diff`)
        }    ${optionalArg}Generate a diff of the local component to the latest version of the component`,
      );
      console.log(
        ` - ${k.yellow(`help`)}     ${
          Array.from({ length: optionalArg.length }).join(
            " ",
          )
        }Print this dialog!`,
      );
      return;
    }
    case "list": {
      if (!metadataCache) {
        metadataCache = await (await fetch("https://feijoa-ui.vercel.app/api/components")).json() as ComponentsMetadata;
      }

      let componentNames = metadataCache.components.map(comp => comp.name);

      if (!args.silent) {
        console.log(`[feijoa-ui] Available components: \n`);
        componentNames.forEach(name => {
          console.log(`- ${name}`);
        });
      } else {
        console.log(JSON.stringify(componentNames, null, 2));
      }
      return;
    }
  }
}
