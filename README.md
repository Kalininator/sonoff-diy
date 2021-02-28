sonoff-diy
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/sonoff-diy.svg)](https://npmjs.org/package/sonoff-diy)
[![Downloads/week](https://img.shields.io/npm/dw/sonoff-diy.svg)](https://npmjs.org/package/sonoff-diy)
[![License](https://img.shields.io/npm/l/sonoff-diy.svg)](https://github.com/Kalininator/sonoff-diy/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sonoff-diy
$ sonoff-diy COMMAND
running command...
$ sonoff-diy (-v|--version|version)
sonoff-diy/0.0.1 darwin-x64 node-v15.7.0
$ sonoff-diy --help [COMMAND]
USAGE
  $ sonoff-diy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sonoff-diy hello [FILE]`](#sonoff-diy-hello-file)
* [`sonoff-diy help [COMMAND]`](#sonoff-diy-help-command)
* [`sonoff-diy identify [FILE]`](#sonoff-diy-identify-file)

## `sonoff-diy hello [FILE]`

describe the command here

```
USAGE
  $ sonoff-diy hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ sonoff-diy hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Kalininator/sonoff-diy/blob/v0.0.1/src/commands/hello.ts)_

## `sonoff-diy help [COMMAND]`

display help for sonoff-diy

```
USAGE
  $ sonoff-diy help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `sonoff-diy identify [FILE]`

describe the command here

```
USAGE
  $ sonoff-diy identify [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/identify.ts](https://github.com/Kalininator/sonoff-diy/blob/v0.0.1/src/commands/identify.ts)_
<!-- commandsstop -->