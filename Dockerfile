FROM maven:3.9.5-eclipse-temurin-21-alpine AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
COPY --from=build /target/quiz_app-0.0.1-SNAPSHOT.jar quiz_app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","quiz_app.jar"]