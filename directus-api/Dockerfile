FROM directus/directus:latest

USER root

# Litefs
RUN apk add ca-certificates fuse3 sqlite
COPY --from=flyio/litefs:0.5 /usr/local/bin/litefs /usr/local/bin/litefs
ADD litefs.yml /etc/litefs.yml

# Initial migration
ADD data.db /tmp/data.db

ENTRYPOINT litefs mount