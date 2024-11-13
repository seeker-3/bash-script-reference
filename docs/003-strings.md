---
sidebar_position: 2
---

# Strings

The only primitive datatype in bash is a string (numbers are really just strings!). There are several different ways to define strings.

## Raw Strings `'...'`

Every character in the string is treated as a literal, no escape sequences, no variable interpolation, whitespace is preserved, `~` does not expand.

```bash
RAW='hello\nworld $X'
echo "$RAW" # hello\nworld $X
```

## Interpolated Strings `"...$X..."`

Variables and [subshells] are interpolated, interpolation can be escaped, whitespace is preserved, `~` does not expand.

Escapable: `\$`, `\"`, `\\`, `\\\``

```bash
X=1
INTERPOLATED='hello\nworld $X'
echo "$INTERPOLATED" # hello\nworld 1
```

## Expanded Strings `hello/world`

Variables and [subshells] are interpolated, `~` expands, whitespace is not allowed, syntax characters like `(`, `)`, `<`, `>`, `|`, `;` are not allowed.

Syntax characters and whitespace can be escaped with `\` but it is probably better to use quoted strings instead of many escapes.

```bash
WORLD=' world'
EXPANDED=~/hello$WORLD
echo "$EXPANDED" # /home/user/hello world
```

## ANSI-C Escape Strings `$'...\n'`

Similar to raw strings except ansi escape sequences are allowed.

Variables are not interpolated, whitespace is preserved, `~` is not expanded, supports standard escape sequences like `\n`, `\t`, `\r`, etc.

```bash
ESCAPED=$'hello\nworld $X'
echo "$ESCAPED" # hello
#world $X
```

## Multiline Strings

All quoted strings by default are multiline strings.

```bash
RAW='hello
world'

INTERPOLATED="hello
world"

ESCAPED=$'hello
world'
```

## String Word Splitting (Not Recommended)

By default, if strings are not quoted, they will be expanded: [globs] will be evaluated, whitespace will collapse, and the string will be interpreted as multiple strings delimited by whitespace. It is recommended to quote your strings to prevent unwanted expansion, unless you know for certain it will not expand. Use [shell check] to help with this.

```bash
RAW='hello   world'
echo $RAW # 'hello' 'world'

echo "$RAW" # 'hello   world'
```

## String Concatenation `+=`

Strings can be concatenated using the `+=` operator.

```bash
VAR=hello
VAR+=' world'
echo "$VAR" # hello world
```

Note that bash is unique in that you can use `+=` but cannot use `+` by itself to concatenate strings `VAR=x+y` ❌. Instead you would use interpolation `VAR="$x$y"` ✅.

## String Composition `'...'"..."`

String types can easily be combined in one definition. This is often used if you need the properties of multiple strings at once.

```bash
VAR=hello
COMBINED=~/"$VAR"/world/'path with spaces'/
```

## String Slices `${STRING:start:end}`

Strings can be sliced using the syntax `${STRING:start:end}` or `${STRING:start}` or `${STRING::end}`. String slices support negative indexing.

```bash
STRING='hello world'
echo "${STRING::5}" # hello
echo "${STRING:1:5}" # ello
echo "${STRING:6}" # world
echo "${STRING:6:-1}" # worl
```

## String Length `${#STRING}`

Get the length of a string using the `#` symbol.

```bash
STRING='hello world'
echo "${#STRING}" # 11
```
