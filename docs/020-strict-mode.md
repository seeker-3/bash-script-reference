# Strict Mode

Strict mode provides a better set of default behavior for bash scripts. I learned about this feature from Anthony Explains, [here is the full video](https://youtu.be/9fSkygQ-ZjI?si=k9_CCOtDV_RY9ISv). It is enabled by adding the following line to the top of the script:

```bash
set -euo pipefail
```

Let's break down what each of these options does:

## Exit on Error `-e`

This will cause a bash script to exit if a command fails. Normally, if a command fails, a bash script will keep going. We can demonstrate this behavior by using a subshell that exits with a failure status of 1 `(exit 1)`.

```bash
(exit 1) # Exits with status 1 but keeps running the script
echo 'This will still run because -e is not set'

set -e # Turn on -e

(exit 1) # Exits with status 1 and stops the script
echo 'This will not run'

# Output:
# This will still run because -e is not set
```

### Handling Errors

You can still handle errors by using `if` statements or the `||` operator.

```bash
set -e
if ! (exit 1); then
    echo 'Command failed'
fi
echo 'Error handled'
# Output:
# Command failed
# Error handled
```

To ignore errors, you can use `|| true`.

```bash
set -e
(exit 1) || true
echo 'Error ignored'
# Output:
# Error ignored
```

Lastly, if you need to check the specific exit status of a command, you can use `|| VAR=$?` to ignore the error and capture the status.

```bash
(exit 42) || STATUS=$?

case $STATUS in
0) echo "Success" ;;
1) echo "Failure" ;;
42) echo "The answer";;
*) echo "Other" ;;
esac

# Output: The answer
```

## Unset Variables Fail `-u`

When this option is set, bash will exit if you try to use an unset variable. Normally, bash will just substitute an empty string for the unset variable.

```bash
echo $UNSET_VARIABLE # Empty string
echo 'This will still run because -u is not set'

set -u

echo $UNSET_VARIABLE
echo 'This will not run because -u is set'
# OUTPUT:
# This will still run because -u is not set
# strict-mode.bash: line 6: UNSET_VARIABLE: unbound variable
```

You can safely reference an unset variable by using the parameter expansion `${UNSET_VARIABLE:-default-value}`.

```bash
set -u
echo ${UNSET_VARIABLE:-} # Empty string
echo ${UNSET_VARIABLE:-default-value} # default-value
```

This can be very useful if your script or function takes optional positional arguments.

```bash
set -u
COMMAND=${1:-run}

case $COMMAND in
run) echo 'Running' ;; # Default action
test) echo 'Testing' ;;
skip) echo 'Skipping' ;;
*) echo 'Unknown command' ;;
esac
```

You can also check if a variable is set using the `-v` conditional expression by passing the name of the variable as a string.

```bash
if [ -v VARIABLE ]; then
    echo "Variable is: $VARIABLE"
else
    echo 'Variable is unset'
fi

VARIABLE='i love sushi'

if [ -v VARIABLE ]; then
    echo "Variable is: $VARIABLE"
else
    echo 'Variable is unset'
fi

# Output:
# Variable is unset
# Variable is i love sushi
```

## Pipe Fail `-o pipefail`

When you run a pipeline in bash, `command1 | command2 | command3`, the whole pipeline gets an exit status. By default, the pipeline will get the exit status of the last command. This can be a problem if `command1` or `command2` fails but `command3` succeeds.

With `-o pipefail`, if an error occurs in the command chain, the error will propagate through and the pipeline will exit with the status of the failing command.

```bash
(exit 1) | (exit 0)
echo "First pipeline exited with $?"

set -o pipefail

(exit 1) | (exit 0)
echo "Second pipeline exited with $?"

# Output:
# First pipeline exited with 0
# Second pipeline exited with 1
```

If multiple commands fail, the pipeline will get the status of the last failing command.

```bash
(exit 1) | (exit 2) | (exit 0)
echo "First pipeline exited with $?"

set -o pipefail

(exit 1) | (exit 2) | (exit 0)
echo "Second pipeline exited with $?"
# Output:
# First pipeline exited with 0
# Second pipeline exited with 2
```
