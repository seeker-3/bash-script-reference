# Functions

Functions are a way to group commands together and reuse them. They behave like commands and can take arguments and return exit codes.

## Defining Functions `fn() { ... }`

Function identifiers are more permissive than variable identifiers, for instance you can use `-` and `+` in function names, but I personally recommend sticking to the same naming conventions as variables, `[_a-zA-Z][_a-zA-Z0-9]*`, an underscore or letter, followed by underscores, letters, or numbers. Functions are conventionally defined using lower snake case `my_function`.

Functions are defined in the following way:

```bash
fn() {
  echo 'Hello, World!'
}
```

Bash also has a `function` keyword for declaring functions, but the shorthand above is preferred.

```bash
function fn() {
  echo 'Hello, World!'
}
```

## Calling Functions `fn`

Call a function like running a command.

```bash
fn
```

## Calling Functions with Arguments `fn 1 2 3`

Pass arguments to a function by separating them with spaces just like running a command.

```bash
fn arg1 arg2 arg3
```

## Using Functions Arguments `"$@"`

Function arguments are access the same way as cli arguments using [special parameters](special-parameters). Arguments are not explicitly declared in the function's signature.

```bash
fn() {
  # First argument
  echo "$1" # arg1
  # Second argument
  echo "$2" # arg2
  # Third argument
  echo "$3" # arg3
  # All arguments as separate strings
  echo "$@" # 'arg1' 'arg2' 'arg3'
  # Number of arguments
  echo "$#" # 3
  # Still echoes arg0 of the cli and not the function name
  echo "$0" # functions.bash
  # All arguments as a single string
  echo "$*" # 'arg1 arg2 arg3'
}

fn arg1 arg2 arg3
```

[`shellcheck`](bonus) will warn you if you do not supply the right number of arguments when calling a function.

## Local Variables `local`

Local variables can be defined inside a function using the `local` keyword. It is my preference to use lower snake case for local variables.

```bash
fn() {
  local directory='$1'
}
```

## Local Variable References `local -n`

References to outside variables can be created using `local -n`. References will modify the original variable inside the function similar to the `&` pass by reference in `C++`. The variable name is passed as a string.

```bash
add_world() {
  local -n greeting_ref=$1
  echo "$greeting_ref" # Hello
  greeting_ref+=', World'
  echo "$greeting_ref" # Hello, World
}

GREETING=Hello

add_world GREETING # Pass the variable name as a string

echo "$GREETING" # Hello, World
```

## Returning Exit Codes `return`

Since functions behave like commands, they do not "return" values they return exit codes, 0 for success, and non-zero for failure. The exit code is returned using the `return` keyword. A status of `return 0` at the end is implicit.

```bash
fn() {
  if ! [[ -d $1 ]]; then
    # Print error message to stderr
    echo "Directory does not exist: $1" >&2

    # Exit with error
    return 1
  fi

  # Exit with success (implicit behavior)
  return 0
}
```

## "Returning" a Value `echo ...`

Just like commands, functions do not return values in the traditional sense. Instead "values" are printed to `stdout` (or `stderr`) and can be captured with [command substitution].

When returning a single value, you can simply use `echo`.

```bash
get_a_value() {
  echo 'Some string'
}

SOME_STRING=$(get_a_value)

echo "$SOME_STRING" # Some string
```

```bash
prefix_paths() {
  local prefix="$1"

  local path
  for path in "${@:2}"; do
    echo "$prefix/$path"
  done
}

mapfile -t PATHS PATHS <<<"$(prefix_paths '/usr' 'bin' 'lib' 'share')"

echo "${PATHS[@]}" # /usr/bin /usr/lib /usr/share
```

## Brackets vs. Parentheses

In bash you can also define functions using `()` instead of `{}`. This essentially executes the function as a subshell instead of a command group. This is generally not needed.

```bash
fn() (
  echo 'I am a subshell!'
)
```

## Passing STDIN to Functions

If you pass standard input to a function, similar to a subshell or command group, the first command in the block will receive the input.

```bash
print_stdin() {
  cat
}

print_stdin <<<'Hello!' # Hello!
```

You could use this to setup a pipe as a function

```bash
grep_sort_uniq() {
  local pattern="$1"
  grep "$pattern" | uniq | sort
}
```

STDIN can be captured into a variable using process substitution with `cat`.

```bash
capture_stdin() {
  local stdin=$(cat)
  echo "stdin is: $stdin"
}

print_stdin <<<"That's neat!" # stdin is: That's neat!
```

Lastly, if you would like to conditionally capture stdin, you check if stdin was given using an `if` statement with `-t`.

```bash
maybe_stdin() {
  # `stdin` will be the empty string if there is no stdin
  local stdin=$(if ! [[ -t 0 ]]; then cat; fi)

  if [[ $stdin ]]; then
    echo "stdin is: $stdin"
  else
    echo 'No stdin'
  fi
}

maybe_stdin <<<'Here is some input!' # stdin is: Here is some input!
maybe_stdin                          # No stdin
```
