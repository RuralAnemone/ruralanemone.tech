{ pkgs }:

in {
    deps = [
        nginxModified
        pkgs.python39
        pkgs.python39Packages.flask
        pkgs.python39Packages.waitress
        pkgs.postgresql
        pkgs.python39Packages.psycopg2
        pkgs.tree
    ];

}