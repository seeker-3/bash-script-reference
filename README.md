# Bash Script Reference

- [Bash Script Reference](#bash-script-reference)
  - [Helpful References](#helpful-references)
  - [Comments](#comments)
  - [Variables](#variables)
    - [Declaring and Referencing](#declaring-and-referencing)
    - [Variable Interpolation](#variable-interpolation)
    - [Variable Expansion (Not Recommended)](#variable-expansion-not-recommended)
  - [Strings](#strings)
    - [Raw Strings, Single Quotes](#raw-strings-single-quotes)
    - [Interpolated Strings, Double Quotes](#interpolated-strings-double-quotes)
    - [Expanded Strings, No Quotes](#expanded-strings-no-quotes)
    - [ANSI-C Escape Strings, Dollar Sign with Single Quotes](#ansi-c-escape-strings-dollar-sign-with-single-quotes)
    - [Multiline Strings](#multiline-strings)
    - [String Expansion](#string-expansion)
    - [String Concatenation/Composition](#string-concatenationcomposition)
    - [String Slices](#string-slices)
    - [String Length](#string-length)
  - [Arrays](#arrays)
    - [Declaring](#declaring)
    - [Indexing](#indexing)
    - [Array Expansion](#array-expansion)
    - [Array Keys](#array-keys)
    - [Array Length](#array-length)
    - [Array Concatenation](#array-concatenation)
    - [Array Slices](#array-slices)
    - [Array Iteration](#array-iteration)
    - [Splitting Strings into Arrays](#splitting-strings-into-arrays)
  - [Dictionaries](#dictionaries)
    - [Declaring](#declaring-1)
    - [Expansions](#expansions)

## Helpful References

- [Bash cheatsheet](https://devhints.io/bash)
- [Official bash manual](https://www.gnu.org/software/bash/manual/bash.html)

## Comments

Comments are lines that start with a `#` character. Bash does not support multi-line comments.

```bash
# This is a comment
```

## Variables

### Declaring and Referencing

Declare variables like this. Variables cannot have spaces around the `=` sign.

```bash
X=1
```

Reference a variable using the `$` sign.

```bash
$X
```

Variables in bash are commonly written in upper snake case by convention

```bash
MY_VARIABLE=1
echo $MY_VARIABLE # 1
```

### Variable Interpolation

### Variable Expansion (Not Recommended)

## Strings

The only primitive datatype in bash is a string (numbers are really just strings!). There are several different ways to define strings.

### Raw Strings, Single Quotes

Every character in the string is treated as a literal, no escape sequences, no variable interpolation, whitespace is preserved, `~` does not expand.

```bash
RAW='hello\nworld $X'
echo "$RAW" # hello\nworld $X
```

### Interpolated Strings, Double Quotes

Variables and [subshells] are interpolated, interpolation can be escaped, whitespace is preserved, `~` does not expand.

Escapable: `\$`, `\"`, `\\`, `\\\``

```bash
X=1
INTERPOLATED='hello\nworld $X'
echo "$INTERPOLATED" # hello\nworld 1
```

### Expanded Strings, No Quotes

Variables and [subshells] are interpolated, `~` expands, whitespace is not allowed, syntax characters like `(`, `)`, `<`, `>`, `|`, `;` are not allowed.

Syntax characters and whitespace can be escaped but it is probably better to use quoted strings instead of a bunch of escapes.

```bash
WORLD=' world'
EXPANDED=~/hello$WORLD
echo "$EXPANDED" # /home/user/hello world
```

### ANSI-C Escape Strings, Dollar Sign with Single Quotes

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

### String Expansion

By default, if strings are not quoted, they will be expanded: [globs] will be evaluated, whitespace will collapse, and the string will be interpreted as multiple strings delimited by whitespace. It is recommended to quote your strings to prevent unwanted expansion, unless you know for certain it will not expand. Use [shell check] to help with this.

```bash
RAW='hello   world'
echo $RAW # 'hello' 'world'

echo "$RAW" # 'hello   world'
```

### String Concatenation/Composition

String types can easily be combined in one definition. This is often used if you need the properties of multiple strings at once.

```bash
VAR=hello
COMBINED=~/"$VAR"/world/'path with spaces'/
```

### String Slices

Strings can be sliced using the syntax `${STRING:start:end}` or `${STRING:start}` or `${STRING::end}`. String slices support negative indexing.

```bash
STRING='hello world'
echo "${STRING::5}" # hello
echo "${STRING:1:5}" # ello
echo "${STRING:6}" # world
echo "${STRING:6:-1}" # worl
```

### String Length

Get the length of a string using the `#` symbol.

```bash
STRING='hello world'
echo "${#STRING}" # 11
```

## Arrays

### Declaring

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

### Indexing

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

### Array Expansion

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

To convert the array to a string, use the `*` symbol.

```bash
echo "${ARRAY[*]}" # '1 hello 3 world'
```

### Array Keys

Get the keys of an array using the `!` symbol.

```bash
echo "${!ARRAY[@]}" # 0 1 2 3
```

### Array Length

Get the length of an array using the `#` symbol.

```bash
echo "${#ARRAY[@]}" # 4
```

### Array Concatenation

Concatenate arrays by spreading them them.

```bash
ARRAY=(1 hello 3 world)
ARRAY2=("${ARRAY[@]}" x y "${ARRAY[@]}")
echo "${ARRAY[@]}" # '1' 'hello' '3' 'world' 'x' 'y' '1' 'hello' '3' 'world'
```

### Array Slices

Slice arrays by using the syntax `${ARRAY[@]:start:length}` or `${ARRAY[@]:start}`. Array slices do not support negative indexing.

```bash
ARRAY=(0 1 2 3 4 5 6 7 8 9)
echo "${ARRAY[@]:1:3}" # '1' '2' '3'
echo "${ARRAY[@]:5}" # '5' '6' '7' '8' '9'

# Or as a string
echo "${ARRAY[*]:1:3}" # '1 2 3'
echo "${ARRAY[*]:5}" # '5 6 7 8 9'
```

### Array Iteration

Iterate over an array using the `@` symbol.

```bash
for x in "${ARRAY[@]}"; do
  echo "$x"
done
```

### Splitting Strings into Arrays

Split a string into an array using `read`.

```bash
STR='1 2 3'
read -ra ARRAY <<<"$STR"
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

## Dictionaries

Dictionaries are similar to arrays except they use keys instead of indexes so nearly all the same features apply. However, dictionaries do not support an easy way to concatenated/union them together like arrays, and reading them from a string is not as straight forward.

Dictionaries are seldom needed and you may need a more powerful language if you find yourself needing them.

### Declaring

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

### Expansions

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
