FROM rust:slim-buster AS builder

ARG MDBOOK_VERSION
ENV MDBOOK_VERSION ${MDBOOK_VERSION:-0.4.21}
ENV ARC="x86_64-unknown-linux-gnu"

RUN mkdir /backend

COPY . /backend/

WORKDIR /backend

RUN apt-get update && \
    apt-get install --no-install-recommends -y \
    musl-tools

RUN rustup target add "${ARC}"
RUN rustup set profile minimal
RUN rustup toolchain install stable
RUN rustup default stable

RUN cargo install mdbook --version "${MDBOOK_VERSION}" --target "${ARC}"

RUN mdbook build

FROM nginx:1-alpine

ARG DATE_CREATED

LABEL maintainer="Arash Hatami <hatamiarash7@gmail.com>"
LABEL org.opencontainers.image.created=$DATE_CREATED
LABEL org.opencontainers.image.authors="hatamiarash7"
LABEL org.opencontainers.image.vendor="hatamiarash7"
LABEL org.opencontainers.image.title="Nikas Documentation"
LABEL org.opencontainers.image.description="The first Persian comment system"
LABEL org.opencontainers.image.source="https://github.com/Nikas-Project/Documentation"

COPY --from=builder /backend/book /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
