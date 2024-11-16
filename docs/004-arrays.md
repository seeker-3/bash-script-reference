# Arrays

## Declaring Arrays `ARRAY=(...)`

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

## Indexing Arrays `${ARRAY[i]}`

Arrays are zero indexed and can be accessed like this and support negative indexing.

```bash
echo "${ARRAY[0]}"  # 1
echo "${ARRAY[1]}"  # hello
echo "${ARRAY[-1]}" # world
```

Set an element in an array like this.

```bash
ARRAY[0]=2
echo "${ARRAY[0]}" # 2
```

## Array Expansion to Separate Strings `${ARRAY[@]}`

To get the whole array, use the `@` symbol. Referencing the array by itself will only return the first element.

```bash
echo "${ARRAY[@]}" # '1' 'hello' '3' 'world'
echo "$ARRAY"      # 1
```

If you do not quote the array, the individual elements will be expanded (not recommended).

```bash
ARRAY=(1 'hello world' 3 world)
echo "${ARRAY[@]}" # '1' 'hello world' '3' 'world'
echo ${ARRAY[@]}   # '1' 'hello' 'world' '3' 'world'
```

## Array Expansion to a Single String `${ARRAY[*]}`

To convert the array to a string, use the `*` symbol.

```bash
echo "${ARRAY[*]}" # '1 hello 3 world'
```

## Array Keys `${!ARRAY[@]}`

Get the keys of an array using the `!` symbol.

```bash
echo "${!ARRAY[@]}" # 0 1 2 3
```

## Array Length `#`

Get the length of an array using the `#` symbol.

```bash
echo "${#ARRAY[@]}" # 4
```

## Array Concatenation `ARRAY2=("${ARRAY[@]}" "${ARRAY[@]}")`

Concatenate arrays by spreading them them.

```bash
ARRAY=(1 hello 3 world)
ARRAY2=("${ARRAY[@]}" x y "${ARRAY[@]}")
echo "${ARRAY[@]}" # '1' 'hello' '3' 'world' 'x' 'y' '1' 'hello' '3' 'world'
```

## Array Slices `${ARRAY[@]:start:length}`

Slice arrays by using the syntax `${ARRAY[@]:start:length}` or `${ARRAY[@]:start}`. Array slices do not support negative indexing.

```bash
ARRAY=(0 1 2 3 4 5 6 7 8 9)
echo "${ARRAY[@]:1:3}" # '1' '2' '3'
echo "${ARRAY[@]:5}"   # '5' '6' '7' '8' '9'

# Or as a string
echo "${ARRAY[*]:1:3}" # '1 2 3'
echo "${ARRAY[*]:5}"   # '5 6 7 8 9'
```

## Array Iteration `for ... in ${ARRAY[@]}`

Iterate over an array using the `@` symbol.

```bash
for x in "${ARRAY[@]}"; do
  echo "$x"
done
```

## Splitting Strings into Arrays

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

## Practical Uses of Arrays

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
