module.exports = function () {
    return {
      flywayArgs: {
        url: "jdbc:postgresql://localhost:5432/notesDB?user=postgres&password=12345678",
        schemas: "public",
        locations: "filesystem:database/migrations",
        user: "postgres",
        password: "12345678",
        sqlMigrationSuffixes: ".sql",
        baselineOnMigrate: true,
      },
      env: {
        JAVA_ARGS: "-Djava.util.logging.config.file=./conf/logging.properties",
      },
      version: "6.3.2",
      mavenPlugins: [
        {
          groupId: "org.slf4j",
          artifactId: "slf4j-api",
          version: "1.7.25",
          downloadUrl:
            "https://repo1.maven.org/maven2/org/slf4j/slf4j-api/1.7.25/slf4j-api-1.7.25.jar",
        },
        {
          groupId: "org.slf4j",
          artifactId: "slf4j-jdk14",
          version: "1.7.25",
        },
      ],
    };
  };
  