# Functions

## Defining Functions `fn() { ... }`

The `function` keyword is unnecessary and not recommended.

```bash
fn() {
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

Function arguments are access the same way as cli arguments using [special parameters](special-parameters).

## Local Variables `local`

References `local -n`

```bash
fn() {
  local var='Hello, World!'
  echo "$var"
}
```

## Returning Exit Codes `return`

```bash
fn() {
  if ! [[ -d $1 ]]; then
    # Print error message to stderr
    echo "Directory does not exist: $1" >&2

    # Exit with error
    return 1
  fi

  # Exit with success
  return 0
}
```

## "Returning" Values `echo -n ...`

```bash
fn() {
  echo -n 'Some string'
}
```

## Brackets vs. Parentheses

```bash
fn() {
  echo -n 'Hello, World!'
}
```

## Passing STDIN to Functions
