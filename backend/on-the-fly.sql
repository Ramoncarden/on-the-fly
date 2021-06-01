\echo 'Delete and recreate on the fly db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE on_the_fly
CREATE DATABASE on_the_fly
\connect on_the_fly

\i on_the_fly-schema.sql

\echo 'Delete and recreate on_the_fly_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE on_the_fly_test;
CREATE DATABASE on_the_fly_test;
\connect on_the_fly_test

\i on_the_fly-schema.sql