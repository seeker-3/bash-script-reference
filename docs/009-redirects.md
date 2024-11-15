# Redirects

## Read a File to STDIN `<`

```bash
command < input.txt
```

## Read a String to STDIN `<<<`

```bash
command <<<'string'
command <<<"$VARIABLE"
```

## Write to a File from STDOUT `>`

```bash
command > output.txt
```

## Append to a File from STDOUT `>>`

```bash
command >> more_output.txt
```

## File Descriptors

## Open a File `exec fd<>file.txt`

## Close a File `exec fd>&-`
