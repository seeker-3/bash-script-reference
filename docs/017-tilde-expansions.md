# Tilde Expansion `~`

When place unquoted and at the beginning of a string, `~` will expand to the home directory of the current user.

```bash
whoami # user
echo ~ # /home/user
echo ~/apps # /home/user/apps
```

If placed in quotes or not at the beginning of a string, `~` will not expand.

```bash
echo '~'/apps # '~/apps'
echo apple~bananas # apple~bananas
```

## User Expansion `~user`

When `~` is followed by a username, it will expand to the home directory of that user.

```bash
echo ~root # /root
echo ~root/bin # /root/bin
echo ~user # /home/user
echo ~user/apps # /home/user/apps
```

If the user does not exist, `~` will not expand.

```bash
echo ~nonexistent # ~nonexistent
```

## Additional Notes

There are [other features](https://www.gnu.org/software/bash/manual/bash.html#Tilde-Expansion) of `~` expansion like `~+` and `~-` that work with [the directory stack](https://www.gnu.org/software/bash/manual/bash.html#The-Directory-Stack) which are seldom used.
