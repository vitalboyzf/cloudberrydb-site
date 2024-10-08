---
title: dropdb
---

# dropdb

Removes a database.

## Synopsis

```shell
dropdb [<connection-option> ...] [-e] [-i] <dbname>

dropdb -? | --help

dropdb -V | --version
```

## Description

`dropdb` destroys an existing database. The user who runs this command must be a superuser or the owner of the database being dropped.

`dropdb` is a wrapper around the SQL command `DROP DATABASE`.

## Options

**`dbname`**

The name of the database to be removed.

**`-e | --echo`**

Echo the commands that `dropdb` generates and sends to the server.

**`-i | --interactive`**

Issues a verification prompt before doing anything destructive.

**`-V | --version`**

Print the `dropdb` version and exit.

**`--if-exists`**

Do not throw an error if the database does not exist. A notice is issued in this case.

**`-? | --help`**

Show help about `dropdb` command line arguments, and exit.

### Connection options

**`-h host | --host=host`**

The host name of the machine on which the Cloudberry coordinator database server is running. If not specified, reads from the environment variable `PGHOST` or defaults to localhost.

**`-p port | --port=port`**

The TCP port on which the Cloudberry coordinator database server is listening for connections. If not specified, reads from the environment variable `PGPORT` or defaults to 5432.

**`-U username | --username=username`**

The database role name to connect as. If not specified, reads from the environment variable `PGUSER` or defaults to the current system role name.

**`-w | --no-password`**

Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a `.pgpass` file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password.

**`-W | --password`**

Force a password prompt.

**`--maintenance-db=dbname`**

Specifies the name of the database to connect to in order to drop the target database. If not specified, the `postgres` database will be used; if that does not exist (or if it is the name of the database being dropped), `template1` will be used.

## Examples

To destroy the database named `demo` using default connection parameters:

```shell
dropdb demo
```

To destroy the database named `demo` using connection options, with verification, and a peek at the underlying command:

```shell
dropdb -p 54321 -h coordinatorhost -i -e demo
Database "demo" will be permanently deleted.
Are you sure? (y/n) y
DROP DATABASE "demo"
DROP DATABASE
```

## See also

[createdb](/docs/sys-utilities/createdb.md), [`DROP DATABASE`](/docs/sql-stmts/drop-database.md)
