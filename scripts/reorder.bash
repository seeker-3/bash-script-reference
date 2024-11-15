set -euo pipefail
shopt -s extglob globstar nullglob

RED='\e[0;31m'
GREEN='\e[0;32m'
YELLOW='\e[0;33m'
BLUE='\e[0;34m'
RESET='\e[0m'

ORDER_FILENAME=order.txt

DOCS_DIR=$(dirname "$(dirname "$(realpath "$0")")")/docs

if [[ $* == *--dry* || $* == *--dry-run* || $* == *-?(d|o)d* ]]; then
    IS_DRY=true
else
    IS_DRY=false
fi

if [[ $* == *--overwrite* || $* == *-?(d|o)o* ]]; then
    IS_OVERWRITE=true
else
    IS_OVERWRITE=false
fi

get_short_name() {
    local name="$1"
    local short=${name#"$DOCS_DIR"}
    if [[ -d $name ]]; then
        echo -n "docs${short}/"
    else
        echo -n "docs${short}"
    fi

}

read_order_file() {
    {
        cat "$1"
        echo
    } | sed -E \
        -e '/^[[:space:]]*$/d' \
        -e 's/^[[:space:]]*|[[:space:]]*$//g'
}

read_doc_names() {
    local dir="$1"
    local docs=("$dir"/*.@(md|mdx))

    docs=("${docs[@]#$dir/}") # remove dir prefix
    # shellcheck disable=SC2180
    docs=("${docs[@]#[01][0-9][0-9]-}") # remove possible number prefix
    docs=("${docs[@]%.*}")              # remove extension suffix

    tr ' ' '\n' <<<"${docs[@]}"
}

read_doc_dirs() {
    echo "$DOCS_DIR"
    local name
    for name in "$DOCS_DIR"/**/*; do
        if [[ -d "$name" ]]; then
            echo "$name"
        fi
    done
}

reorder() {
    local dir

    read_doc_dirs | while read -r dir; do
        local order_file="$dir/$ORDER_FILENAME"
        local short_order_file
        short_order_file=$(get_short_name "$order_file")

        if ! [[ -f "$order_file" ]] || $IS_OVERWRITE; then
            echo -e "${GREEN}created${RESET} $short_order_file" >&2
            if [[ $(read_doc_names "$dir") ]] && ! $IS_DRY; then
                read_doc_names "$dir" >"$order_file"
            fi
        fi

        if ! [[ -f "$order_file" ]]; then
            continue
        fi

        if ! [[ $(read_doc_names "$dir" | sort) == $(read_order_file "$order_file" | sort) ]]; then
            echo -e "${RED}mismatched${RESET} $short_order_file" >&2
            echo >&2
            printf "  ${BLUE}%-61s %s${RESET}\n\n" 'documents' "$ORDER_FILENAME" >&2
            diff -y --color=always <(
                read_doc_names "$dir" | sort
            ) <(
                read_order_file "$order_file" | sort
            ) | sed 's/^/  /' >&2
            continue

        else
            echo -e "${GREEN}matched${RESET} $short_order_file"
        fi

        # Verify that each keyword in the order file matches exactly one document
        if ! (
            local result=0
            local name
            while read -r name; do
                local glob=("$dir"/?([01][0-9][0-9]-)"$name".@(md|mdx))

                case ${#glob[@]} in
                1) continue ;;
                0) echo -e "  ${RED}no matches${RESET} for '$name' keyword" >&2 ;;
                *)
                    echo -e "  ${RED}duplicate matches${RESET} for '$name' keyword" >&2
                    local match
                    for match in "${glob[@]}"; do
                        echo "    - $(get_short_name "$match")" >&2
                    done
                    ;;
                esac
                result=1

            done < <(read_order_file "$order_file")

            exit $result
        ); then
            echo -e "${RED}mismatched${RESET} $short_order_file keywords" >&2
            continue

        # else
        # echo -e "${GREEN}matched${RESET} $short_order_file keywords"
        fi

        # shellcheck disable=SC2005
        echo "$(get_short_name "$dir")"

        local number
        local name

        read_order_file "$order_file" | cat -n | while read -r number name; do
            local glob=("$dir"/?([01][0-9][0-9]-)"$name".@(md|mdx))
            local old=${glob[0]}
            local ext=${old##*.}
            local new
            new=$dir/$(printf "%03d" "$number")-$name.$ext

            if [[ $old == "$new" ]]; then
                echo "  $(get_short_name "$new")"
                continue
            fi

            echo -e "${RED}- $(get_short_name "$old")${RESET} ➞"
            echo -e "${GREEN}+ $(get_short_name "$new")${RESET}"
            if ! $IS_DRY; then
                mv "$old" "$new"
            fi
        done
    done

    if $IS_DRY; then
        echo -e "${YELLOW}dry run${RESET}"
    fi
}

reorder
