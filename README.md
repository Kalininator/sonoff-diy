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
sonoff-diy/0.0.4 darwin-x64 node-v15.7.0
$ sonoff-diy --help [COMMAND]
USAGE
  $ sonoff-diy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sonoff-diy flash`](#sonoff-diy-flash)
* [`sonoff-diy help [COMMAND]`](#sonoff-diy-help-command)
* [`sonoff-diy identify`](#sonoff-diy-identify)
* [`sonoff-diy list`](#sonoff-diy-list)

## `sonoff-diy flash`

describe the command here

```
USAGE
  $ sonoff-diy flash

OPTIONS
  --file=file  (required)
  --ip=ip
  --port=port
```

_See code: [src/commands/flash.ts](https://github.com/Kalininator/sonoff-diy/blob/v0.0.4/src/commands/flash.ts)_

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

## `sonoff-diy identify`

describe the command here

```
USAGE
  $ sonoff-diy identify
```

_See code: [src/commands/identify.ts](https://github.com/Kalininator/sonoff-diy/blob/v0.0.4/src/commands/identify.ts)_

## `sonoff-diy list`

describe the command here

```
USAGE
  $ sonoff-diy list

OPTIONS
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [src/commands/list.ts](https://github.com/Kalininator/sonoff-diy/blob/v0.0.4/src/commands/list.ts)_
<!-- commandsstop -->
