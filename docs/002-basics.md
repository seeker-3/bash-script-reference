# Basics

## Comments

Comments are lines that start with a `#` character. Bash does not support multi-line comments.

```bash
# This is a comment
```

## Printing to the Console `echo`

Bash has a builtin command `echo` that will print its arguments to the console.

```bash
echo 1 2 3 # 1 2 3
```

## Variables

Variables in bash are untyped however, the only primitive data type in bash is a string. Bash has "numbers" but they are just strings that can be interpreted as numbers in certain contexts.

Variables follow the same rules as identifiers in in `C`. Variables must start with a letter or an underscore `[_a-zA-Z]` and can contain letters, numbers, and underscores `[_a-zA-Z0-9]`. Variables are case sensitive.

Variables in bash are commonly written in upper snake case by convention `MY_VARIABLE`.

### Declaring Variables `X=`

Declare variables using `=` immediately after an identifier. Variables cannot have spaces around the `=` sign.

```bash
X=
# X is the empty string
```

### Assigning a Value `X=1

Assign a value to a variable by placing a string after the `=` sign.

```bash
X=1
# X is now 1
```

### Reassigning Variables `VAR=x`

Once a variable is declared, it can be reassigned.

```bash
X=1
X=2
# X is now 2
```

### Referencing Variables `$VAR`

Reference a variable using the `$` sign.

```bash
X=1
X2=$X
echo $X $X2 # 1 1
```

<!-- ### Unsetting Variables `unset VAR` -->

### Variable Interpolation

Variables in bash can easily be interpolated by simply placing the variable name in a string. Any character that cannot be part of the identifier will be seen as the end of the variable name e.g. `-`, `/`, `$`

```bash
X=1
XS=$X$X
echo $XS # 11
```

```bash
APPS_DIR=apps
NEOVIM_PATH=$HOME/$APPS_DIR/nvim
echo "$NEOVIM_PATH" # ~/apps/nvim
```

In a situation where you want to use a character that is not allowed in an identifier, you can use curly braces `{}` to specify the end of the variable name.

```bash
X=1
WRAPPED_X=__${X}__
echo $WRAPPED_X # __1__
```

<!-- ### The `declare` keyword -->

<!-- ### Readonly Variables -->

## Running Commands

By default, just like the cli, anything typed on a line will be executed as a command.

```bash
ls # lists the files in the current directory
```

### Variables as Commands

Even variables by themselves will be interpreted as commands.

```bash
MY_LS=ls
$MY_LS      # lists the files in the current directory
echo $MY_LS # ls
```

### Passing Arguments to Commands

Same as the cli, arguments to commands are separated by spaces.

```bash
echo arg1 arg2 arg3 # arg1 arg2 arg3
```

If you want to run a command that spans multiple lines, you can use a backslash `\` to escape newlines between arguments.

```bash
echo \
  1 \
  2 \
  3
```

This can be useful when you want to break up a long command into multiple lines for better readability.

For example, when installing multiple packages with `apt`, you can put each package on a new line.

```bash
apt -y install \
  build-essential \
  curl \
  git \
  zsh
```

Or a `sed` command that has multiple expressions, you can put each expression on a separate line.

```bash
# Remove blank lines, leading and trailing whitespace on non-empty lines
sed -E \
  -e '/^[[:space:]]*$/d' \
  -e 's/^[[:space:]]*|[[:space:]]*$//g'
```
