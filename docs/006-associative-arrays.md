# Associative Arrays `([key]=value)`

Associative arrays are similar to arrays except they use keys instead of indexes so nearly all the same [array operations](arrays) apply. However, associative arrays do not support an easy way to concatenated/union them together like arrays, and reading them from a string is not as straight forward. Like Arrays, associative arrays cannot be multidimensional.

:::tip

Associative arrays are seldom used and you may need a more powerful language if you find yourself needing them.

:::

## Declaring Associative Arrays

You can declare a associative arrays two ways.

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

## Associative Array Expansions

Get the keys of a associative arrays using the `!` symbol (same as arrays). Use `@` to get them an an array `*` to get them as a string.

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
