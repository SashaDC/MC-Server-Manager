export default function ServerCreationLogic(Details) {}

//The logic for this is:
// it will make a folder with the server name,
// then it will use the server version's object to use the url for said folder.
// The url is another json file which means it will need to be fetched and look for downloads.server.url which is the actual .jar file url.
// Then it will unzip the file, and delete the zip.
// It will then run the .jar file once to generate files.
// Once files have been generated, it will modify the eula.txt file to set eula=true, and then run the .jar file again to start the server temporarily.
// Once the server is running, it will stop the server and then it will navigate to the server management page for that server.
// Maybe use params for server management page.
