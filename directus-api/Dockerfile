FROM litestream/litestream:latest AS litestream

FROM directus/directus:latest

USER root

# Litefs
RUN apk add ca-certificates fuse3 sqlite
COPY --from=flyio/litefs:0.5 /usr/local/bin/litefs /usr/local/bin/litefs
ADD litefs.yml /etc/litefs.yml

# Litestream
COPY --from=litestream /usr/local/bin/litestream /usr/local/bin/litestream
ADD litestream.yml /etc/litestream.yml

ENTRYPOINT litefs mount