# Conditionals

<!-- TODO Conditionals are commands -->
<!-- TODO test and [ are commands, [[ is syntax -->

## `(())`

## `[[]]`

## `[]`

## `&&` `||` `!`

## `test`

## "Booleans"

- `true` command always exits successfully (returns 0)
- `false` command always exits unsuccessfully (returns 1)

## Regex `=~`

## Conditional Expressions

[full list of conditional expressions](https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions)

<!-- TODO trim down -->

- `-f file`: Check if `file` is a file.
- `-d file`: Check if `file` is a directory exists.
- `-e file`: Check if `file` exists.
- `-s file`: Check if `file` has a size greater than zero.

- `-h file`: Check if `file` is a symbolic link.
- `-b file`: Check if `file` is a block special file.
- `-c file`: Check if `file` is a character special file.
- `-p file`: Check if `file` is a named FIFO pipe.
- `-S file`: Check if `file` is a socket.

- `-r file`: Check if `file` is readable.
- `-w file`: Check if `file` is writable.
- `-x file`: Check if `file` is executable.
- `-g file`: Check if `file`'s set-group-id bit is set.
- `-u file`: Check if `file`'s set-user-id bit is set.
- `-k file`: Check if `file`'s "sticky" bit is set.
- `-G file`: Check if `file` is owned by the effective group id.
- `-O file`: Check if `file` is owned by the effective user id.
- `-L file`: Check if `file` is a symbolic link.
- `-N file`: Check if `file` has been modified since it was last read.
- `file1 -ef file2`: Check if `file1` and `file2` refer to the same device and inode numbers.
- `file1 -nt file2`: Check if `file1` is newer (according to modification date) than `file2`, or if `file1` exists and `file2` does not.
- `file1 -ot file2`: Check if `file1` is older than `file2`, or if `file2` exists and `file1` does not.
- `-t fd`: Check if a file descriptor `fd` is open and refers to a terminal.
- `-o optname`: Check if the shell option `optname` is enabled. The list of options appears in the description of the `-o option` to the set builtin (see The Set Builtin).
- `-v varname`: Check if the shell variable, `varname`, is assigned a value.
- `-R varname`: Check if the shell variable, `varname`, is set and is a name reference.
- `-z string`: Check if the length of string is zero (use `[[ string == "" ]]` instead).
- `-n string`: Check if the length of string is non-zero (use `[[ != "" ]]` instead).
- `string1 == string2` or `string1 = string2`
  Check if the strings are equal. When used with the `[[` command, this performs pattern matching.

- `string1 != string2`: Check if the strings are not equal.
- `string1 < string2`: Check if `string1` sorts before `string2` lexicographically.
- `string1 > string2`: Check if `string1` sorts after `string2` lexicographically.
- `arg1 -op arg2` (use [shell arithmetic](arithmetic) instead)
  `arg1` and `arg2` may be positive or negative integers. When used with the `[[` command, `arg1` and `arg2` are evaluated as [arithmetic expressions](arithmetic)

  `-op` is one of

  - `-eq` equal
  - `-ne` not equal
  - `-lt` less than
  - `-le` less than or equal
  - `-gt` greater than
  - `-ge` greater than or equal
