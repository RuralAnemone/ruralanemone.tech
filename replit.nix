{ pkgs }:
let

    nginxModified = pkgs.nginx.overrideAttrs (oldAttrs: rec {
        configureFlags = oldAttrs.configureFlags ++ [
            "--http-client-body-temp-path=/home/runner/ruralanemone/cache/client_body"
            "--http-proxy-temp-path=/home/runner/ruralanemone/cache/proxy"
            "--http-fastcgi-temp-path=/home/runner/ruralanemone/cache/fastcgi"
            "--http-uwsgi-temp-path=/home/runner/ruralanemone/cache/uwsgi"
            "--http-scgi-temp-path=/home/runner/ruralanemone/cache/scgi"
         ];
    });

in {
    deps = [
        nginxModified
        pkgs.python39
        pkgs.python39Packages.flask
        pkgs.python39Packages.waitress
        pkgs.postgresql
        pkgs.python39Packages.psycopg2
    ];

}