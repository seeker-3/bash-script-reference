# Your First Bash Script

This file will walk you through the basics of what you need to know to get started.

## Bash Version

Bash should come by default on most Unix/Linux systems. You can see which version of bash you have with the `--version` flag.

```bash
bash --version
```

<!-- TODO Script for getting the latest version? -->

```txt
GNU bash, version 5.2.15(1)-release (x86_64-pc-linux-gnu)
Copyright (C) 2022 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>

This is free software; you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```

## Hello, World

To create a bash script, make a new file with a `.bash` extension.

```bash
touch script.bash
```

Open the file in your favorite text editor and add the following line.

```bash
echo 'Hello, World!'
```

Run the script with the following command.

```bash
bash script.bash
```

You should see the following output.

```txt
Hello, World!
```
