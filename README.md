# Bash Script Reference

- [Bash Script Reference](#bash-script-reference)
  - [Helpful References](#helpful-references)
  - [Basics](#basics)
    - [Comments](#comments)
    - [Variables](#variables)
      - [Declaring Variables `VAR=x`](#declaring-variables-varx)
      - [Referencing Variables `$VAR`](#referencing-variables-var)
      - [Variable Interpolation](#variable-interpolation)
      - [Variable Expansion (Not Recommended)](#variable-expansion-not-recommended)
    - [Running Commands](#running-commands)
  - [Strings](#strings)
    - [Raw Strings `'...'`](#raw-strings-)
    - [Interpolated Strings `"...$X..."`](#interpolated-strings-x)
    - [Expanded Strings `hello/world`](#expanded-strings-helloworld)
    - [ANSI-C Escape Strings `$'...\n'`](#ansi-c-escape-strings-n)
    - [Multiline Strings](#multiline-strings)
    - [String Expansion (Not Recommended)](#string-expansion-not-recommended)
    - [String Concatenation `+=`](#string-concatenation-)
    - [String Composition `'...'"..."`](#string-composition-)
    - [String Slices `${STRING:start:end}`](#string-slices-stringstartend)
    - [String Length `${#STRING}`](#string-length-string)
  - [Arrays](#arrays)
    - [Declaring Arrays `ARRAY=(...)`](#declaring-arrays-array)
    - [Indexing Arrays `${ARRAY[i]}`](#indexing-arrays-arrayi)
    - [Array Expansion to Separate Strings `${ARRAY[@]}`](#array-expansion-to-separate-strings-array)
    - [Array Expansion to a Single String `${ARRAY[*]}`](#array-expansion-to-a-single-string-array)
    - [Array Keys `${!ARRAY[@]}`](#array-keys-array)
    - [Array Length `${#ARRAY[@]}`](#array-length-array)
    - [Array Concatenation `ARRAY2=("${ARRAY[@]}" "${ARRAY[@]}")`](#array-concatenation-array2array-array)
    - [Array Slices `${ARRAY[@]:start:length}`](#array-slices-arraystartlength)
    - [Array Iteration `for ... in ${ARRAY[@]}`](#array-iteration-for--in-array)
    - [Splitting Strings into Arrays](#splitting-strings-into-arrays)
    - [Practical Uses of Arrays](#practical-uses-of-arrays)
  - [Dictionaries](#dictionaries)
    - [Declaring Dictionaries](#declaring-dictionaries)
    - [Dictionary Expansions](#dictionary-expansions)
  - [Globbing](#globbing)
    - [Wildcards `*`](#wildcards-)
    - [Directory Wildcards `**/pattern`](#directory-wildcards-pattern)
    - [Single Character `?`](#single-character-)
    - [Single Character Ranges `[...]`](#single-character-ranges-)
    - [Extended Globbing](#extended-globbing)
      - [Match Zero or One Pattern List `?(pattern-list)`](#match-zero-or-one-pattern-list-pattern-list)
      - [Match Zero or More Pattern List `*(pattern-list)`](#match-zero-or-more-pattern-list-pattern-list)
      - [Match One or More Pattern List `+(pattern-list)`](#match-one-or-more-pattern-list-pattern-list)
      - [Match One of the Pattern List `@(pattern-list)`](#match-one-of-the-pattern-list-pattern-list)
      - [Match Anything Except One of the Pattern List `!(pattern-list)`](#match-anything-except-one-of-the-pattern-list-pattern-list)
    - [Globbing Options](#globbing-options)
    - [Special Parameters `$@`, `$*`, `$#`, `$?`, `$$`, `$!`](#special-parameters------)
      - [Command Line Arguments](#command-line-arguments)
        - [Command Line Arguments as an Array `$@`](#command-line-arguments-as-an-array-)
        - [Command Line Arguments as a String `$*`](#command-line-arguments-as-a-string-)
        - [Get the Number of Command Line Arguments `$#`](#get-the-number-of-command-line-arguments-)
        - [Access Individual Command Line Arguments `$n`](#access-individual-command-line-arguments-n)
        - [Get the Name of the Script `$0`](#get-the-name-of-the-script-0)
      - [Process Introspection](#process-introspection)
    - [Subshells `()`](#subshells-)
      - [Command Groups `{}`](#command-groups-)
      - [Command Substitution `$(...)`](#command-substitution-)
      - [Process Substitution `<(...)`](#process-substitution-)
    - [Control Flow](#control-flow)
      - [If Statements](#if-statements)
      - [For Loops](#for-loops)
      - [While Loops](#while-loops)
      - [Case Statements](#case-statements)
    - [Conditionals](#conditionals)
      - [`[[]]`](#)
      - [`[]`](#-1)
      - [`test`](#test)
      - ["Booleans"](#booleans)
      - [Regex `=~`](#regex-)
    - [Functions](#functions)
      - [Defining Functions `fn() { ... }`](#defining-functions-fn---)
      - [Calling Functions `fn`](#calling-functions-fn)
      - [Calling Functions with Arguments `fn 1 2 3`](#calling-functions-with-arguments-fn-1-2-3)
      - [Using Functions Arguments `"$@"`](#using-functions-arguments-)
      - [Returning Exit Codes `return`](#returning-exit-codes-return)
      - ["Returning" Values `echo -n ...`](#returning-values-echo--n-)
      - [Brackets vs. Parentheses](#brackets-vs-parentheses)
    - [Pipes](#pipes)
      - [Pipe STDOUT to STDIN `|`](#pipe-stdout-to-stdin-)
      - [Pipe STDOUT and STDERR to STDIN `|&`](#pipe-stdout-and-stderr-to-stdin-)
    - [Redirects](#redirects)
      - [Read a File to STDIN `<`](#read-a-file-to-stdin-)
      - [Read a String to STDIN `<<<`](#read-a-string-to-stdin-)
      - [Write to a File from STDOUT `>`](#write-to-a-file-from-stdout-)
      - [Append to a File from STDOUT `>>`](#append-to-a-file-from-stdout-)
      - [File Descriptors](#file-descriptors)
      - [Open a File `exec fd<>file.txt`](#open-a-file-exec-fdfiletxt)
      - [Close a File `exec fd>&-`](#close-a-file-exec-fd-)
    - [Arithmetic Expansions `((x+=y))`](#arithmetic-expansions-xy)
    - [Expansions](#expansions)
      - [Ranges `{start..stop..step}`](#ranges-startstopstep)
      - [Brace Expansions `prefix{middle1,middle2,}suffix`](#brace-expansions-prefixmiddle1middle2suffix)
      - [Parameter Expansions `VAR2=${VAR...}`](#parameter-expansions-var2var)
      - [Tilde Expansion `~`](#tilde-expansion-)
    - [Strict Mode](#strict-mode)
    - [Running Scripts](#running-scripts)
      - [Running Scripts as Files](#running-scripts-as-files)
      - [Running Scripts as Strings](#running-scripts-as-strings)
        - [Running Script Strings through STDIN](#running-script-strings-through-stdin)
        - [Running Script Strings with `bash -c`](#running-script-strings-with-bash--c)
        - [Running Script Strings with Process Substitution `bash <(...)`](#running-script-strings-with-process-substitution-bash-)
    - [Adding Color to Your Bash Scripts](#adding-color-to-your-bash-scripts)
    - [Debugging with `bash -x`](#debugging-with-bash--x)
    - [Helpful Tools](#helpful-tools)
      - [`shfmt` a shell script formatter](#shfmt-a-shell-script-formatter)
      - [`shellcheck` a shell script linter](#shellcheck-a-shell-script-linter)

## Helpful References

- [Bash cheatsheet](https://devhints.io/bash)
- [Official bash manual](https://www.gnu.org/software/bash/manual/bash.html)

## Basics

### Comments

Comments are lines that start with a `#` character. Bash does not support multi-line comments.

```bash
# This is a comment
```

### Variables

#### Declaring Variables `VAR=x`

Declare variables using `=`. Variables cannot have spaces around the `=` sign.

```bash
X=1
```

#### Referencing Variables `$VAR`

Reference a variable using the `$` sign.

```bash
X2=$X
```

Variables in bash are commonly written in upper snake case by convention

```bash
MY_VARIABLE=1
echo $MY_VARIABLE # 1
```

#### Variable Interpolation

#### Variable Expansion (Not Recommended)

### Running Commands

By default, anything typed on a line will be executed as a command.

If you want to run a command that spans multiple lines, you can use a backslash `\` to escape the newline.

## Strings

The only primitive datatype in bash is a string (numbers are really just strings!). There are several different ways to define strings.

### Raw Strings `'...'`

Every character in the string is treated as a literal, no escape sequences, no variable interpolation, whitespace is preserved, `~` does not expand.

```bash
RAW='hello\nworld $X'
echo "$RAW" # hello\nworld $X
```

### Interpolated Strings `"...$X..."`

Variables and [subshells] are interpolated, interpolation can be escaped, whitespace is preserved, `~` does not expand.

Escapable: `\$`, `\"`, `\\`, `\\\``

```bash
X=1
INTERPOLATED='hello\nworld $X'
echo "$INTERPOLATED" # hello\nworld 1
```

### Expanded Strings `hello/world`

Variables and [subshells] are interpolated, `~` expands, whitespace is not allowed, syntax characters like `(`, `)`, `<`, `>`, `|`, `;` are not allowed.

Syntax characters and whitespace can be escaped with `\` but it is probably better to use quoted strings instead of many escapes.

```bash
WORLD=' world'
EXPANDED=~/hello$WORLD
echo "$EXPANDED" # /home/user/hello world
```

### ANSI-C Escape Strings `$'...\n'`

Similar to raw strings except ansi escape sequences are allowed.

Variables are not interpolated, whitespace is preserved, `~` is not expanded, supports standard escape sequences like `\n`, `\t`, `\r`, etc.

```bash
ESCAPED=$'hello\nworld $X'
echo "$ESCAPED" # hello
#world $X
```

### Multiline Strings

All quoted strings by default are multiline strings.

```bash
RAW='hello
world'

INTERPOLATED="hello
world"

ESCAPED=$'hello
world'
```

### String Expansion (Not Recommended)

By default, if strings are not quoted, they will be expanded: [globs] will be evaluated, whitespace will collapse, and the string will be interpreted as multiple strings delimited by whitespace. It is recommended to quote your strings to prevent unwanted expansion, unless you know for certain it will not expand. Use [shell check] to help with this.

```bash
RAW='hello   world'
echo $RAW # 'hello' 'world'

echo "$RAW" # 'hello   world'
```

### String Concatenation `+=`

Strings can be concatenated using the `+=` operator.

```bash
VAR=hello
VAR+=' world'
echo "$VAR" # hello world
```

Note that bash is unique in that you can use `+=` but cannot use `+` by itself to concatenate strings `VAR=x+y` ❌. Instead you would use interpolation `VAR="$x$y"` ✅.

### String Composition `'...'"..."`

String types can easily be combined in one definition. This is often used if you need the properties of multiple strings at once.

```bash
VAR=hello
COMBINED=~/"$VAR"/world/'path with spaces'/
```

### String Slices `${STRING:start:end}`

Strings can be sliced using the syntax `${STRING:start:end}` or `${STRING:start}` or `${STRING::end}`. String slices support negative indexing.

```bash
STRING='hello world'
echo "${STRING::5}" # hello
echo "${STRING:1:5}" # ello
echo "${STRING:6}" # world
echo "${STRING:6:-1}" # worl
```

### String Length `${#STRING}`

Get the length of a string using the `#` symbol.

```bash
STRING='hello world'
echo "${#STRING}" # 11
```

## Arrays

### Declaring Arrays `ARRAY=(...)`

Arrays in bash are defined by using parenthesis and elements are delimited by whitespace. Arrays in bash cannot be multi-dimensional.

```bash
ARRAY=(1 hello 3 world)

# or multiline
ARRAY=(
  1
  hello
  3
  world
)
```

### Indexing Arrays `${ARRAY[i]}`

Arrays are zero indexed and can be accessed like this and support negative indexing.

```bash
echo "${ARRAY[0]}" # 1
echo "${ARRAY[1]}" # hello
echo "${ARRAY[-1]}" # world
```

Set an element in an array like this.

```bash
ARRAY[0]=2
echo "${ARRAY[0]}" # 2
```

### Array Expansion to Separate Strings `${ARRAY[@]}`

To get the whole array, use the `@` symbol. Referencing the array by itself will only return the first element.

```bash
echo "${ARRAY[@]}" # '1' 'hello' '3' 'world'
echo "$ARRAY" # 1
```

If you do not quote the array, the individual elements will be expanded (not recommended).

```bash
ARRAY=(1 'hello world' 3 world)
echo "${ARRAY[@]}" # '1' 'hello world' '3' 'world'
echo  ${ARRAY[@]}  # '1' 'hello' 'world' '3' 'world'
```

### Array Expansion to a Single String `${ARRAY[*]}`

To convert the array to a string, use the `*` symbol.

```bash
echo "${ARRAY[*]}" # '1 hello 3 world'
```

### Array Keys `${!ARRAY[@]}`

Get the keys of an array using the `!` symbol.

```bash
echo "${!ARRAY[@]}" # 0 1 2 3
```

### Array Length `${#ARRAY[@]}`

Get the length of an array using the `#` symbol.

```bash
echo "${#ARRAY[@]}" # 4
```

### Array Concatenation `ARRAY2=("${ARRAY[@]}" "${ARRAY[@]}")`

Concatenate arrays by spreading them them.

```bash
ARRAY=(1 hello 3 world)
ARRAY2=("${ARRAY[@]}" x y "${ARRAY[@]}")
echo "${ARRAY[@]}" # '1' 'hello' '3' 'world' 'x' 'y' '1' 'hello' '3' 'world'
```

### Array Slices `${ARRAY[@]:start:length}`

Slice arrays by using the syntax `${ARRAY[@]:start:length}` or `${ARRAY[@]:start}`. Array slices do not support negative indexing.

```bash
ARRAY=(0 1 2 3 4 5 6 7 8 9)
echo "${ARRAY[@]:1:3}" # '1' '2' '3'
echo "${ARRAY[@]:5}" # '5' '6' '7' '8' '9'

# Or as a string
echo "${ARRAY[*]:1:3}" # '1 2 3'
echo "${ARRAY[*]:5}" # '5 6 7 8 9'
```

### Array Iteration `for ... in ${ARRAY[@]}`

Iterate over an array using the `@` symbol.

```bash
for x in "${ARRAY[@]}"; do
  echo "$x"
done
```

### Splitting Strings into Arrays

Split a string into an array using `read`.

```bash
STRING='1 2 3'
read -ra ARRAY <<<"$STRING"
echo "${ARRAY[@]}" # '1' '2' '3'
```

Split lines into an array using `mapfile`.

```bash
FILE='1
2
3'
mapfile -t ARRAY <<<"$FILE"
echo "${ARRAY[@]}" # '1' '2' '3'
```

### Practical Uses of Arrays

Bash arrays can either be used to hold a command's arguments or a command plus its arguments. Here are some examples:

```bash
ARGS=(1 2 3)

echo "${ARGS[@]}" # 1 2 3
```

or

```bash
CMD=(echo 1 2 3)

"${CMD[@]}" # 1 2 3
```

You could also do this with an `alias` but I typically prefer arrays when scripting and aliases for my rc files.

If you have a command that takes many options, using an array can be a much tidier way to write it since the only way to break up a long command is to use the `\` to escape newlines.

```bash
COMMAND_ARGS=(
    -x thing1
    -x thing2
    -x thing3
    -y other-thing
    --option1
    --option2
)

command "${COMMAND_ARGS[@]}"
```

## Dictionaries

Dictionaries are similar to arrays except they use keys instead of indexes so nearly all the same features apply. However, dictionaries do not support an easy way to concatenated/union them together like arrays, and reading them from a string is not as straight forward.

Dictionaries are seldom needed and you may need a more powerful language if you find yourself needing them.

### Declaring Dictionaries

You can declare a dictionary two ways.

```bash
declare -A DICT1
DICT1[key1]=value1
DICT1[key2]=value2

# or
declare -A DICT2=([key1]=value1 [key2]=value2)
```

Or multiline:

```bash
declare -A DICT2=(
  [key1]=value1
  [key2]=value2
)
```

### Dictionary Expansions

Get the keys of a dictionary using the `!` symbol (same as arrays). Use `@` to get them an an array `*` to get them as a string.

```bash
declare -A DICT2=([key1]=value1 [key2]=value2)
echo "${!DICT2[@]}" # 'key1' 'key2'
echo "${!DICT2[*]}" # 'key1 key2'
```

Values:

```bash
declare -A DICT2=([key1]=value1 [key2]=value2)
echo "${DICT2[@]}" # 'key1 key2'
echo "${DICT2[*]}" # 'key1 key2'
```

## Globbing

Globbing is a basic pattern matching feature that lets you match files or strings. A glob expression will expand to a list of files that match the pattern. If no files match the pattern, the glob expression will remain unexpanded.

### Wildcards `*`

The `*` character matches zero or more characters.

This will print all files in the current directory.

```bash
echo *
```

This will print all the `.txt` files in the current directory.

```bash
echo *.txt
```

Print all files with `config` in the name.

```bash
echo *config*
```

### Directory Wildcards `**/pattern`

The `shopt -s globstar` option must be enabled to use this feature.

When a glob pattern is prefixed with `**/`, it will recursively search the current directory and all subdirectories for files that match the pattern.

### Single Character `?`

The `?` character matches exactly one character.

In a JavaScript project that has a mix of JS and TS files, you could use `?` in the following way to match `script.js` and `script.ts`.

```bash
echo script.?s
```

### Single Character Ranges `[...]`

Similar to regular expressions, match a single character in a range.

Match all files that start with `a`, or `c`.

```bash
echo [ac]*
```

If you have contiguous characters, you can use a `-` such as `[a-z]`, `[A-Z]`, `[0-9]`.

Match any file that starts with a lowercase letter `a` to `z`.

```bash
echo [a-z]*
```

Exclude a range by using `^`.

Match any file that does not start with a lowercase letter `a` to `z`.

```bash
echo [^a-z]*
```

Lastly, the brackets come with a prebuilt set of ranges

```txt
alnum   alpha   ascii   blank   cntrl   digit   graph   lower
print   punct   space   upper   word    xdigit
```

For example, to match all files that start with a digit or a letter.

```bash
echo [[:digit:][:alpha:]]*
```

### Extended Globbing

Bash has an extended globbing feature that should be on by default in newer version fo bash can be turned on with `shopt -s extglob`. Extended globs allow you to specify lists of patterns separated by `|`.

#### Match Zero or One Pattern List `?(pattern-list)`

If you wanted to match all `.txt` files, `.bash` files, or no extension files, you could use the following pattern.

```bash
echo *?(.txt|.bash)
```

#### Match Zero or More Pattern List `*(pattern-list)`

TODO

#### Match One or More Pattern List `+(pattern-list)`

TODO

#### Match One of the Pattern List `@(pattern-list)`

TODO

#### Match Anything Except One of the Pattern List `!(pattern-list)`

TODO

### Globbing Options

Bash has several globbing options that can be set by placing `shopt -s option` at the top of your script. Options can be unset with `shopt -u option`.

By default if a glob is not match, it will not expand. If you did the following glob in a directory that had not txt files, it would not expand. `*.txt` would stay as `*.txt`.

```bash
echo *.txt # *.txt
```

This is often not ideal if you want to error check that a glob was able to match files.

- `shopt -s nullglob`: If a glob does not match, it will return the empty string.
- `shopt -s failglob`: If a glob does not match, it will throw an error exiting the script if unhandled.
- `shopt -s dotglob`: By default, `echo *` will not include files that start with a `.`. This option will include them.
- `shopt -s extglob`: Extended globbing syntax to match lists of glob patterns. Should be on by default in newer versions of bash.
- `shopt -s nocaseglob`: Makes globs case insensitive.
- `shopt -s globstar`: When set `**` will match zero or more directories recursively.
- `shopt -s nocasematch`: Makes case insensitive matching for `[[` globs or `case` statements.

### Special Parameters `$@`, `$*`, `$#`, `$?`, `$$`, `$!`

Special parameters are readonly variables that are set by the shell. They are used to read positional arguments to the script and to introspect processes.

#### Command Line Arguments

##### Command Line Arguments as an Array `$@`

`$@` gets all the arguments passed to the script as separate strings.

From the cli

```bash
bash script.bash 1 2 3
```

In the script

```bash
echo "$@" # 1 2 3
```

`@` is an array, so you can use any syntax listed in the array section to access the elements.

From the cli

```bash
bash script.bash 1 2 3 4 5
```

In the script using an array slice

```bash
echo "${@:2:3}" # 2 3 4
```

If you use a for loop with no `in` clause, it will iterate over the cli arguments by default.

```bash
for ARG; do
  echo "$ARG"
done
```

##### Command Line Arguments as a String `$*`

`$*` gets all the arguments passed to the script as a single string.

From the cli

```bash
bash script.bash 1 2 3
```

In the script

```bash
echo "$*" # 1 2 3
```

##### Get the Number of Command Line Arguments `$#`

`$#` gets the number of arguments passed to the script.

From the cli

```bash
bash script.bash 1 2 3
```

In the script

```bash
echo $# # 3
```

##### Access Individual Command Line Arguments `$n`

`$n` gets the nth argument passed to the script.

From the cli

```bash
bash script.bash 1 2 3 4 5
```

In the script using an array slice

```bash
echo "$1 $4 $5"
```

##### Get the Name of the Script `$0`

`$0` gets the name of the script.

From the cli

```bash
bash script.bash 1 2 3
```

In the script

```bash
echo "$0" # script.bash
```

<!-- Get the set options `$-` -->

#### Process Introspection

`$?` gets the exit status of the last command.

```bash
(exit 42)
echo $? # 42
```

This can be useful if you are checking for a specific error status, however most of the time you should use `if` statements to check if a command failed or not.

- `$$` gets the process id of the current script.
- `$!` gets the process id of the last command run in the background.

### Subshells `()`

#### Command Groups `{}`

#### Command Substitution `$(...)`

#### Process Substitution `<(...)`

### Control Flow

Control flow in bash works very differently to other languages. Instead of branching on `true` or `false`, bash will branch on the exit status of a command. A successful command with an exit status of `0` is `true`, and a failed command with a non-zero exit status of `1..255` is `false`.

#### If Statements

#### For Loops

#### While Loops

#### Case Statements

### Conditionals

#### `[[]]`

#### `[]`

#### `test`

#### "Booleans"

#### Regex `=~`

### Functions

#### Defining Functions `fn() { ... }`

#### Calling Functions `fn`

#### Calling Functions with Arguments `fn 1 2 3`

#### Using Functions Arguments `"$@"`

#### Returning Exit Codes `return`

#### "Returning" Values `echo -n ...`

#### Brackets vs. Parentheses

### Pipes

#### Pipe STDOUT to STDIN `|`

#### Pipe STDOUT and STDERR to STDIN `|&`

### Redirects

#### Read a File to STDIN `<`

#### Read a String to STDIN `<<<`

#### Write to a File from STDOUT `>`

#### Append to a File from STDOUT `>>`

#### File Descriptors

#### Open a File `exec fd<>file.txt`

#### Close a File `exec fd>&-`

### Arithmetic Expansions `((x+=y))`

### Expansions

#### Ranges `{start..stop..step}`

```bash
echo {1..5} # 1 2 3 4 5
```

```bash
for i in {1..5}; do
  echo "$i"
done
```

```bash
echo {0..10..2} # 0 2 4 6 8 10
```

#### Brace Expansions `prefix{middle1,middle2,}suffix`

#### Parameter Expansions `VAR2=${VAR...}`

#### Tilde Expansion `~`

### Strict Mode

```bash
set -euo pipefail
```

### Running Scripts

#### Running Scripts as Files

```bash
bash script.bash
```

```bash
chmod u+x script.bash
./script.bash
```

#### Running Scripts as Strings

##### Running Script Strings through STDIN

```bash
bash <script.bash
echo 'echo hello world!' | bash # hello world
bash <<<'echo hello world!' # hello world
cat script.bash | bash
curl -fsSL https://example.com/script.bash | bash
```

##### Running Script Strings with `bash -c`

```bash
bash -c "echo Hello world!"
bash -c "$(curl -fsSL https://example.com/script.bash)"
```

##### Running Script Strings with Process Substitution `bash <(...)`

```bash
bash <(cat script.bash)
bash <(curl -fsSL https://example.com/script.bash)
```

### Adding Color to Your Bash Scripts

### Debugging with `bash -x`

### Helpful Tools

#### `shfmt` a shell script formatter

#### `shellcheck` a shell script linter
