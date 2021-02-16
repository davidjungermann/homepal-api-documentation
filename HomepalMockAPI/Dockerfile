# Pull down an image from Docker Hub that includes the .NET core SDK: 
# https://hub.docker.com/_/microsoft-dotnet-sdk
# This is so we have all the tools necessary to compile the app.

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
# Fetch and install Node 10. Make sure to include the --yes parameter 
# to automatically accept prompts during install, or it'll fail.

RUN curl --silent --location https://deb.nodesource.com/setup_15.x | bash -
RUN apt-get install --yes nodejs

# Copy the source from your machine onto the container.
WORKDIR /src
COPY . .
RUN chmod 777 HomepalMock.db

# Install dependencies. 
# https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-restore?tabs=netcore2x
RUN dotnet restore "./HomepalMockAPI.csproj"

# Compile, then pack the compiled app and dependencies into a deployable unit.
# https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish?tabs=netcore21
RUN dotnet publish "HomepalMockAPI.csproj" -c Release -o /app/publish
COPY HomepalMock.db /app/publish

# Pull down an image from Docker Hub that includes only the ASP.NET core runtime:
# https://hub.docker.com/_/microsoft-dotnet-aspnet
# We don't need the SDK anymore, so this will produce a lighter-weight image
# that can still run the app.
FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim

# Expose port 5000 to your local machine so you can access the app.
EXPOSE 5000
ENV ASPNETCORE_URLS http://*:5000

# Copy the published app to this new runtime-only container.
COPY --from=build /app/publish .

# To run the app, run `dotnet sample-app.dll`, which we just copied over.
ENTRYPOINT ["dotnet", "HomepalMockAPI.dll"]
