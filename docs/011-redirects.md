# Redirects `>`

## Read a File into STDIN `<`

```bash
command <input.txt
```

## Read a String into STDIN `<<<`

```bash
command <<<'string'
command <<<"$VARIABLE"
```

## Read a Raw String into STDIN `<<`

```bash
command <<EOF
raw
string
EOF
```

```bash
command <<-EOF
raw
string
EOF
```

```bash
command <<'EOF'
raw
string
EOF
```

## Write STDOUT to a File `>`

```bash
command >output.txt
```

## Append STDOUT to a File `>>`

```bash
command >>more_output.txt
```

## File Descriptors

- `0` STDIN
- `1` STDOUT
- `2` STDERR

### Redirect from STDOUT `1>file`

### Redirect from STDERR `2>file`

### Redirect from STDOUT and STDERR `&>file`

### Redirect to STDOUT `fd>&1`

### Redirect to STDERR `fd>&2`

### Discarding Output `fd>/dev/null`

### Redirect Input `fd<file`

### Custom File Descriptor

#### Open a File `exec fd<>file`

#### Close a File `exec fd>&-`
