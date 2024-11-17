# Strings

The only primitive datatype in bash is a string (numbers are really just strings!). There are several different ways to define strings.

## Raw Strings `'...'`

Every character in the string is treated as a literal, no escape sequences, no variable interpolation, whitespace is preserved, `~` does not expand.

```bash
RAW='hello world $X'
echo "$RAW" # hello world $X
```

## Interpolated Strings `"...$X..."`

Variables and [subshells](subshells) are interpolated, interpolation can be escaped, whitespace is preserved, `~` does not expand.

Escapable: `\$`, `\"`, `\\`, `\\\``

```bash
X=1
INTERPOLATED="hello world $X"
echo "$INTERPOLATED" # hello world 1
```

## Unquoted Strings `hello/world`

Variables and [subshells](subshells) are interpolated, `~` at the beginning expands, whitespace is not allowed, syntax characters like `(`, `)`, `<`, `>`, `|`, `;` are not allowed.

Syntax characters and whitespace can be escaped with `\` but it is probably better to use quoted strings instead of many escapes.

```bash
WORLD=' world'
EXPANDED=~/hello$WORLD
echo "$EXPANDED" # /home/user/hello world
```

## ANSI-C Escape Strings `$'...\n'`

Similar to raw strings except ansi escape sequences are interpreted.

Variables are not interpolated, whitespace is preserved, `~` is not expanded, supports standard escape sequences like `\n`, `\t`, `\r`, etc.

```bash
ESCAPED=$'hello\n world $X'
echo "$ESCAPED"
# Output:
# hello
# world $X
```

## Multiline Strings

All quoted strings by default are multiline strings.

```bash
RAW='line1
line2'

INTERPOLATED="line1
line2"

ESCAPED=$'line1
line2'
```

<!--
## String Word Splitting (Not Recommended)

By default, if strings are not quoted, they will be expanded: [globs](/globbing) will be evaluated, whitespace will collapse, and the string will be interpreted as multiple strings delimited by whitespace. It is recommended to quote your strings to prevent unwanted expansion, unless you know for certain it will not expand. Use [shell check] to help with this.

```bash
RAW='hello   world'
echo $RAW # 'hello' 'world'

echo "$RAW" # 'hello   world'
```
-->

## String Concatenation `+=`

Strings can be concatenated using the `+=` operator.

```bash
VAR=text
VAR+=' more text'
echo "$VAR" # text more text
```

:::note

Bash is unique in that you can use `+=` but cannot use `+` by itself to concatenate strings `VAR=x+y` ❌. Instead you would use interpolation `VAR="$X$Y"` ✅.

:::

## String Composition `'...'"..."`

String types can easily be combined in one expression. This is often used if you need the properties of multiple strings at once.

```bash
VAR=hello
COMBINED=~/"$VAR"/world/'path with spaces'/$'\n'
```

## String Slices `${STRING:start:end}`

Strings can be sliced using the syntax `${STRING:start:end}` or `${STRING:start}` or `${STRING::end}`. String slices support negative indexing.

```bash
STRING='hello world'
echo "${STRING::5}"   # hello
echo "${STRING:1:5}"  # ello
echo "${STRING:6}"    # world
echo "${STRING:6:-1}" # worl
```

## String Length

Get the length of a string using the `#` symbol.

```bash
STRING='hello world'
echo "${#STRING}" # 11
```
