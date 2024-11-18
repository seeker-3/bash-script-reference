# Globbing

Globbing is a basic pattern matching feature that lets you match strings or files.

To match strings, glob expressions can be used in [conditionals](conditionals), [case statements](control-flow#case-statements), or [parameter expansions](parameter-expansions).

To match files, a glob expression placed in a command or an array definition will be expanded to a list of files that match the pattern. If no files match the pattern, the glob expression will be left as is.

<!--
## Usages

In a command

```bash
echo *
```

In a for loop

```bash
for FILE in *; do
  echo "$FILE"
done
```

In an array definition

```bash
FILES=(*)
```

In a conditional

```bash
if [[ $STRING == * ]]; then

fi
```

In a case statement

```bash
case $STRING in

*)
  echo 'There are no txt files'
  ;;
esac
```

In a parameter expansion

```bash
echo ${STRING##*.}
```
-->

## Wildcards `*`

The `*` character matches zero or more characters.

This will print all files in the current directory.

```bash
echo *
```

This will iterate over all files in the current directory.

```bash
for FILE in *; do
  echo "$FILE"
done
```

This will store all files in the current directory in an array.

```bash
FILES=(*)
```

This will print all the `.txt` files in the current directory.

```bash
echo *.txt
```

Print all files with `config` in the name.

```bash
echo *config*
```

## Directory Wildcards `**/pattern`

The `shopt -s globstar` option must be enabled to use this feature.

When a glob pattern is prefixed with `**/`, it will recursively search the current directory and all subdirectories for files that match the pattern.

## Single Character `?`

The `?` character matches exactly one character.

In a JavaScript project that has a mix of JS and TS files, you could use `?` in the following way to match `script.js` and `script.ts`.

```bash
echo script.?s
```

## Single Character Ranges `[...]`

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

## Extended Globbing

Bash has an extended globbing feature that should be on by default in newer version fo bash can be turned on with `shopt -s extglob`. Extended globs allow you to specify lists of patterns separated by `|`.

### Match One of the Pattern List `@(pattern-list)`

TODO

### Match Anything Except One of the Pattern List `!(pattern-list)`

TODO

### Match Zero or One of the Pattern List `?(pattern-list)`

If you wanted to match all `.txt` files, `.bash` files, or no extension files, you could use the following pattern.

```bash
echo *?(.txt|.bash)
```

### Match Zero or More of the Pattern List `*(pattern-list)`

TODO

### Match One or More of the Pattern List `+(pattern-list)`

TODO

## Globbing Options `shopt -s option`

Bash has several globbing options that can be set by placing `shopt -s option` at the top of your script. Options can be unset with `shopt -u option`.

By default if a glob is not match, it will not expand. If you did the following glob in a directory that had not txt files, it would not expand. `*.txt` would stay as `*.txt`.

```bash
echo *.txt # *.txt
```

This is often not ideal if you want to error check that a glob was able to match files.

- `shopt -s nullglob`: If a glob does not match, it will return the empty string.
- `shopt -s failglob`: If a glob does not match, it will throw an error exiting the script if unhandled.
- `shopt -s dotglob`: By default, `echo *` will not include files that start with a `.`. This option will include them.
- `shopt -s globskipdots`:
- `shopt -s extglob`: Extended globbing syntax to match lists of glob patterns. Should be on by default in newer versions of bash.
- `shopt -s nocaseglob`: Makes globs case insensitive.
- `shopt -s globstar`: When set `**` will match zero or more directories recursively.
- `shopt -s nocasematch`: Makes case insensitive matching for `[[` globs or `case` statements.
