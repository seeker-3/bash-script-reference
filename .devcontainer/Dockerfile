FROM node:20

ENV LANG=C.UTF-8
ENV LANGUAGE=en_US:en
ENV LC_ALL=C.UTF-8

RUN apt-get update
RUN apt-get -y upgrade

# OMZ
RUN bash -c "$(curl -fsSL https://raw.github.com/seeker-3/what-the-dock/main/install.bash)"

# nodejs
# RUN curl -fsSL https://deb.nodesource.com/setup_current.x | bash -
# RUN apt-get -y install nodejs
# RUN npm -g i npm
RUN corepack enable pnpm

# deno
RUN curl -fsSL https://deno.land/install.sh | sh
RUN echo 'export DENO_INSTALL=~/.deno' >>~/.zshrc
RUN echo 'PATH+=:~/.deno/bin' >>~/.zshrc

# bun
RUN curl -fsSL https://bun.sh/install | bash

RUN apt-get autoremove
RUN apt-get clean
RUN apt-get autoclean
RUN apt-get -f install
