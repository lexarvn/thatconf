# thatconf

CLI for That Conference (https://www.thatconference.com/)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/thatconf.svg)](https://npmjs.org/package/thatconf)

<!-- [![CircleCI](https://circleci.com/gh/wadewegner/thatconf/tree/master.svg?style=shield)](https://circleci.com/gh/wadewegner/thatconf/tree/master) -->

<!-- [![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/wadewegner/thatconf?branch=master&svg=true)](https://ci.appveyor.com/project/wadewegner/thatconf/branch/master) -->
[![Codecov](https://codecov.io/gh/wadewegner/thatconf/branch/master/graph/badge.svg)](https://codecov.io/gh/wadewegner/thatconf)
[![Downloads/week](https://img.shields.io/npm/dw/thatconf.svg)](https://npmjs.org/package/thatconf)
[![License](https://img.shields.io/npm/l/thatconf.svg)](https://github.com/wadewegner/thatconf/blob/master/package.json)

<!-- toc -->
* [thatconf](#thatconf)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g thatconf
$ thatconf COMMAND
running command...
$ thatconf (-v|--version|version)
thatconf/0.3.2 darwin-x64 node-v9.10.1
$ thatconf --help [COMMAND]
USAGE
  $ thatconf COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`thatconf help [COMMAND]`](#thatconf-help-command)
* [`thatconf sessions`](#thatconf-sessions)
* [`thatconf speakers`](#thatconf-speakers)
* [`thatconf tags`](#thatconf-tags)

## `thatconf help [COMMAND]`

display help for thatconf

```
USAGE
  $ thatconf help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.0.5/src/commands/help.ts)_

## `thatconf sessions`

command for looking up sessions

```
USAGE
  $ thatconf sessions

OPTIONS
  -d, --day=Saturday|Sunday|Monday|Tuesday|Wednesday
      day of conference

  -h, --help
      show CLI help

  -l, --level=level
      level

  -n, --name=name
      name of speaker

  -p, 
  --primary=ALM|Architecture|ARVR|Cloud|DataStorage|DevOps|IoTMaker|Languages|MobileClient|SoftSkills|Security|Testing|T
  ools|UxUi|Web|Other|Family|Keynote|THAT Conference|Open Spaces|Precon|FamilyPrecon
      primary category

  -s, 
  --secondary=ALM|Architecture|ARVR|Cloud|DataStorage|DevOps|IoTMaker|Languages|MobileClient|SoftSkills|Security|Testing
  |Tools|UxUi|Web|Other|Family|Keynote|THAT Conference|Open Spaces|Precon|FamilyPrecon
      secondary category

  -t, --title=title
      session title contains term

  -y, --year=year
      [default: 2018] year

  --json
      format output as json
```

_See code: [src/commands/sessions.ts](https://github.com/wadewegner/thatconf/blob/v0.3.2/src/commands/sessions.ts)_

## `thatconf speakers`

command for looking up speakers

```
USAGE
  $ thatconf speakers

OPTIONS
  -c, --company=company  company contains term
  -h, --help             show CLI help
  -t, --title=title      title contains term
  -y, --year=year        [default: 2018] year
  --json                 format output as json
```

_See code: [src/commands/speakers.ts](https://github.com/wadewegner/thatconf/blob/v0.3.2/src/commands/speakers.ts)_

## `thatconf tags`

command for getting all tags

```
USAGE
  $ thatconf tags

OPTIONS
  -h, --help       show CLI help
  -y, --year=year  [default: 2018] year
```

_See code: [src/commands/tags.ts](https://github.com/wadewegner/thatconf/blob/v0.3.2/src/commands/tags.ts)_
<!-- commandsstop -->
